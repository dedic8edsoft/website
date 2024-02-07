import React, { useState } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { useRouter } from 'next/router';

import useScroll from '@hooks/useScroll';
import { Drawer } from '@components/Common';
import { CloseIcon, MenuIcon } from '@components/Common/icons';
import { useWindowSize } from '@hooks';
import styles from './styles.module.css';

interface IHeaderProps {
  mode?: 'light' | 'dark';
}

interface IMenu {
  link: string;
  label: string;
  children?: IMenu[];
}

const menuList: IMenu[] = [
  {
    link: '/',
    label: 'Home',
    // children: [
    //   {
    //     link: '/',
    //     label: 'Home Page',
    //   },
    //   {
    //     link: '/one-page',
    //     label: 'Onepage',
    //   },
    //   {
    //     link: '/one-page-2',
    //     label: 'Onepage2',
    //   },
    // ],
  },
  {
    link: '/about',
    label: 'About Us',
  },
  {
    link: '/services',
    label: 'Services',
  },
  {
    link: '/portfolio',
    label: 'Portfolio',
  },
  {
    link: '/team',
    label: 'Team',
  },
  // {
  //   link: '/pricing',
  //   label: 'Pricing',
  // },
  {
    link: '/contact',
    label: 'Contact',
  },
  // {
  //   link: '/blogs',
  //   label: 'Blog',
  // },
];

export const Header = ({ mode = 'dark' }: IHeaderProps) => {
  const router = useRouter();
  const [showLinkDrawer, setShowLinkDrawer] = useState(false);

  const scroll = useScroll();
  const { isMobile } = useWindowSize();

  const handleClick = () => {
    setShowLinkDrawer((prevState) => !prevState);
  };

  const handleClose = () => setShowLinkDrawer(false);

  return (
    <header
      className={classnames(
        'fixed top-0 w-full py-2.5',
        'transition-all duration-500 z-[1030]',
        styles.siteHeader,
        scroll > 100 && 'bg-white shadow-sm',
        isMobile ? '!py-0' : '!py-3'
      )}
    >
      <div className="container px-4 mx-auto h-full flex items-center w-full justify-between">
        <div className="z-20 inline-flex justify-center items-center">
          <Link href="/" passHref className="text-primary uppercase w-50">
            <img
              className="logo"
              src={
                scroll > 100 || mode === 'light'
                  ? '/assets/images/logo.svg'
                  : '/assets/images/logo-white.svg'
              }
              alt="Creative Agency"
            />
          </Link>
        </div>
        <div className="hidden w-full md:flex justify-end items-center">
          {menuList.map((menu) => (
            <a
              key={menu.label}
              href={menu.link}
              className={classnames(
                'relative uppercase text-14 transition-all flex py-5 px-4 font-normal group flex-col items-start hover:text-primary whitespace-nowrap',
                {
                  'text-white': scroll <= 100,
                  'text-inherit hover:text-primary': scroll > 100 || mode === 'light',
                  '!text-primary': menu.link === router.pathname,
                }
              )}
            >
              {menu.label}
              {menu.children && (
                <ul
                  className="
                    absolute
                    left-0
                    top-10
                    mt-2
                    py-2
                    w-48
                    bg-black
                    shadow-xl
                    opacity-0 group-hover:opacity-100
                    pointer-events-none group-hover:pointer-events-auto
                    transition-opacity duration-200 ease-in-out"
                >
                  {menu.children.map((submenu) => (
                    <li className="px-5 py-2" key={submenu.label}>
                      <a className="text-sm leading-5 text-white capitalize" href={submenu.link}>
                        {submenu.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </a>
          ))}
        </div>
        <div className="flex md:hidden justify-end items-center h-16">
          <i
            className={classnames(
              'cursor-pointer hover:text-white z-[60] header-link',
              scroll > 100 ? 'text-black' : 'text-white'
            )}
            onClick={handleClick}
          >
            {showLinkDrawer ? <CloseIcon size={30} /> : <MenuIcon size={30} />}
          </i>
        </div>
        <Drawer open={showLinkDrawer} isFullWidth handleClose={handleClose} hideCloseButton={true}>
          <div className="section-content">
            <div className="main-menu pt-[120px] sm:pt-[100px] flex flex-col items-start text-primary text-right">
              {menuList.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  className={classnames(
                    'py-2 text-2xl font-bold transition-all duration-300 leading-tight',
                    'hover:text-red'
                  )}
                  onClick={() => setShowLinkDrawer(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  );
};
