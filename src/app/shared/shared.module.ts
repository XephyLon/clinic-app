import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule,
  MatDatepickerModule,
  MatExpansionModule
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatExpansionModule
  ]
})
export class SharedModule {}
