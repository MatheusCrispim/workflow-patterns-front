import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenuItems } from '../menu-items/menu-items';

import { SpinnerComponent } from '../components/spinner/spinner.component';
import { MaterialModule } from '../../core/module/material.module';
import { HeaderModule } from '../components/header/header.module';
import { SidebarModule } from '../components/sidebar/sidebar.module';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [BrowserModule, MaterialModule],
  exports: [HeaderModule, SidebarModule, SpinnerComponent],
  providers: [MenuItems]
})
export class SharedModule {}
