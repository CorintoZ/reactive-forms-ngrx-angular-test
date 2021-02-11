import { Action } from '@ngrx/store'
import { User } from '../../models/user'

export enum UsersActionTypes {
  GET_USERS = '[Users] Get users',
  GET_USERS_SUCCESS = '[Users] Get users success',
  GET_USERS_ERROR = '[Users] Get users error',
  GET_USER = '[User] Get user',
  GET_USER_SUCCESS = '[User] Get user success',
  GET_USER_ERROR = '[User] Get user error',
}

export class GetUsers implements Action {
  readonly type = UsersActionTypes.GET_USERS
}

export class GetUsersSuccess implements Action {
  readonly type = UsersActionTypes.GET_USERS_SUCCESS
  constructor(public payload: Array<User>) {}
}

export class GetUsersError implements Action {
  readonly type = UsersActionTypes.GET_USERS_ERROR
}

export class GetUser implements Action {
  readonly type = UsersActionTypes.GET_USER
}
export class GetUserSuccess implements Action {
  readonly type = UsersActionTypes.GET_USER_SUCCESS
  constructor(public payload: Array<User>) {}
}

export class GetUserError implements Action {
  readonly type = UsersActionTypes.GET_USER_ERROR
}

export type All = GetUsers | GetUsersSuccess | GetUsersError | GetUser | GetUserSuccess | GetUserError
