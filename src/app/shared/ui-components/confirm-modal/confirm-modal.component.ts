import { Component, OnInit } from '@angular/core'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent implements OnInit {
  title: string
  closeBtnName: string
  list: any[] = []
  val: string

  constructor(public bsModalRef: BsModalRef, private modalService: BsModalService) {}

  ngOnInit() {
    this.list.push('PROFIT!!!')
  }
  confirm() {
    this.modalService.onHide.emit(this.val)
    this.bsModalRef.hide()
  }
}
