import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUser } from '../services/getUser';
import cn from 'classnames';
import toast from 'react-hot-toast/headless';
import Skeleton from '../components/Skeleton';
import { useTranslation } from 'react-i18next';
interface Props {
  className?: string;
}

type User = {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
};

export const Profile: React.FC<Props> = ({ className }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const userId = localStorage.getItem('id');
  const navigate = useNavigate();
  const { t } = useTranslation();
  React.useEffect(() => {
    if (!userId) {
      toast.error('Пользователь ненайден');
      navigate('/register');
      return;
    }
    getUser(userId).then(setUser).catch(console.error);
  }, [userId, navigate]);
  function logout() {
    localStorage.removeItem('id');
    location.href = '/register';
  }
  if (!user) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 py-4">
        <Skeleton />
      </div>
    );
  }

  return (
    <div className={cn('max-w-[1200px] mx-auto px-4 py-4', className)}>
      <h1 className="text-3xl font-bold">{t('common.profile')}</h1>
      <div className="mt-8 flex justify-between items-center">
        <div className="flex gap-3 items-center ">
          <img className="rounded-full w-13" src={user.avatar} alt="" />
          <div>
            <h2 className="text-base font-bold leading-3 dark:text-white sm:text-xl">
              {user.first_name} {user.last_name}
            </h2>
            <p className="text-gray-500 text-sm sm:text-xl">{user.email}</p>
          </div>
        </div>
        <Link
          className="flex items-center justify-center text-white rounded-sm hover:bg-blue-500  w-20 h-10 bg-blue-700"
          onClick={logout}
          to="#">
          {t('common.logout')}
        </Link>
      </div>
    </div>
  );
};
