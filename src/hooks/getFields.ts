import type { IFormInput } from '../components/forms/FormRegister';
type Field<T> = {
  name: keyof T;
  type: string;
  placeholder: string;
  rules: object;
};
export const getFieldsRegister = (
  watch: (name: keyof IFormInput) => string,
  t: (key: string) => string,
): Field<IFormInput>[] => {
  return [
    {
      name: 'username',
      type: 'text',
      placeholder: t('common.username'),
      rules: { required: t('register.validation.usernameRequired') },
    },
    {
      name: 'email',
      type: 'text',
      placeholder: t('common.email'),
      rules: {
        required: t('register.validation.emailRequired'),
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: t('register.validation.emailInvalid'),
        },
      },
    },
    {
      name: 'password',
      type: 'password',
      placeholder: t('common.password'),
      rules: {
        required: t('register.validation.passwordRequired'),
        minLength: { value: 6, message: t('register.validation.passwordMinLength') },
      },
    },
    {
      name: 'passwordConf',
      type: 'password',
      placeholder: t('register.confirmPassword'),
      rules: {
        required: t('register.confirmPassword'),
        validate: (value: string) =>
          value === watch('password') || t('register.validation.passwordsNotMatch'),
      },
    },
  ];
};

export const getFieldsLogin = (t: (key: string) => string): Field<IFormInput>[] => {
  return [
    {
      name: 'email',
      type: 'text',
      placeholder: t('common.email'),
      rules: {
        required: t('register.validation.emailRequired'),
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: t('register.validation.emailInvalid'),
        },
      },
    },

    {
      name: 'password',
      type: 'password',
      placeholder: t('common.password'),
      rules: {
        required: t('register.validation.passwordRequired'),
        minLength: { value: 6, message: t('register.validation.passwordMinLength') },
      },
    },
  ];
};
