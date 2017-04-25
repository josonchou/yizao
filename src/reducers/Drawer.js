/**
 * Created by alixez on 17-4-24.
 */
import { OPEN_DRAWER, CLOSE_DRAWER } from '../actions/Drawer';

const initialState = {
  drawerState: 'closed',
  drawerDisabled: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        ...state,
        drawerState: 'opened',
      };
      break;
    case CLOSE_DRAWER:
      return {
        ...state,
        drawerState: 'closed',
      };
      break;
    default:
      return state;
  }
}