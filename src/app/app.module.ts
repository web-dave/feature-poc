import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './components/tabs.component';
import { TableComponent } from './components/table.component';
import { FilterComponent } from './components/filter.component';
import { MaterialModule } from './components/material.module';
import { TextComponent } from './components/text.component';
import { DisplayComponent } from './display/display.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TableComponent,
    FilterComponent,
    TextComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
