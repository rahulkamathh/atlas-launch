import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export const stagger = (delay = 0.1) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay, delayChildren: 0.05 } },
});
