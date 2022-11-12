import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatButton } from '@angular/material/button';
const MaterialComponents = [MatInputModule, MatButtonModule, MatButton];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
