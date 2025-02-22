'use client';

import SidebarTab from './sidebarTab';
import SidebarHeader from './sidebarHeader';

const tabs = [
  { id: 1, title: 'My Team', image: '/images/myTeam.png', href: '/dashboard' },
  { id: 2, title: 'Leaderboard', image: '/images/leaderboard.png', href: '/transactions' },
  { id: 3, title: 'Market', image: '/images/market.png', href: '/market' },
  { id: 4, title: 'Results', image: '/images/results.png', href: '/results' },
  { id: 5, title: 'Player Rankings', image: '/images/playerRanking.png', href: '/rankings' },
  { id: 6, title: 'History', image: '/images/history.png', href: '/history' },
  { id: 7, title: 'Settings', image: '/images/settings.png', href: '/settings' },
];

export default function Sidebar({ currentImage }: { currentImage: string }) {
  return (
    <div className="flex flex-col h-screen w-64 bg-[#232323]">
      <SidebarHeader imageSrc={currentImage} />

      <div className="flex flex-col mt-8">
        {tabs.map((tab, index) => (
          <SidebarTab key={tab.id} {...tab} isLast={index === tabs.length - 1} />
        ))}
      </div>
    </div>
  );
}
