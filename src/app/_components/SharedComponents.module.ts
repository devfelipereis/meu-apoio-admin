import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";

@NgModule({
  entryComponents: [ConfirmDialogComponent],
  imports: [MatButtonModule, MatDialogModule],
  declarations: [ConfirmDialogComponent],
})
export class ConfirmDialogModule {}
