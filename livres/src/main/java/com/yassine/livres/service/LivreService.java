package com.yassine.livres.service;

import java.util.List;

import com.yassine.livres.entities.Genre;
import com.yassine.livres.entities.Livre;

public interface LivreService {
	Livre saveLivre(Livre l);
	Livre updateLivre(Livre l);
	void deleteLivre(Livre l);
	void deleteLivreById(Long id);
	Livre getLivre(Long id);
	List<Livre> getAllLivres();
	List<Livre> findByNomLivre(String nom);
	List<Livre> findByNomLivreContains(String nom);
	List<Livre> findByNomPrix (String nom, Double prix);
	List<Livre> findByGenre (Genre genre);
	List<Livre> findByGenreIdGen(Long id);
	List<Livre> findByOrderByNomLivreAsc();
	List<Livre> trierLivresNomsPrix();
}
