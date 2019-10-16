import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/store/state/app.state';
import { selectConfig } from 'src/store/selectors/config.selector';
import { GetConfig } from 'src/store/actions/config.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  config$ = this._store.pipe(select(selectConfig))
  constructor(private _store: Store<IAppState>){}

  ngOnInit(){
    this._store.dispatch(new GetConfig);
  }
}
