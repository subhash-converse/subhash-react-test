'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { MdDashboard } from 'react-icons/md';

const navData = [
  {
    link: '/',
    name: 'Dashboard',
  },
  {
    link: 'data-visualization',
    name: 'Data Visualization',
  },
  {
    link: 'transaction-management',
    name: 'Transaction Mgnt',
  },
  {
    link: 'budget-tracking',
    name: 'Budget Tracking',
  },
];

const SideNavbar = () => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <div
      className={cn(
        isNavOpen ? 'w-[250px]' : 'w-0 md:w-[80px]',
        'shadow-r relative border-r shadow-md',
      )}
    >
      <Button
        onClick={() => {
          setIsNavOpen((current) => !current);
        }}
        className={cn(
          'absolute -top-5 -right-5 flex size-10 cursor-pointer items-center justify-center rounded-lg font-medium text-white md:top-0 md:-right-5',
        )}
      >
        {'<>'}
      </Button>
      <div
        className={cn(
          'flex h-full flex-col gap-2 overflow-hidden p-2',
          isNavOpen ? 'p-2' : 'p-0 md:p-2',
        )}
      >
        {navData.map((option, index) => (
          <Link
            key={index}
            href={option.link}
            onClick={() => {
              setIsNavOpen(false);
            }}
            className={cn(
              'rounded-lg',
              pathname === option.link
                ? 'bg-gray-400 text-white'
                : 'hover:bg-gray-300 hover:text-white',
            )}
          >
            <div
              className={cn(
                'grid',
                isNavOpen ? '!h-[50px] grid-cols-[50px_1fr] gap-2' : '!h-[63px] grid-cols-1',
              )}
            >
              <div className={cn('flex items-center justify-center')}>
                <MdDashboard />
              </div>
              {isNavOpen && (
                <div className="flex items-center whitespace-nowrap">{option.name}</div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNavbar;
