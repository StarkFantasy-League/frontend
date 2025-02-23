import Link from 'next/link';

interface SidebarTabProps {
  title: string;
  image: string;
  href: string;
  isLast: boolean;
}

export default function SidebarTab({ title, image, href, isLast }: SidebarTabProps) {
  return (
    <Link
      href={href}
      className={`border-t-2 border-[#FFD700] flex flex-row items-center text-[#FFD700] py-6 hover:text-white transition-colors duration-200 ${
        isLast ? '' : 'border-b-2 border-[#FFD700]'
      }`}
    >
      <div className="flex flex-row items-center px-6">
        <img src={image} alt={title} className="w-8 h-8 mr-4 object-contain" />
        <p className="font-bold text-xl">{title}</p>
      </div>
    </Link>
  );
}
