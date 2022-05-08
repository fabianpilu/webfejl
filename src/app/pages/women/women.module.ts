import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomenRoutingModule } from './women-routing.module';
import { WomenComponent } from './women.component';
import { AppComponent } from 'src/app/app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WomenComponent
  ],
  imports: [
    CommonModule,
    WomenRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class WomenModule { }
