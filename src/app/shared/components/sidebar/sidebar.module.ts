import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '../../../core/module/material.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { SidebarComponent } from './sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import {
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective
} from '../../accordion';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    TranslateModule,
    MaterialModule,
    NgxPermissionsModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    SidebarComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  exports: [SidebarComponent],
  providers: []
})
export class SidebarModule {}
