import React from 'react';
import cn from 'classnames';
import { InputField } from './InputField';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Button } from './Button';
import { registerUser } from '../../services/register';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { getFieldsRegister } from '../../hooks/getFields';
import { useTranslation } from 'react-i18next';
interface Props {
  className?: string;
  title: string;
}
export interface IFormInput {
  username?: string;
  email: string;
  password: string;
  passwordConf?: string;
}

type FormData = {
  email: string;
  password: string;
};

export const FormRegister: React.FC<Props> = ({ title, className }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const { t } = useTranslation();
  const fields = getFieldsRegister(watch, t);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await registerUser(data.email, data.password);
      localStorage.setItem('id', res.id);
      toast.success(`Успешно зарегистрировался`);
      navigate('/profile');
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={cn('block justify-center items-center mt-3', className)}>
      <div>
        <h2 className="text-3xl font-bold mb-4 text-center dark:text-white transition-colors duration-500">
          {title}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {fields.map((field) => (
            <InputField
              key={field.name}
              registration={register(field.name as keyof IFormInput, field.rules)}
              type={field.type}
              placeholder={field.placeholder}
              error={errors[field.name]?.message as string}
            />
          ))}

          <Button
            loading={loading}
            className="bg-[#2564EC] hover:bg-[#5b7fcb]"
            text={t('login.title')}
          />
        </form>
      </div>
    </div>
  );
};
