import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NgxDatatableModule } from '@swimlane/ngx-datatable'

import { UsersRoutingModule } from './users-routing.module'
import { UsersComponent } from './users.component'
import { UserManagementComponent } from './components/user-management/user-management.component'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { SharedModule } from 'src/app/shared/shared.module'
import { UsersDatatableComponent } from './components/users-datatable/users-datatable.component'

@NgModule({
  declarations: [UsersComponent, UserManagementComponent, UsersDatatableComponent],
  imports: [CommonModule, NgxDatatableModule, UsersRoutingModule, SharedModule, BsDatepickerModule.forRoot()],
})
export class UsersModule {}
