import React, { FC, ReactNode } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

export const FullLayout: FC<IMainProps> = ({ meta, children }) => {
  return (
    <div className="antialiased w-full min-h-screen flex flex-col overflow-hidden">
      {meta}
      <Header />
      <div className="flex-grow flex items-stretch">
        <div className="w-full">{children}</div>
      </div>
      <div id="portal-root" />
      <Footer />
    </div>
  );
};
