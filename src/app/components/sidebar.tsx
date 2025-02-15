'use client';
import Link from 'next/link';
import React from 'react';

interface SidebarTab {
    id: number;
    title: string;
    image: string;
    href: string;
}

export default function Sidebar() {
    const tabs: SidebarTab[] = [
        { id: 1, title: 'My team', image: '/images/image_74.png', href: '/dashboard' },
        { id: 2, title: 'Leaderboard', image: '/images/image_76.png', href: '/transactions' },
        { id: 3, title: 'Friends League', image: '/images/image_77.png', href: '/reports' },
        { id: 4, title: 'Results', image: '/images/image_78.png', href: '/settings' },
        { id: 5, title: 'Player Rankings', image: '/images/image_79.png', href: '/settings' },
        { id: 6, title: 'History', image: '/images/image_80.png', href: '/settings' },
        { id: 7, title: 'Settings', image: '/images/image_81.png', href: '/settings' },
    ];

    return (
        <div className="flex flex-col h-screen w-64 bg-[#232323]">
            <div className="flex p-6">
                <div className="bg-white h-20 w-full">
                    <h1 className="text-black">Placeholder</h1>
                </div>
            </div>

            <div className="flex flex-col mt-8">
                {tabs.map((tab, index) => (
                    <Link
                        key={tab.id}
                        href={tab.href}
                        className={`border-t-4 border-[#f4b53f] flex flex-row items-center text-gray-300 py-6 hover:text-white ${
                            index === tabs.length - 1 ? 'border-b-4 border-[#f4b53f]' : ''
                        }`}
                    >
                        <div className="flex flex-row items-center px-6">
                            <img src={tab.image} alt={tab.title} className="mr-4" />
                            <p className="font-bold text-[#f4b53f] text-xl">{tab.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
