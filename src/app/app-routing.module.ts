import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //라우트 설정하기위한 라이브러리
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [  //사용할 라우트 작성 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]   //app-module에서 사용하기위해서 
})
export class AppRoutingModule { }
