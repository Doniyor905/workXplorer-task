import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { FormRegister } from '../components/forms/FormRegister';
import Providers from '../components/Providers';
import { useTranslation } from 'react-i18next';
interface Props {
  className?: string;
}

export const Register: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        'flex justify-center items-center min-h-screen bg-[#ddd] dark:bg-gray-900 transition-colors duration-500',
        className,
      )}>
      <div className="w-[700px] h-full bg-white dark:bg-gray-600 transition-colors duration-500 flex">
        <div className="w-2/4 flex flex-col justify-center items-center gap-2 p-2 text-center text-white bg-gradient-to-b from-sky-500 from- via-blue-500 via- to-blue-600 to-">
          <h2 className="text-2xl font-bold mb-2 ">{t('register.subtitle')}</h2>
          <p>{t('register.text')}</p>
          <Link
            to="/login"
            className="w-3/4 bg-[#2564EC] flex items-center justify-center h-[50px] rounded-3xl text-white text-sm hover:bg-[#6485cb]">
            {t('register.loginLink')}
          </Link>
        </div>
        <div className="w-2/4 h-full p-2">
          <FormRegister title={t('register.title')} />
          <Providers title={t('register.withProvider')} />
        </div>
      </div>
    </div>
  );
};
