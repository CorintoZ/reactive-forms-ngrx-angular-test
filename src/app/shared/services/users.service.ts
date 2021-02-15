import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { User } from '../models/user'
import { ToastrService } from 'ngx-toastr'

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getUsers() {
    return this.http.get<any>(`api/users`).pipe(
      map((users) => {
        this.toastr.success('Get users operation', 'Success')
        return users
      }),
    )
  }

  getUserById(id: number) {
    return this.http.get<any>(`api/users/` + id).pipe(
      map((user) => {
        this.toastr.success('Get user by id operation', 'Success')
        return user
      }),
    )
  }

  create(user: User) {
    return this.http.post<User>(`api/users/create`, user).pipe(
      map((user) => {
        this.toastr.success('Create user operation', 'Success')
        return user
      }),
    )
  }

  update(user: User) {
    return this.http.post<User>(`api/users/update`, user).pipe(
      map((user) => {
        this.toastr.success('Update user operation', 'Success')
        return user
      }),
    )
  }

  delete(id: string) {
    return this.http.delete<User>(`api/users/` + id).pipe(
      map((user) => {
        this.toastr.success('Delete user operation', 'Success')
        return user
      }),
    )
  }
}
