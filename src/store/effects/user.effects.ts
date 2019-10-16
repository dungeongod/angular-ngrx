import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects'
import { UserService } from "src/services/user.service";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { GetUser, EUserAction, GetUsersSuccess, GetUserSuccess, GetUsers } from "../actions/user.action";
import { map, withLatestFrom, switchMap } from 'rxjs/operators';
import { selectUserList } from '../selectors/user.selector'
import { of } from "rxjs";
import { IUserHttp } from "src/models/http-models/user-http.interface";

@Injectable()
export class UserEffects {
    @Effect()
    getUser$ = this._action$.pipe(
        ofType<GetUser>(EUserAction.GetUser),
        map(action => action.payload),
        withLatestFrom(this._store.pipe(select(selectUserList))),
        switchMap(([id, users]) => {
            const selectedUser = users.filter(user => user.id === +id)[0];
            return of(new GetUserSuccess(selectedUser))
        })
    )

    @Effect()
    getUsers$ = this._action$.pipe(
        ofType<GetUsers>(EUserAction.GetUsers),
        // map(action => action.payload),
        // withLatestFrom(this._store.pipe(select(selectUserList))),
        switchMap(() => this._userService.getUsers()),
        switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
    )

    constructor(
        private _action$: Actions,
        private _userService: UserService,
        private _store: Store<IAppState>
    ) {}
}