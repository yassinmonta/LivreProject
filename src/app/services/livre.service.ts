import { Injectable } from '@angular/core';
import { Livre } from '../model/livre.model';
import { Genre } from '../model/genre.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenreWrapper } from '../model/genreWrapped.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
providedIn: 'root'
})
export class LivreService {
livres! : Livre[]; //un tableau de Livre
livre! :Livre;
//genres! :Genre[];
apiURL: string = 'http://localhost:8080/livres/api';
apiURLGen: string = 'http://localhost:8080/livres/gen'

constructor(private http : HttpClient) {
 /*  this.genres = [ {idGen : 1, nomGen : "historique"},
  {idGen : 2, nomGen : "scientifique"}]; */
/* this.livres = [
{ idLivre : 1, nomLivre : "Quran", prixLivre : 3000.600, dateCreation: new Date("01/14/2011"), 
  genre : { idGen:1, nomGen: "historique"}},
{ idLivre : 2, nomLivre : "Larousse", prixLivre : 450, dateCreation : new Date("12/17/2010"),
  genre :{idGen: 2, nomGen:"scientifique"} },
{ idLivre : 3, nomLivre :"aa", prixLivre : 100.123, dateCreation : new Date("02/20/2020"),
  genre:{ idGen : 1, nomGen: "historique"}}
]; */
}
/* listeLivres():Livre[] {
  return this.livres;
} */
listeLivre(): Observable<Livre[]>{
  return this.http.get<Livre[]>(this.apiURL);
  }
  
/* listeGenres():Genre[] {
  return this.genres;
  } */
listeGenres():Observable<GenreWrapper>{ 
    return this.http.get<GenreWrapper>(this.apiURLGen); 
  } 
/* ajouterLivre( liv: Livre){
this.livres.push(liv);
} */
ajouterLivre( liv: Livre):Observable<Livre>{
  return this.http.post<Livre>(this.apiURL, liv, httpOptions);
  }
/* supprimerLivre( liv: Livre){
  //supprimer le livre prod du tableau livres
  const index = this.livres.indexOf(liv, 0);
  if (index > -1) {
  this.livres.splice(index, 1);
  } */
  //ou Bien
  /* this.livres.forEach((cur, index) => {
  if(liv.idLivre === cur.idLivre) {
  this.livres.splice(index, 1);
  }
  });} */


  supprimerLivre(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }
/* consulterLivre(id:number): Livre{
    this.livre = this.livres.find(l => l.idLivre == id)!;
    return this.livre;
    } */
    consulterLivre(id: number): Observable<Livre> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Livre>(url);
      }
/* consulterGenre(id:number): Genre{
      return this.genres.find(gen => gen.idGen == id)!;
      } */
trierLivres(){
      this.livres = this.livres.sort((n1,n2) => {
      if (n1.idLivre! > n2.idLivre!) {
      return 1;
      }
      if (n1.idLivre! < n2.idLivre!) {
      return -1;
      }
      return 0;
      });
      }
updateLivre(liv :Livre) : Observable<Livre>
{
return this.http.put<Livre>(this.apiURL, liv, httpOptions);
}
/* updateLivre()
{
 //console.log(l);
this.supprimerLivre(l);
this.ajouterLivre(l);
this.trierLivres();

} */
rechercherParGenre(idGen: number):Observable<Livre[]> {
  const url = `${this.apiURL}/livsgen/${idGen}`;
  return this.http.get<Livre[]>(url);
  }
}

