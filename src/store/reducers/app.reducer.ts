import { ActionReducerMap } from '@ngrx/store'
import { IAppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { userReducers } from '../reducers/user.reducer';
import { configReducers } from '../reducers/config.reducer';


export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    users: userReducers,
    config: configReducers
};