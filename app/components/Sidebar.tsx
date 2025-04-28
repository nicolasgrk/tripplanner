'use client';

import { House, Folder, Users, SquareChartGantt, Lightbulb, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { icon: House, href: '/' },
  { icon: SquareChartGantt, href: '/projets' },
  { icon: Users, href: '/clients' },
  { icon: Folder, href: '/documents' },
  { icon: Lightbulb, href: '/idees' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-screen w-20 bg-transparent fixed left-0 top-0 flex flex-col items-center py-8 pt-16">
      <nav className="flex-1">
        <ul className="space-y-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    isActive
                    ? 'bg-white shadow-[0_2px_6px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.03)] text-indigo-500'
                    : 'text-gray-400 hover:bg-white/10 hover:shadow-[0_2px_6px_rgba(0,0,0,0.05)]'                  
                  }`}
                >
                  <Icon size={24} />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-auto pb-8">
        <button className="w-12 h-12 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gray-50">
          <LogOut size={24} />
        </button>
      </div>
    </div>
  );
} 