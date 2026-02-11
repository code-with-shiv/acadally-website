"use client";

import { useEffect, useRef } from "react";
import { CURSOR_Z_INDEX } from "@/utils/constants";

export default function CursorFollower() {
    const cursorRef = useRef<HTMLDivElement>(null);

    const positionRef = useRef({ x: 0, y: 0 });
    const targetRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const moveCursor = (e: MouseEvent) => {
            targetRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("mousemove", moveCursor);

        let animationFrameId: number;

        const animate = () => {
            const { x: targetX, y: targetY } = targetRef.current;
            const { x: currentX, y: currentY } = positionRef.current;

            // Smooth follow effect: 0.1 is the lerp factor (lower = slower/more delay)
            const speed = 0.1;

            const nextX = currentX + (targetX - currentX) * speed;
            const nextY = currentY + (targetY - currentY) * speed;

            positionRef.current = { x: nextX, y: nextY };

            cursor.style.transform = `translate3d(${nextX}px, ${nextY}px, 0) translate(-50%, -50%)`;

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`fixed top-0 left-0 w-20 h-20 rounded-full pointer-events-none ${CURSOR_Z_INDEX}`}
            style={{
                background: `radial-gradient(circle, var(--main-page-secondary) 0%, transparent 80%)`,
                filter: "blur(6px)",
            }}
        />
    );
}
