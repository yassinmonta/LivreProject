import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  livres! : Livre[]; //un tableau de Livre
 

  constructor(private livreService: LivreService ) {
    //this.livres = this.livreService.listeLivre();
    }
    
  /*   supprimerLivre(liv: Livre)
    {
   // console.log(liv);
   let conf=confirm("etes-vous sur?");
   if(conf)
   this.livreService.supprimerLivre(liv);

    } */


  ngOnInit(): void {
  /*   this.livreService.listeLivre().subscribe(livs => {
      console.log(livs);
      this.livres = livs;
      }); */
      this.chargerLivres();  
  }
  chargerLivres(){
    this.livreService.listeLivre().subscribe(livs => {
    console.log(livs);
    this.livres = livs;
    }); }
  supprimerLivre(l: Livre)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.livreService.supprimerLivre(l.idLivre).subscribe(() => {
console.log("livre supprimé");
this.chargerLivres();
});
} 

}

      


