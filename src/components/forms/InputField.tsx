import React from 'react';
import cn from 'classnames';
import type { UseFormRegisterReturn } from 'react-hook-form';
interface Props {
  className?: string;
  placeholder: string;
  type: string;
  error?: string;
  registration?: UseFormRegisterReturn;
}

export const InputField: React.FC<Props> = ({
  className,
  placeholder,
  type,
  registration,
  error,
}) => {
  console.log(error);
  return (
    <div className={cn('flex flex-col', className)}>
      <input
        {...registration}
        className={cn(
          'h-[45px] pl-4 outline-0 text-black rounded-sm text-sm bg-[#ddd] dark:bg-gray-900 dark:text-white transition-colors duration-500',
          error ? 'border-red-500 border-2' : 'border-transparent border-2',
        )}
        type={type}
        placeholder={placeholder}
      />
      <span
        className={`text-red-500 text-xs mt-1 block transition-all duration-300 
    ${error ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}>
        {error}
      </span>
    </div>
  );
};
