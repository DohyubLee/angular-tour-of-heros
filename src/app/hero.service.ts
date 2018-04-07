import { Injectable } from '@angular/core';  //@Injectable()를 사용하기위해서 import함

import { Observable } from 'rxjs/Observable';  //비동기 작업할때
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {  //반환형이 Hero[]인 함수, observable타입으로 반환 비동기 작업을 할때(예: 통신)
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);  //of() 값을 하나씩 보내고 다 보내면 완료를 알림
  }
  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
