import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';
import { LivreService } from '../services/livre.service';
import { Livre } from '../model/livre.model';
import { Genre } from '../model/genre.model';
@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styleUrls: ['./update-livre.component.css']
})
export class UpdateLivreComponent implements OnInit {

  currentLivre = new Livre();
  genres! : Genre[];
  updatedGenId! : number;

  constructor( private activatedRoute: ActivatedRoute,
               private router:Router,
               private livreService: LivreService) { }

  ngOnInit(): void {
    this.livreService.listeGenres().
subscribe(gens => {console.log(gens);
this.genres = gens._embedded.genres;
}
);
this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']).
subscribe( liv =>{ this.currentLivre = liv;
this.updatedGenId = this.currentLivre.genre.idGen;
} ) ;

 /*    this.livreService.listeGenres().
subscribe(gens => {this.genres = gens;
console.log(gens);
});
this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']).subscribe( liv =>{ this.currentLivre = liv; 
this.updatedGenId = 
this.currentLivre.genre.idGen;
} ) ;
 */
  
    //  this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']).subscribe( liv =>{ this.currentLivre = liv; } ) ;
      
    // console.log(this.route.snapshot.params.id)

    //this.currentLivre= this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']);
   // console.log(this.currentLivre);

 //  this.genres = this.livreService.listeGenres();
/* this.currentLivre =
this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']);
this.updatedGenId=this.currentLivre.genre.idGen; */

  }
  updateLivre()
  { //console.log(this.currentLivre);
  //this.livreService.updateLivre(this.currentLivre);
 // this.router.navigate(['livres']);

// this.currentLivre.genre=this.livreService.consulterGenre(this.updatedGenId);
//this.livreService.updateLivre(this.currentLivre);
//this.router.navigate(['livres']);
/* this.livreService.updateLivre(this.currentLivre).subscribe(liv => {
  this.router.navigate(['livres']); }
  ); */
  this.currentLivre.genre = this.genres.find(gen => gen.idGen == this.updatedGenId)!;
this.livreService.updateLivre(this.currentLivre).subscribe(liv => {
this.router.navigate(['livres']); }
);


  }

}
