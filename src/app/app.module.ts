import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { FormulaTableComponent } from './formula-table/formula-table.component';
import { FormsModule } from '@angular/forms';
import { MMtoMConverter } from './formula-table/inM.pipe';
import { EmailIconComponent } from './email-icon/email-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FormulaTableComponent,
    MMtoMConverter,
    EmailIconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
