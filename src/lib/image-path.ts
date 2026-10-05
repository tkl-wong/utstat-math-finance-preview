import { BASE_PATH } from "@/lib/constants";

export function imagePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
