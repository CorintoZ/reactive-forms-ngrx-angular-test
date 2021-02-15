import { Component, OnInit, Input, SimpleChanges } from '@angular/core'
import { RootState } from 'src/app/shared/store/store'
import { Store } from '@ngrx/store'
import { DeleteUser, GetUsers } from 'src/app/shared/store/actions/users.actions'
import { selectUsers } from 'src/app/shared/store/reducers/users.reducer'
import { DatePipe } from '@angular/common'
import { ConfirmModalComponent } from 'src/app/shared/ui-components/confirm-modal/confirm-modal.component'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-users-datatable',
  templateUrl: './users-datatable.component.html',
  styleUrls: ['./users-datatable.component.scss'],
})
export class UsersDatatableComponent implements OnInit {
  @Input() search: string
  private subscriptions: Subscription = new Subscription()

  users
  backUsers
  bsModalRef: BsModalRef

  constructor(private store: Store<RootState>, private modalService: BsModalService) {}

  ngOnInit() {
    this.store.dispatch(new GetUsers())
    this.store.select(selectUsers).subscribe((users) => {
      this.users = users.users
      this.backUsers = [...this.users]
      console.log(this.users)
    })
    this.modalService.onHide.subscribe((id) => {
      if (id) {
        this.store.dispatch(new DeleteUser(id))
      }
    })
  }

  filter(val) {
    const temp = this.backUsers.filter(
      (u) =>
        u.firstname.toLowerCase().indexOf(val) != -1 ||
        u.lastname.toLowerCase().indexOf(val) != -1 ||
        u.username.toLowerCase().indexOf(val) != -1 ||
        u.email.toLowerCase().indexOf(val) != -1 ||
        u.role.toLowerCase().indexOf(val) != -1 ||
        !val,
    )
    this.users = temp
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName]
      const cur = JSON.stringify(chng.currentValue)
      //const prev = JSON.stringify(chng.previousValue);
      if (cur) {
        this.filter(this.search)
      }
    }
  }

  user = { id: 1 }

  test(val) {
    console.log('test val: ', val)

    const initialState = {
      message: 'The user will be delete. Are you sure?',
      title: 'Delete user',
      val: val,
    }
    this.bsModalRef = this.modalService.show(ConfirmModalComponent, {
      initialState,
    })
    this.bsModalRef.content.confirmBtnName = 'Confirm'
    this.bsModalRef.content.cancelBtnName = 'Cancel'
  }
}
