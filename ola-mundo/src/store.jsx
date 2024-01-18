import { create } from 'zustand'

export const useStore = create((set) => ({
  edadAbuelo: 80,
  increaseEdadAbuelo: () => set((state) => ({ edadAbuelo: state.edadAbuelo + 1 })),
  removeAllEdadAbuelo: () => set({ edadAbuelo: 0 }),
}))