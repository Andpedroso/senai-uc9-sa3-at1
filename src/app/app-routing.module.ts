import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';
import { CelularesComponent } from './views/celulares/celulares.component';
import { HardwareComponent } from './views/hardware/hardware.component';
import { HomeComponent } from './views/home/home.component';
import { JogosComponent } from './views/jogos/jogos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hardware', component: HardwareComponent },
  { path: 'celulares', component: CelularesComponent },
  { path: 'jogos', component: JogosComponent },
  { path: 'cadastrar', component: CadastrarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
