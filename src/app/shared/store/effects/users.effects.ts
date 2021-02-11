import { Injectable } from '@angular/core'
import { Effect, ofType, Actions } from '@ngrx/effects'
import { map, switchMap, catchError, concatMap } from 'rxjs/operators'
import { UsersActionTypes } from '../actions/users.actions'
import { UsersService } from '../../services/users.service'
import { User } from '../../models/user'
import * as UsersActions from '../actions/users.actions'
import { of } from 'rxjs'
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router'

@Injectable()
export class UsersEffects {
  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType(UsersActionTypes.GET_USERS),
    map((action: any) => action.payload),
    switchMap(() => {
      return this.userService.getUsers().pipe(
        map((users: Array<User>) => new UsersActions.GetUsersSuccess(users)),
        catchError((err: Error) => of(new UsersActions.GetUsersError())),
      )
    }),
  )

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType(UsersActionTypes.GET_USER),
    map((action: any) => action.payload),
    switchMap((id) => {
      return this.userService.getUserById(id).pipe(
        map((user: Array<User>) => new UsersActions.GetUserSuccess(user)),
        catchError((err: Error) => of(new UsersActions.GetUsersError())),
      )
    }),
  )

  constructor(private actions$: Actions, private userService: UsersService) {}
}
