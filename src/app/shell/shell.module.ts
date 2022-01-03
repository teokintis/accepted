import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShellBarComponent } from './components/shell-bar/shell-bar.component';
import { ShellWrapperComponent } from './containers/shell-wrapper/shell-wrapper.component';
import { ShellService } from './services/shell.service';



@NgModule({
  declarations: [
    ShellBarComponent,
    ShellWrapperComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ShellWrapperComponent
  ],
  providers:[
    ShellService
  ]
})
export class ShellModule { }
