import {combineReducers} from '@reduxjs/toolkit';

import { langReducer } from '../../../../i18n/slices';
import userReducer from '../../../auth/slices';

const rootReducer = combineReducers({
    user: userReducer,
    lang: langReducer
    //  if we need to use more reducers
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;