import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { CarService } from './car.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';

import { 
  ButtonModule, 
  InputSwitchModule, 
  CheckboxModule, 
  RadioButtonModule, 
  SliderModule, 
  DropdownModule, 
  TooltipModule,
  ToggleButtonModule,
  SelectButtonModule,
  InputTextModule,
  TabMenuModule,
  DialogModule,
  ListboxModule,
  DataTableModule,
  SharedModule
  } from 'primeng/primeng';

import { DropdownComponent } from './dropdown/dropdown.component';
import { ShowcaseOneComponent } from './showcase-one/showcase-one.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { InputsComponent } from './inputs/inputs.component';
import { TabsComponent } from './tabs/tabs.component';
import { PopupsComponent } from './popups/popups.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    ShowcaseOneComponent,
    DropdownComponent,
    ButtonsComponent,
    InputsComponent,
    TabsComponent,
    PopupsComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    AppRoutingModule,
    InputSwitchModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    SliderModule,
    DropdownModule,
    TooltipModule,
    ToggleButtonModule,
    SelectButtonModule,
    InputTextModule,
    TabMenuModule,
    DialogModule,
    ListboxModule,
    DataTableModule,
    SharedModule
  ],
  providers: [
    HeroService,
    MessageService,
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
