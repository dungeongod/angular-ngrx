import { Injectable } from '@angular/core'
import { Effect, Actions, ofType } from '@ngrx/effects'
import { ConfigService } from "../../services/config.service";
import { GetConfig, EConfigActions, GetConfigSuccess } from '../actions/config.action';
import { switchMap } from 'rxjs/operators';
import { IConfig } from '../../models/user.interface';
import { of } from 'rxjs';
 
@Injectable()
export class ConfigEffect {
    @Effect()
    getConfig$ = this._action$.pipe(
        ofType<GetConfig>(EConfigActions.GetConfig),
        switchMap(() => this._configService.getConfig()),
        switchMap((config: IConfig)=> of(new GetConfigSuccess(config)))
    );

    constructor( 
        private _configService: ConfigService,
        private _action$: Actions
     ){}

}