import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JogadorComponent } from './jogador/jogador.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
	{path: '', component: AuthComponent},
	{path: 'home', component: HomeComponent, canActivate: [AuthGuard],
		children: [ 
      { path: 'jogador', component: JogadorComponent }
		]
	},
	{path: 'auth', component: AuthComponent}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
