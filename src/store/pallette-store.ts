import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type PaletteStore = {
    paletteColor: string
    setPaletteColor: (color: string) => void
}

export const usePaletteStore = create<PaletteStore>()(
    persist(
        (set) => ({
            paletteColor: "",
            setPaletteColor: (color: string) => set(() => ({ paletteColor: color })),
        }),
        {
            name: "palette-color-storage",
        }
    )
)