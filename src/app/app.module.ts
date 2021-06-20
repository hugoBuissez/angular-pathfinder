import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent } from './Grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GridComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
