import { ActionReducerMap } from '@ngrx/store'
import { UsersState, usersReducer } from './reducers/users.reducer'

export interface RootState {
  users: UsersState
}

export const reducers: ActionReducerMap<RootState> = {
  users: usersReducer,
}
