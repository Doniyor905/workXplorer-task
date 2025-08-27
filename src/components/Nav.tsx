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
        'bg-[#ddd] dark:bg-gray-800 py-2 pr-[100px] fixed w-full transition-colors duration-500',
        className,
      )}>
      <div className="flex justify-end gap-2 items-center">
        <ThemeSwitcher />
        <LangSelect />
      </div>
    </div>
  );
};
