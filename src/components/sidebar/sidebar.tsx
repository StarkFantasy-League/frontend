'use client';

import SidebarTab from './sidebarTab';
import SidebarHeader from './sidebarHeader';

const tabs = [
  { id: 1, title: 'My Team', image: '/assets/images/myTeam.png', href: '/dashboard' },
  { id: 2, title: 'Leaderboard', image: '/assets/images/leaderboard.png', href: '/transactions' },
  { id: 3, title: 'Market', image: '/assets/images/market.png', href: '/market' },
  { id: 4, title: 'Results', image: '/assets/images/results.png', href: '/results' },
  { id: 5, title: 'Player Rankings', image: '/assets/images/playerRanking.png', href: '/rankings' },
  { id: 6, title: 'History', image: '/assets/images/history.png', href: '/history' },
  { id: 7, title: 'Settings', image: '/assets/images/settings.png', href: '/settings' },
];

export default function Sidebar({ currentImage }: { currentImage: string }) {
  return (
    <div className="flex flex-col h-screen w-56 bg-[#232323] shadow-lg">
      <SidebarHeader imageSrc={currentImage} />
      <div className="flex flex-col mt-4 space-y-2">
        {tabs.map((tab, index) => (
          <SidebarTab key={tab.id} {...tab} isLast={false} />
        ))} 
      </div>
    </div>
  );
}
