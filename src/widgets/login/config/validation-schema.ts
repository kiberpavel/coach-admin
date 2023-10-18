import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email('login.notValidEmail').required('login.requiredEmail'),
  password: Yup.string().required('login.requiredPassword'),
});
