import classNames from 'classnames';
import React from 'react';

export const SectionTitle = ({ children, className = '' }) => {
  return (
    <div
      className={classNames('section-title flex flex-col items-center justify-center', className)}
    >
      <h2>{children}</h2>
      <span className="relative inline-block mt-4 bordered-icon w-[11px] h-[11px] rounded-full border border-gray-200" />
    </div>
  );
};
