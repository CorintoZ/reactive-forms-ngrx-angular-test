import { User } from '../../models/user'
import { All, UsersActionTypes } from '../actions/users.actions'
import { createSelector } from '@ngrx/store'
import { RootState } from '../store'

export class UsersState {
  users: Array<User>
}

const INITIAL_STATE: UsersState = {
  users: [],
}

export function usersReducer(state: UsersState = INITIAL_STATE, action: All) {
  switch (action.type) {
    case UsersActionTypes.GET_USERS:
      return {
        ...state,
      }

    case UsersActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      }

    case UsersActionTypes.GET_USERS_ERROR:
      return {
        ...state,
      }
    case UsersActionTypes.GET_USER:
      return {
        ...state,
      }

    case UsersActionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
      }

    case UsersActionTypes.GET_USER_ERROR:
      return {
        ...state,
      }

    default:
      return state
  }
}

export const selectUsers = (state: RootState) => state.users

export const selectUsersList = createSelector(selectUsers, (state: UsersState) => state.users)
