'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Navigation({}) {
  const pathname = usePathname();

  const navLinks = [
    {
      href: '/test',
      name: 'test',
    },
    {
      href: '/profile',
      name: 'profile',
    },
    {
      href: '/profile/subprofile2',
      name: 'subprofile2',
    },
  ];
  return (
    <>
      {navLinks.map((link) => {
        console.log(pathname, '??');
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            className={isActive ? 'text-blue' : 'text-black'}
            href={link.href}
            key={link.name}
            scroll={false}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
