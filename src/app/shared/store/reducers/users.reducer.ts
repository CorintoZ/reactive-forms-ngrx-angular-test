import { User } from '../../models/user'
import { All, UsersActionTypes } from '../actions/users.actions'
import { createSelector } from '@ngrx/store'
import { RootState } from '../store'

export class UsersState {
  users: Array<User>
  selectedUser: User
}

const INITIAL_STATE: UsersState = {
  users: [],
  selectedUser: {
    id: '',
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    birthday: '',
    password: '',
    role: '',
    skills: [],
  },
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
        selectedUser: action.payload,
      }

    case UsersActionTypes.GET_USER_ERROR:
      return {
        ...state,
      }

    case UsersActionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users.filter((x) => x.id !== action.payload)],
      }

    case UsersActionTypes.DELETE_USER_ERROR:
      return {
        ...state,
      }

    default:
      return state
  }
}

export const selectUsers = (state: RootState) => state.users

export const selectUsersList = createSelector(selectUsers, (state: UsersState) => state.users)
