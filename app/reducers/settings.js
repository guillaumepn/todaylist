import { UPDATE_SETTINGS, initialSettingsState } from '../actions/settings';

export const settings = (state = initialSettingsState, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS: {
      return action.payload;
      break;
    }
    default:
      return state;
  }
};
