import { Component, OnInit } from '@angular/core'
import { BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent implements OnInit {
  title: string
  closeBtnName: string
  list: any[] = []

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.list.push('PROFIT!!!')
  }
}
