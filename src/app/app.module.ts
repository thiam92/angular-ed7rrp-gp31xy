import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core/';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap/';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { GridTypeComponent } from './grid.type';
import { GridFormlyCellComponent } from './grid-formly-cell.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    AgGridModule.withComponents([GridFormlyCellComponent]),
    FormlyBootstrapModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'grid',
          component: GridTypeComponent,
          defaultOptions: {
            templateOptions: {
              width: '100%',
              height: '400px',
            },
          },
        },
      ],
    }),
  ],
  bootstrap: [AppComponent],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    GridTypeComponent,
    GridFormlyCellComponent,
  ],
})
export class AppModule { }


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */