import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [],
})
export class NewPageComponent implements OnInit{
  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('',{nonNullable:true}),
    publisher: new FormControl<Publisher>(Publisher.MarvelComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  constructor(private heroService: HeroesService, private activatedRoute: ActivatedRoute,
    private router:Router){}


  ngOnInit(): void {

  }


  get currentHero():Hero{
    const hero= this.heroForm.value as Hero
    return hero;
  }
  onSubmit():void{

    if(this.heroForm.invalid)return;
  if(this.currentHero.id){
    this.heroService.updateHero(this.currentHero).subscribe(hero => {
      //TODO:Show snackbar
    } );

    return
  }

  this.heroService.addHero(this.currentHero).subscribe(hero =>{
    //TODO: show snackbar and navigate
  })
  }

  public publishers = [
    { id: 'DC Comics', desc: 'DC-Comics' },
    { id: 'Marvel Comics', desc: 'Marvel-comics' },
  ];
}
