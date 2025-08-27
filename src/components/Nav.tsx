import React from 'react';
import cn from 'classnames';
import { LangSelect } from './LangSelect';
import { ThemeSwitcher } from './ThemeSwitcher';
interface Props {
  className?: string;
}

export const Nav: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'bg-[#ddd] dark:bg-gray-800 py-2 fixed w-full transition-colors duration-500',
        className,
      )}>
      <div className="max-w-[1200px] w-full mx-auto px-4">
        <div className="flex justify-end gap-2 items-center">
          <ThemeSwitcher />
          <LangSelect />
        </div>
      </div>
    </div>
  );
};
