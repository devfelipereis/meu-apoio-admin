import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import {
  ConfirmDialogModel,
  ConfirmDialogComponent,
} from "../_components/confirm-dialog/confirm-dialog.component";

@Injectable({
  providedIn: "root",
})
export class ConfirmDialogService {
  constructor(private dialog: MatDialog) {}

  confirm() {
    const message = ``;

    const dialogData = new ConfirmDialogModel("Tem certeza", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData,
    });

    return dialogRef.afterClosed();
  }
}
