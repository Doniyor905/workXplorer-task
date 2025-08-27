import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { FormLogin } from '../components/forms/FormLogin';
import Providers from '../components/Providers';
import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
}

export const Login: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div
      className={cn(
        'flex justify-center items-center min-h-screen bg-[#ddd] dark:bg-gray-900 transition-colors duration-500',
        className,
      )}>
      <div className="sm:w-[700px] w-[400px] sm:h-[450px] h-full bg-white dark:bg-gray-600 mx-4 transition-colors duration-500 flex sm:flex-row flex-col-reverse">
        <div className="sm:w-2/4 w-full p-2 flex flex-col justify-center items-center">
          <div className="shrink-0 w-full">
            <FormLogin title={t('login.title')} />
          </div>
          <Providers title={t('login.withProvider')} />
        </div>

        <div className="sm:w-2/4 w-full flex pt-4 flex-col justify-center items-center gap-2 p-2 text-center text-white bg-gradient-to-b from-green-500 from- via-emerald-500 via- to-emerald-700 to-">
          <h2 className="text-2xl font-bold mb-2 ">{t('login.subtitle')}</h2>
          <p className="sm:text-base text-sm">{t('login.text')}</p>
          <Link
            to="/register"
            className="w-3/4 bg-[#10B981] flex items-center justify-center h-[50px] rounded-3xl text-white text-sm hover:bg-[#5dc09f]">
            {t('login.registerLink')}
          </Link>
        </div>
      </div>
    </div>
  );
};
