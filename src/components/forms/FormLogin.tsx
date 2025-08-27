import React from 'react';
import cn from 'classnames';
import { InputField } from './InputField';
import { Button } from './Button';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { loginUser } from '../../services/login';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { getFieldsLogin } from '../../hooks/getFields';
import { useTranslation } from 'react-i18next';
interface Props {
  className?: string;
  title: string;
}
export interface IFormInput {
  email: string;
  password: string;
}

export const FormLogin: React.FC<Props> = ({ title, className }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const navigate = useNavigate();
  const fields = getFieldsLogin(t);

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    setLoading(true);
    try {
      const result = await loginUser(data.email, data.password);
      localStorage.setItem('id', String(result.userId));
      toast.success(t('common.success'));
      navigate('/profile');
    } catch (error) {
      toast.error(t('common.error'));
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={cn('block justify-center items-center mt-3 ', className)}>
      <div>
        <h2 className="text-3xl font-bold mb-4 text-center dark:text-white">{title}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {fields.map((field) => (
            <InputField
              key={field.name}
              registration={register(field.name as keyof IFormInput, field.rules)}
              type={field.type}
              placeholder={field.placeholder}
              error={errors[field.name as keyof IFormInput]?.message as string}
            />
          ))}

          <Button
            loading={loading}
            className="bg-[#10B981] hover:bg-[#4a9a80]"
            text={t('login.submitButton')}
          />
        </form>
      </div>
    </div>
  );
};
