import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBlogSection {
  id: string;
  title: string;
  content: {
    subHeading: string;
    text: string;
  }[];
}

export interface IBlog extends Document {
  title: string;
  slug: string;
  date: Date;
  author: string;
  coverImage: string;
  excerpt: string;
  sections: IBlogSection[];
  isDraft: boolean;
  views: number;
}

const BlogSectionSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  content: [{
    subHeading: { type: String, default: "" },
    text: { type: String, default: "" }
  }],
});

const BlogSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now },
    author: { type: String, required: true, default: "Acadally" },
    coverImage: { type: String, default: "" },
    excerpt: { type: String, default: "" },
    sections: { type: [BlogSectionSchema], default: [] },
    isDraft: { type: Boolean, default: false },
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
