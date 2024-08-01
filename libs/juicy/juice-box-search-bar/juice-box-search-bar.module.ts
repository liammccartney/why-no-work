import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { JuiceBoxInputModule } from '@fulcrum/juicy';



@NgModule({
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent],
  imports: [
    CommonModule,
    JuiceBoxInputModule
  ]
})
export class JuiceBoxSearchBarModule { }
