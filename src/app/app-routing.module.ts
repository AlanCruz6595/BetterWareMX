import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';


const routes: Routes = [
  { path: 'inicio', component: PortafolioComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'producto', component: ItemComponent },
  { path: 'contactanos', component: ContactanosComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
