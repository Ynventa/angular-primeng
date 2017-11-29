import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { ShowcaseOneComponent } from './showcase-one/showcase-one.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { InputsComponent } from './inputs/inputs.component';
import { TabsComponent } from './tabs/tabs.component';
import { PopupsComponent } from './popups/popups.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'inputs', component: InputsComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'popups', component: PopupsComponent },
  { path: 'showcase-one', component: ShowcaseOneComponent },
  { path: '', redirectTo: '/showcase-one', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
