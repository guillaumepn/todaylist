// @flow
import { jsonStore } from '../store';
import type { Settings } from '../reducers/types';

export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

export const initialSettingsState: Settings = {
  resetHours: 0,
  resetMinutes: 0
};

export const updateSettings = settings => {
  jsonStore.set('settings', settings);
  return {
    type: typeof UPDATE_SETTINGS,
    payload: settings
  };
};
