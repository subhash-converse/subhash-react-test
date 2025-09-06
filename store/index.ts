import { create } from 'zustand';

interface States {
  count: number;
}

export const useCountStore = create<States>(() => ({
  count: 0,
}));
