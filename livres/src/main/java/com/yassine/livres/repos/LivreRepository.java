package com.yassine.livres.repos;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.yassine.livres.entities.Genre;
import com.yassine.livres.entities.Livre;
@RepositoryRestResource(path = "rest")
public interface LivreRepository extends JpaRepository<Livre, Long> {
	List<Livre> findByNomLivre(String nom);
	List<Livre> findByNomLivreContains(String nom);
	
	@Query("select l from Livre l where l.nomLivre like %?1 and l.prixLivre > ?2")
	List<Livre> findByNomPrix (String nom, Double prix);
	
	@Query("select l from Livre l where l.genre = ?1")
	List<Livre> findByGenre (Genre genre);
	
	List<Livre> findByGenreIdGen(Long id);
	
	List<Livre> findByOrderByNomLivreAsc();
	
	@Query("select l from Livre l order by l.nomLivre ASC, l.prixLivre DESC")
	List<Livre> trierLivresNomsPrix ();


}
