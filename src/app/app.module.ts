import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UiModule, IconsRegistry } from '@egov/cvi-ng';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { cviLogout } from '@egov/cvi-icons';
import { cviHappyFace } from '@egov/cvi-icons';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiModule, FontAwesomeModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private registry: IconsRegistry) {
    this.registry.registerIcons([cviLogout, cviHappyFace]);
  }
}
