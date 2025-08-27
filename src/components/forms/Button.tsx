import React from 'react';
import cn from 'classnames';
import { LoaderCircle } from 'lucide-react';

interface Props {
  className?: string;
  text: string;
  loading: boolean;
}

export const Button: React.FC<Props> = ({ text, className, loading }) => {
  return (
    <button
      disabled={loading}
      type="submit"
      className={cn(className, 'h-[50px] rounded-sm w-full cursor-pointer  text-white')}>
      {loading ? <LoaderCircle className="animate-spin w-5 h-5 mx-auto" /> : text}
    </button>
  );
};
