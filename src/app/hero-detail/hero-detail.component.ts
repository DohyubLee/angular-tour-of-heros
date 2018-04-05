import { Component, OnInit, Input } from '@angular/core';  //@Input 사용하기위해서 추가 바인딩된 데이터를 가져오기위해서
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;  //HeroesComponent에서 바인딩된 데이터를 받는 부분

  constructor() { }

  ngOnInit() {
  }

}
