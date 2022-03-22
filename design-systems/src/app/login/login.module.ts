import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { InputModule } from '../input/input.module';
import { ButtonModule } from '../button/button.module';
import { FormGroupModule } from '../form-group/form-group.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, InputModule, FormGroupModule, ButtonModule],
  exports: [LoginComponent],
})
export class LoginModule {}
