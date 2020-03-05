import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserURL, TaskURL } from '../../../shared/url/url.domain';
import { BaseListComponent } from '../../../core/interface/base-list.component';
import { BaseEditComponent } from '../../../core/interface/base-edit.component';
import { CrudService } from '../../../core/service/crud.service';

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.css']
})

export class UserSelectComponent extends BaseEditComponent implements OnInit {

  private users: any[];
  private taskId: Number;
  private userId: Number;

  constructor(
    private crudService: CrudService,
    private dialogRef: MatDialogRef<UserSelectComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ){
    super();
    this.taskId = data.taskId;
  }

  ngOnInit() {
    super.ngOnInit();
    this.service.getAll(UserURL.BASE).subscribe(result => {
      this.users = result['items'];
    });
  }
  
  getServiceURL(): string {
    return UserURL.BASE;
  }

  getRouterURL(): string {  
    return '';
  }
  
  getFormControls(): Object {
    return {
      assignedUser: this.formBuilder.control(undefined, []),
    }
  }

  selectUser(): void{
    this.crudService.updatePartial(TaskURL.BASE, this.taskId, this.getFormValue()).subscribe(resulte => {
      this.notification.updateSuccess();
    }, error => {
      this.notification.error('Erro ao executar ação');
    });
    this.dialogRef.close();
  }

}
