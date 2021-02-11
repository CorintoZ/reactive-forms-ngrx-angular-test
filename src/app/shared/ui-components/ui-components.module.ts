import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { SharedModule } from '../shared.module'
import { RouterModule } from '@angular/router'
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component'

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [HeaderComponent],
  entryComponents: [],
})
export class UiComponentsModule {}
