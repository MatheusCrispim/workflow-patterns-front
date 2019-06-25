import { Component, EventEmitter, OnInit, Output } from '@angular/core';

/**
 * Component for an user confirmation of item removing.
 *
 * If it is authorized, emits an event confirming.
 *
 * @property {EventEmitter} onOK  - event emitter for OK response.
 */
@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {
  ngOnInit(): void {}
}
