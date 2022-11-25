package com.yassine.livres.entities;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
@Entity
public class Livre {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long idLivre;
private String nomLivre;
private Double prixLivre;
private Date dateCreation;
public Genre getGenre() {
	return genre;
}
public void setGenre(Genre genre) {
	this.genre = genre;
}
@ManyToOne
private Genre genre;
public Livre() {
super();
}
public Livre(String nomLivre, Double prixLivre, Date dateCreation) {
super();
this.nomLivre = nomLivre;
this.prixLivre = prixLivre;
this.dateCreation = dateCreation;
}
public Long getIdLivre() {
return idLivre;
}
public void setIdLivre(Long idLivre) {
this.idLivre = idLivre;
}
public String getNomLivre() {
return nomLivre;
}
public void setNomLivre(String nomLivre) {
this.nomLivre = nomLivre;
}
public Double getPrixLivre() {
return prixLivre;
}
public void setPrixLivre(Double prixLivre) {
this.prixLivre = prixLivre;
}
public Date getDateCreation() {
return dateCreation;
}
public void setDateCreation(Date dateCreation) {
this.dateCreation = dateCreation;
}
@Override
public String toString() {
return "Livre [idLivre=" + idLivre + ", nomLivre=" + 
nomLivre + ", prixLivre=" + prixLivre
+ ", dateCreation=" + dateCreation + "]";
}
}