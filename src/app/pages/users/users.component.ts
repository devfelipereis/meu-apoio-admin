import { Component, OnInit } from '@angular/core';
import { User } from 'app/_interfaces/user';
import { UserCreateComponent } from './_components/user-create/user-create.component';
import { MatDialog } from "@angular/material/dialog";
import { UserUpdate } from './_components/user-update/user-update.interface';
import { UserUpdateComponent } from './_components/user-update/user-update.component';
import { UsersService, ConfirmDialogService } from 'app/_services';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'enabled', 'actions'];
  dataSource: User[] = [];

  constructor(
    public dialog: MatDialog,
    private userService: UsersService,
    private confirmDialogService: ConfirmDialogService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.userService.fetchAll().subscribe(
      (users) => (this.dataSource = users),
      (error) => {
        console.log('UsersComponent -> ngOnInit -> error', error);
      }
    )
  }

  create() {
    const dialogRef = this.dialog.open(UserCreateComponent);

    dialogRef
      .afterClosed()
      .subscribe((user: User | string | undefined) => {
        if (user === "" || user === undefined) return;

        console.log('USER', user)
        // this.paginator.page.next();
      });
  }

  enableDisable(user: User) {
    console.log('user', user)

    const data: UserUpdate = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      enabled: !user.enabled,
    }

    this.userService.update(user.id, data).subscribe(
      (response) => user.enabled = !user.enabled,
      (error) => {
        console.log('UsersComponent -> enableDisable -> error', error);
      }
    )
  }

  edit(user: User) {
    const dialogRef = this.dialog.open(UserUpdateComponent, {
      data: user,
    });

    dialogRef
      .afterClosed()
      .subscribe((user: User | string | undefined) => {
        if (user === "" || user === undefined) return;
        // this.user.page.next();
        console.log('USER', user)
      });
  }

  remove(id: number) {
    this.confirmDialogService.confirm().subscribe((result) => {
      if (result) {
        this.userService.remove(id).subscribe(
          () => {
            this.snackBar.open("Usuário removido com sucesso.", null, {
              duration: 3000,
              horizontalPosition: "right",
              verticalPosition: "top",
              panelClass: ["success-snackbar"],
            });
            // this.paginator.page.next();
          },
          (error) => {
            this.snackBar.open(
              "Não foi possível remover o usuário. Tente novamente.",
              null,
              {
                duration: 3000,
                horizontalPosition: "right",
                verticalPosition: "top",
                panelClass: ["error-snackbar"],
              }
            );
          }
        );
      }
    });
  }

}
