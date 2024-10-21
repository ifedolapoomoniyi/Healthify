import {create} from 'zustand';


export const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

export const useProviderStore = create((set) => ({
  provider: null,
  setProvider: (provider) => set({ provider }),
  logout: () => set({ provider: null }),
}));

export const usePatientsStore = create((set) => ({
  patients: null,
  setPatients: (patients) => set({ patients }),
  logout: () => set({ patients: null }),
}));