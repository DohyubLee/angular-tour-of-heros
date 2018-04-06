import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // [(ngModel)]을 사용하려면 import해야함


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({  //중요 메타데이터
  declarations: [
    AppComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroesComponent
  ],
  imports: [  //
    BrowserModule,
    FormsModule
  ],
  providers: [  //이곳에 서, MessageService비스를 명시하면 모든 컴포넌트에 연결할수있다
    HeroService,     //서비스 명시후 추가로 사용할 컴포넌트에 import한다
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
