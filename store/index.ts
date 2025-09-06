import { create } from 'zustand';

interface States {
    count: number;
}
interface Actions {
  increase: () => void;
  decrease: () => void;
}


export const useCountStore = create<States & Actions>((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
}));
