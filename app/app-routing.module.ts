import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';
import { GetStartedComponent } from './get-started/get-started.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: []
  },
  {
    path: 'components', component: ComponentsComponent,
    children: []
  },
  {
    path: 'get-started', component: GetStartedComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
