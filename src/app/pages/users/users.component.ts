import { Component, OnInit, Input } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { User } from 'app/_interfaces/user';
import { UsersService } from 'app/_services/users.service';
@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'enabled'];
  dataSource: User[] = [];

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.userService.fetchAll().subscribe(
      (users) => (this.dataSource = users),
      (error) => {
        console.log('UsersComponent -> ngOnInit -> error', error);
      }
    )
  }

}
