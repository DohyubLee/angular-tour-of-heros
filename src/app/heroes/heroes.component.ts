import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';  //hero.ts에서 만든 클래스를 여기서 사용하려면 import해야함

@Component({  //메타데이터
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {  //초기화 로직을 넣을 라이프 사이클 hook
  }

}
