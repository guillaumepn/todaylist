import {
  UPDATE_SETTINGS,
  initialSettingsState,
  FETCH_SETTINGS
} from '../actions/settings';

export const settings = (state = initialSettingsState, action) => {
  switch (action.type) {
    case FETCH_SETTINGS:
      return action.payload;
    case UPDATE_SETTINGS: {
      return action.payload;
      break;
    }
    default:
      return state;
  }
};
