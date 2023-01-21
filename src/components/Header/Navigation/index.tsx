import { useEffect, useState } from 'react';
import { NavLink } from './NavLink';

type NavigationProps = {
  //
};

const links = [
  {
    label: 'global.home',
    url: '/',
  },
  {
    label: 'global.services',
    url: '/services',
  },
  {
    label: 'global.about',
    url: '/about',
  },
  {
    label: 'global.gallery',
    url: '/gallery',
  },
  {
    label: 'global.contact',
    url: '/contact',
  },
  {
    label: 'global.social',
    url: '/social',
  },
];

export const Navigation: React.FC<NavigationProps> = () => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <nav>
      <ul className='flex justify-end gap-10'>
        {links.map((link) => {
          return (
            <NavLink
              key={`${link.label}-${link.url}`}
              label={link.label}
              href={link.url}
              activeLink={activeLink === link.url}
            />
          );
        })}
      </ul>
    </nav>
  );
};
