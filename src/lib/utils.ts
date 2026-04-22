import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function isValidEmail(value: string) {
    const trimmed = value.trim();
    if (!trimmed) return false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return emailRegex.test(trimmed);
}

export function isValidMobile(value: string) {
    const trimmed = value.trim();
    if (!trimmed) return false;

    const compact = trimmed.replace(/[\s()-]/g, "");
    const mobileRegex = /^\+?\d{10,15}$/;
    return mobileRegex.test(compact);
}

export function isValidEmailOrMobile(value: string) {
    return isValidEmail(value) || isValidMobile(value);
}
