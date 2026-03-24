"use client";

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { FiPlus, FiTrash2, FiSave, FiLayers, FiType, FiFileText, FiMenu } from 'react-icons/fi';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

// Sortable Item Component
function SortableSectionItem({
  id,
  idx,
  title,
  isActive,
  onClick,
  onDelete
}: {
  id: string,
  idx: number,
  title: string,
  isActive: boolean,
  onClick: () => void,
  onDelete: (e: React.MouseEvent) => void
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="group relative"
    >
      <button
        onClick={onClick}
        className={`w-full text-left px-3 py-2.5 rounded-lg transition-all flex items-center gap-3 ${isActive
            ? 'bg-[#1C4CC3] text-white'
            : 'text-gray-500 hover:bg-gray-50 bg-white border border-gray-100'
          }`}
      >
        <div {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing p-1 -ml-1 hover:bg-black/10 rounded">
          <FiMenu size={12} className={isActive ? 'text-white/50' : 'text-gray-300'} />
        </div>
        <span className={`text-[10px] font-black w-4 h-4 flex shrink-0 items-center justify-center rounded-full ${isActive ? 'bg-white/20' : 'bg-gray-100'}`}>
          {idx + 1}
        </span>
        <span className="truncate font-bold text-xs uppercase tracking-tight flex-1">{title || "Untitled"}</span>
      </button>

      <button
        onClick={onDelete}
        className={`absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md transition-all opacity-0 group-hover:opacity-100 ${isActive ? 'text-white/50 hover:text-white hover:bg-white/10' : 'text-gray-300 hover:text-red-500 hover:bg-red-50'
          }`}
      >
        <FiTrash2 size={12} />
      </button>
    </div>
  );
}

export default function BlogEditor({ initialData = null }: { initialData?: any }) {
  const router = useRouter();
  const [title, setTitle] = useState(initialData?.title || '');
  const [author, setAuthor] = useState(initialData?.author || 'AcadAlly');
  const [coverImage, setCoverImage] = useState(initialData?.coverImage || '');
  const [sections, setSections] = useState<any[]>(initialData?.sections || [
    { id: 'section-1', title: 'Introduction', content: [{ text: '' }] }
  ]);
  const [isDraft, setIsDraft] = useState(initialData?.isDraft ?? false);
  const [loading, setLoading] = useState(false);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  // Setup DND Sensors
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleSectionTitleChange = (index: number, value: string) => {
    const newSections = [...sections];
    newSections[index].title = value;
    setSections(newSections);
  };

  const addSection = () => {
    const newId = `section-${Date.now()}`;
    const newSections = [
      ...sections,
      { id: newId, title: 'New Section', content: [{ text: '' }] }
    ];
    setSections(newSections);
    setActiveSectionIndex(newSections.length - 1);
  };

  const removeSection = (index: number) => {
    if (sections.length <= 1) return;
    const newSections = sections.filter((_, i) => i !== index);
    setSections(newSections);
    setActiveSectionIndex(Math.max(0, index - 1));
  };

  const addSubContent = (sectionIndex: number) => {
    const newSections = [...sections];
    newSections[sectionIndex].content.push({ text: '' });
    setSections(newSections);
  };

  const removeSubContent = (sectionIndex: number, contentIndex: number) => {
    const newSections = [...sections];
    newSections[sectionIndex].content = newSections[sectionIndex].content.filter((_: any, i: number) => i !== contentIndex);
    setSections(newSections);
  };

  const updateSubContent = (sectionIndex: number, contentIndex: number, field: string, value: string) => {
    const newSections = [...sections];
    newSections[sectionIndex].content[contentIndex][field] = value;
    setSections(newSections);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setSections((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);

        const newArr = arrayMove(items, oldIndex, newIndex);
        // Sync active index if the currently active section moved
        if (oldIndex === activeSectionIndex) {
          setActiveSectionIndex(newIndex);
        } else if (activeSectionIndex > Math.min(oldIndex, newIndex) && activeSectionIndex < Math.max(oldIndex, newIndex)) {
          // handle shifting
        }
        return newArr;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      title,
      author,
      coverImage,
      excerpt: '', // Removed brief summary requirement
      sections,
      isDraft,
      slug: initialData?.slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
    };

    try {
      const url = initialData ? `/api/blogs/${initialData._id}` : '/api/blogs';
      const method = initialData ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        router.push('/admin/dashboard');
      } else {
        alert('Error saving blog: ' + data.error);
      }
    } catch (err: any) {
      alert('Network error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Main Content Area */}
      <div className="flex-1 w-full space-y-6">
        {/* Blog Metadata */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-gray-800 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
            <FiFileText className="text-[#1C4CC3]" /> Blog Core
          </h3>
          <div className="space-y-4">
            <input
              required
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1C4CC3] focus:bg-white outline-none transition-all text-black text-lg font-bold"
              placeholder="Blog Title"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                required
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1C4CC3] focus:bg-white outline-none text-black text-sm"
                placeholder="Author"
              />
              <input
                type="text"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1C4CC3] focus:bg-white outline-none text-black text-sm"
                placeholder="Cover Image URL"
              />
            </div>
          </div>
        </div>

        {/* Active Section Content */}
        {sections.map((section, sIndex) => (
          <div
            key={section.id}
            className={`transition-all duration-300 ${sIndex === activeSectionIndex ? 'opacity-100' : 'hidden'}`}
          >
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-2 flex-1">
                  <FiLayers className="text-[#1C4CC3] text-xs" />
                  <input
                    required
                    type="text"
                    value={section.title}
                    onChange={(e) => handleSectionTitleChange(sIndex, e.target.value)}
                    className="bg-transparent border-none focus:ring-0 text-gray-800 font-bold text-sm w-full p-0"
                    placeholder="Enter Section Title"
                  />
                </div>
              </div>

              <div className="p-4 space-y-4">
                {section.content.map((content: any, cIndex: number) => (
                  <div key={cIndex} className="relative group">
                    <ReactQuill
                      theme="snow"
                      value={content.text}
                      onChange={(value) => updateSubContent(sIndex, cIndex, 'text', value)}
                      className="bg-white text-black min-h-[300px] rounded-lg overflow-hidden border border-gray-200"
                    />
                    {section.content.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSubContent(sIndex, cIndex)}
                        className="absolute -top-2 -right-2 bg-white border border-gray-200 text-gray-400 hover:text-red-500 rounded-full p-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <FiTrash2 size={12} />
                      </button>
                    )}
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => addSubContent(sIndex)}
                  className="w-full py-2 border border-dashed border-gray-200 rounded-lg text-gray-400 hover:text-[#1C4CC3] hover:border-[#1C4CC3] text-xs font-bold transition-all flex items-center justify-center gap-1"
                >
                  <FiPlus /> New Text Block
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Global Footer Actions */}
        <div className="flex items-center justify-between gap-4 pt-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm sticky bottom-2 z-10">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isDraft}
              onChange={(e) => setIsDraft(e.target.checked)}
              className="w-4 h-4 text-[#1C4CC3] border-gray-300 rounded focus:ring-[#1C4CC3]"
            />
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Draft</span>
          </label>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-[#1C4CC3] hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-lg shadow-md transition-all flex items-center gap-2 disabled:opacity-50 text-sm"
          >
            {loading ? 'Saving...' : (
              <>
                <FiSave /> {initialData ? 'Update' : 'Publish'}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Sidebar Navigation with DND */}
      <div className="w-full lg:w-64 shrink-0 sticky top-10 flex flex-col gap-4">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden p-2">
          <div className="p-2 border-b border-gray-50 flex items-center justify-between mb-2">
            <h4 className="font-bold text-gray-800 text-[10px] uppercase tracking-widest">Outline</h4>
            <span className="bg-gray-100 text-gray-400 text-[10px] px-2 py-0.5 rounded-full font-bold">{sections.length}</span>
          </div>

          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={sections.map(s => s.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
                {sections.map((s, idx) => (
                  <SortableSectionItem
                    key={s.id}
                    id={s.id}
                    idx={idx}
                    title={s.title}
                    isActive={idx === activeSectionIndex}
                    onClick={() => setActiveSectionIndex(idx)}
                    onDelete={(e) => {
                      e.stopPropagation();
                      removeSection(idx);
                    }}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>

          <button
            onClick={addSection}
            className="w-full mt-3 py-2 bg-[#F0F5FF] text-[#1C4CC3] rounded-lg font-bold text-xs hover:bg-[#1C4CC3] hover:text-white transition-all flex items-center justify-center gap-1"
          >
            <FiPlus /> Add Section
          </button>
        </div>
      </div>
    </div>
  );
}

