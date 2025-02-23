'use client';

interface SidebarHeaderProps {
  imageSrc: string;
  altText?: string;
}

export default function SidebarHeader({ imageSrc, altText = 'Sidebar Image' }: SidebarHeaderProps) {
  return (
    <div className="flex p-6">
      <div className="bg-white h-20 w-full flex items-center justify-center overflow-hidden">
        <img src={imageSrc} alt={altText} className="h-full w-auto object-contain" />
      </div>
    </div>
  );
}
