import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';  //hero.ts에서 만든 클래스를 여기서 사용하려면 import해야함
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service'; //서비스 사용가능하게됨

@Component({  //메타데이터
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']   //이 CSS파일은 이 컴포넌트에서만 적용됨
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];  //타입이 Hero[]인 변수선언
  selectedHero: Hero;  //변수에 타입 지정

  constructor(private heroService: HeroService) { } //말그대로 생성자 인자로 전달된값을 초기화해준다

  ngOnInit() {  //초기화 로직을 넣을 라이프 사이클 hook, app 실행시 ngOnInit()실행된다
    this.getHeroes();
  }
  
  getHeroes(): void { 
    this.heroService.getHeroes()   //생성자에 선언하면 서비스에 있는 getHeroes()을 사용할수있다
      .subscribe(heroes => {
        this.heroes = heroes
      });
  }

  onSelect(hero: Hero): void { //Hero타입의 매개변수를 받고 반환형은 void인 함수
    this.selectedHero = hero;
  }

}
