import type { Settings } from '../../types/settings'

import { create } from 'zustand'

export type SettingsState = Settings & {
  updateSettings: (settings: Partial<Settings>) => void
}

export const useSettingsStore = create<SettingsState>()((set) => ({
  path: '',
  userAgent: '',

  updateSettings: (settings) => {
    const newData: Partial<Record<keyof Settings, string>> = {}

    if (settings.path) {
      newData.path = settings.path
    }

    if (settings.userAgent) {
      newData.userAgent = settings.userAgent
    }

    const total = Object.keys(newData).length

    if (total > 0) {
      set(settings)
    }
  },
}))
