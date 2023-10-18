import { LocalStorageKey } from '@/shared/config/storage';
import type { User } from '@/shared/api/auth';

export const getStoredUser = () => {
  return JSON.parse(localStorage.getItem(LocalStorageKey.user) || '{}');
};

export const storeUser = (user: User) => {
  return localStorage.setItem(LocalStorageKey.user, JSON.stringify(user));
};

export const removeUser = () => {
  return localStorage.removeItem(LocalStorageKey.user);
};
