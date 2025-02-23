import Link from 'next/link';
import Image from 'next/image';

interface SidebarTabProps {
  title: string;
  image: string;
  href: string;
  isLast?: boolean;
}

export default function SidebarTab({ title, image, href, isLast = false }: SidebarTabProps) {
  return (
    <div className="relative">
      <Link href={href} className="flex items-center p-4 hover:bg-gray-700 transition">
        <Image src={image} alt={title} width={44} height={44} className="w-11 h-11" />
        <span className="text-yellow-400 font-medium text-lg ml-3">{title}</span>
      </Link>
      {!isLast && <div className="w-full border-b-[3px] border-yellow-500" />}
    </div>
  );
}
