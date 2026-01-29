import { create } from "zustand";

interface BrandStore {
    brands: string[];
    setBrands: (brands: string[]) => void;
}

export const useBrandStore = create<BrandStore>((set) => ({
    brands: [],
    setBrands: (brands) => set({ brands }),
}));