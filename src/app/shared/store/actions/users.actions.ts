import { Action } from '@ngrx/store'
import { User } from '../../models/user'

export enum UsersActionTypes {
  GET_USERS = '[Users] Get users',
  GET_USERS_SUCCESS = '[Users] Get users success',
  GET_USERS_ERROR = '[Users] Get users error',
  GET_USER = '[User] Get user',
  GET_USER_SUCCESS = '[User] Get user success',
  GET_USER_ERROR = '[User] Get user error',
  ADD_USER = '[User] Add user',
  ADD_USER_SUCCESS = '[User] Add user success',
  ADD_USER_ERROR = '[User] Add user error',
  UPDATE_USER = '[User] Update user',
  UPDATE_USER_SUCCESS = '[User] Update user success',
  UPDATE_USER_ERROR = '[User] Update user error',
  DELETE_USER = '[User] Delete user',
  DELETE_USER_SUCCESS = '[User] Delete user success',
  DELETE_USER_ERROR = '[User] Delete user error',
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
  constructor(public payload: string) {}
}
export class GetUserSuccess implements Action {
  readonly type = UsersActionTypes.GET_USER_SUCCESS
  constructor(public payload: User) {}
}

export class GetUserError implements Action {
  readonly type = UsersActionTypes.GET_USER_ERROR
}
export class AddUser implements Action {
  readonly type = UsersActionTypes.ADD_USER
  constructor(public payload: User) {}
}
export class AddUserSuccess implements Action {
  readonly type = UsersActionTypes.ADD_USER_SUCCESS
  constructor(public payload: User) {}
}

export class AddUserError implements Action {
  readonly type = UsersActionTypes.ADD_USER_ERROR
}
export class UpdateUser implements Action {
  readonly type = UsersActionTypes.UPDATE_USER
  constructor(public payload: User) {}
}
export class UpdateUserSuccess implements Action {
  readonly type = UsersActionTypes.UPDATE_USER_SUCCESS
  constructor(public payload: User) {}
}

export class UpdateUserError implements Action {
  readonly type = UsersActionTypes.UPDATE_USER_ERROR
}
export class DeleteUser implements Action {
  readonly type = UsersActionTypes.DELETE_USER
  constructor(public payload: string) {}
}
export class DeleteUserSuccess implements Action {
  readonly type = UsersActionTypes.DELETE_USER_SUCCESS
  constructor(public payload: string) {}
}

export class DeleteUserError implements Action {
  readonly type = UsersActionTypes.DELETE_USER_ERROR
}

export type All =
  | GetUsers
  | GetUsersSuccess
  | GetUsersError
  | GetUser
  | GetUserSuccess
  | GetUserError
  | AddUser
  | AddUserSuccess
  | AddUserError
  | UpdateUser
  | UpdateUserSuccess
  | UpdateUserError
  | DeleteUser
  | DeleteUserSuccess
  | DeleteUserError
