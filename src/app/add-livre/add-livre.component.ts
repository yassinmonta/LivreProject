import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';
import { Genre } from '../model/genre.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {

  newLivre = new Livre();

  message! :string;

  genres! :Genre[];
  newIdGen!:number;
  newGenre!: Genre;

  constructor(private livreService: LivreService,
              private router:Router) { }
  ngOnInit(): void {
             // this.genres = this.livreService.listeGenres();
             this.livreService.listeGenres().subscribe(gens => {console.log(gens);
              this.genres = gens._embedded.genres;
             
             });
             
              } 
  addLivre(){
 /*   // console.log(this.newLivre);
   this.newGenre =
  // this.livreService.consulterGenre(this.newIdGen);
   this.newLivre.genre = this.newGenre;
   this.livreService.ajouterLivre(this.newLivre);
   this.router.navigate(['livres']);
   
   
   this.message="Livre "+ this.newLivre.nomLivre+ " ajouter avec succes"; */
  /*  this.livreService.ajouterLivre(this.newLivre).subscribe(liv => {
console.log(liv);
this.router.navigate(['livres']); 
});*/

  this.newLivre.genre = this.genres.find(gen => gen.idGen == this.newIdGen)!;
  this.livreService.ajouterLivre(this.newLivre)
  .subscribe(liv => {
  console.log(liv);
  this.router.navigate(['livres']);
  });
  }


    }




