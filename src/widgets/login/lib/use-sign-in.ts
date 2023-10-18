import { useSignInMutation } from '@/shared/api/auth';
import type { SignInUserVariables } from '@/shared/api/auth';
import { storeToken, useSessionStore } from '@/entities/session';

export const useSignIn = () => {
  const { mutate: signIn, loading } = useSignInMutation();

  const sessionStore = useSessionStore();

  const handleSignIn = async (loginData: SignInUserVariables) => {
    const data = await signIn(loginData);

    if (data?.data?.signIn) {
      const {
        signIn: { accessToken, user },
      } = data.data;

      const { __typename, ...userData } = user;

      sessionStore.setUser(userData);
      sessionStore.setToken(accessToken);
      storeToken(accessToken);
    }
  };

  return {
    loading,
    signIn: handleSignIn,
  };
};
