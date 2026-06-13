import bearImage from '../assets/bear.jpg';
import logoImage from '../assets/logo.jpg';
import navLogoImage from '../assets/logo.png';
import logo2Image from '../assets/logo2.jpg';

const allImages = import.meta.glob<{ default: string }>(
  '../assets/*.{jpg,jpeg,webp}',
  { eager: true },
);

const excludedFromGallery = new Set(['logo.jpg', 'logo.png', 'logo2.jpg']);

function getFileName(path: string): string {
  return path.split(/[/\\]/).pop() ?? '';
}

export const heroImage = bearImage;
export const logo = logoImage;
export const navLogo = navLogoImage;
export const logoSecondary = logo2Image;

export function getGalleryImages(): string[] {
  return Object.entries(allImages)
    .filter(([path]) => !excludedFromGallery.has(getFileName(path)))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default);
}
