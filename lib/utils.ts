import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function errorResponse(e: unknown) {
  console.error(e);
  return new Response(JSON.stringify({ message: "Internal server error" }),
                      { status: 500 });
}
