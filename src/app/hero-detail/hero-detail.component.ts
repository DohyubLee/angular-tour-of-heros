import { Component, OnInit, Input } from '@angular/core';  //@Input 사용하기위해서 추가 바인딩된 데이터를 가져오기위해서
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;  //HeroesComponent에서 바인딩된 데이터를 받는 부분
  //@Input() 현재는 바인딩 되지않지만 예제에선 계속 쓰고있음 ??
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');  //url에서 id값을 추출, +는 string을 number로 바꿔준다
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();   //뒤로가기 기능
  }
}
