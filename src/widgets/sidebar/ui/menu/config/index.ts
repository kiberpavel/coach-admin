import { Routes } from '@/shared/config/routes';
import { UsersIcon, ExercisesIcon, WorkoutsIcon } from '@/shared/ui/icons';

const { exercises, workouts, users } = Routes;

export const menuOptions = [
  {
    route: exercises,
    transKey: 'exercises',
    icon: ExercisesIcon,
  },
  {
    route: workouts,
    transKey: 'workouts',
    icon: WorkoutsIcon,
  },
  {
    route: users,
    transKey: 'users',
    icon: UsersIcon,
  },
];
