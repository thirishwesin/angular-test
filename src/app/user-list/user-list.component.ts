import { Component, OnInit ,ViewChild } from '@angular/core';
import { UserService } from '../service/user.service';
import {Subject} from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  userList: any = [];
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu:[5,10,20],
      pageLength: 5,
      processing: true
    };
    this.retrieveUsers();
  }


  retrieveUsers(): void {
    this.service.getAllUser()
      .subscribe(
        data => {
          this.userList = data;
          console.log(data);
          //this.dtTrigger.next();
        })
       }

      
}
