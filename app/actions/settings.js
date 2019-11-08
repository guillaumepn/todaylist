// @flow
import { jsonStore } from '../store';
import type { Settings } from '../reducers/types';

export const FETCH_SETTINGS = 'FETCH_SETTINGS';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

export const initialSettingsState: Settings = {
  resetHours: 0,
  resetMinutes: 0
};

export const fetchSettings = () => {
  const settings = jsonStore.get('settings');
  return {
    type: FETCH_SETTINGS,
    payload: settings
  };
};

export const updateSettings = settings => {
  jsonStore.set('settings', settings);
  return {
    type: UPDATE_SETTINGS,
    payload: settings
  };
};
