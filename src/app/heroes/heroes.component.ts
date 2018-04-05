import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';  //hero.ts에서 만든 클래스를 여기서 사용하려면 import해야함
import { HEROES } from '../mock-heroes';

@Component({  //메타데이터
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']   //이 CSS파일은 이 컴포넌트에서만 적용됨
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;  //변수에 타입 지정

  constructor() { }

  ngOnInit() {  //초기화 로직을 넣을 라이프 사이클 hook
  }

  onSelect(hero: Hero): void { //Hero타입의 매개변수를 받고 반환형은 void인 함수
    this.selectedHero = hero;
  }

}
