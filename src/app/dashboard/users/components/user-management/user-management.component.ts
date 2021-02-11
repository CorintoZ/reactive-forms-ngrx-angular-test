import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { User } from 'src/app/shared/models/user'
import { GetUser } from 'src/app/shared/store/actions/users.actions'
import { selectUsers } from 'src/app/shared/store/reducers/users.reducer'
import { RootState } from 'src/app/shared/store/store'

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  public roles = [
    { label: 'Admin', value: 'admin' },
    { label: 'Writer', value: 'writer' },
    { label: 'Reader', value: 'reader' },
  ]

  public categories = [
    { label: 'Programming language', value: 'language' },
    { label: 'Design', value: 'design' },
    { label: 'Engineering', value: 'engineering' },
  ]

  constructor(private router: Router, private activetadRoute: ActivatedRoute, private store: Store<RootState>) {}

  users
  userId
  user: Array<User>
  ngOnInit(): void {
    this.activetadRoute.params.subscribe((params) => {
      this.userId = params.id
      console.log('paramId', this.userId)

      this.store.dispatch(new GetUser())
      this.store.select(selectUsers).subscribe((users) => {
        this.user = users.users
        console.log(this.users)
      })
    })
  }

  //Function to generate guid
  newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  recuperaUsuario(id) {
    console.log(id)
  }
}
