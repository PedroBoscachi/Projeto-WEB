import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

const MaterialComponents = [MatInputModule];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
