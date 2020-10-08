import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAngularAppComponent } from './my-angular-app/my-angular-app.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MyAngularAppComponent],
  exports: [MyAngularAppComponent],
})
export class UiModule {}
