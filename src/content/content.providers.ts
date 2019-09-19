import { todoModel } from './content.entity';

export const todoProviders = [
  {
    provide: 'TODO_REPOSITORY',
    useValue: todoModel,
  },
];