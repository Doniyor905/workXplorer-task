import { ChevronDown } from 'lucide-react';
import React from 'react';
import cn from 'classnames';
import { useClickAway } from 'react-use';
import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
}
const language = ['en', 'ru'];
export const LangSelect: React.FC<Props> = ({ className }) => {
  const [langSelected, setLangSelected] = React.useState<number>(0);
  const [langPopup, setLangPopup] = React.useState<boolean>(false);
  const ref = React.useRef(null);
  const { i18n } = useTranslation();

  React.useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      const index = language.indexOf(savedLang);
      if (index !== -1) {
        setLangSelected(index);
      }
    }
  }, []);

  useClickAway(ref, () => {
    setLangPopup(false);
  });

  const changeLanguage = (i: number) => {
    setLangSelected(i);
    i18n.changeLanguage(language[i]);
    localStorage.setItem('language', language[i]);
    setLangPopup(false);
  };
  return (
    <div ref={ref} className={cn('relative', className)}>
      <div
        onClick={() => setLangPopup(!langPopup)}
        className="flex gap-2 items-center cursor-pointer dark:text-white">
        {language[langSelected]} <ChevronDown size={16} />
      </div>
      <ul
        className={cn(
          'transition-all absolute bg-white w-[50px] dark:bg-gray-600 text-center p-1 flex flex-col gap-1 rounded-sm  duration-500 shadow',
          langPopup
            ? 'opacity-100 top-7 pointer-events-auto'
            : 'opacity-0 top-0 pointer-events-none',
        )}>
        {language.map((lang, i) => (
          <li
            key={i}
            onClick={() => changeLanguage(i)}
            className="hover:text-gray-500 dark:text-white cursor-pointer ">
            {lang}
          </li>
        ))}
      </ul>
    </div>
  );
};
