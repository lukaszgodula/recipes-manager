import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { DeleteDialogComponent } from './delete-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [DeleteDialogComponent],
  entryComponents: [
    DeleteDialogComponent
  ],
})
export class DeleteDialogModule { }
