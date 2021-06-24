import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent } from './Grid/grid.component';
import { SelectComponent } from './Select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GridComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatExpansionModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
