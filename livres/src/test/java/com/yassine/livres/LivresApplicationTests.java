package com.yassine.livres;

import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.yassine.livres.entities.Genre;
import com.yassine.livres.entities.Livre;
import com.yassine.livres.repos.LivreRepository;

@SpringBootTest
class LivresApplicationTests {

	@Autowired
	private LivreRepository livreRepository;
	@Test
	public void testCreateLivre() {
	Livre liv = new Livre("Histoire",2200.500,new Date());
	livreRepository.save(liv);
	}
	@Test
	public void testFindLivre()
	{
	Livre l = livreRepository.findById(1L).get();
	System.out.println(l);
	}
	@Test
	public void testUpdateLivre()
	{
	Livre l = livreRepository.findById(1L).get();
	l.setPrixLivre(1000.0);
	livreRepository.save(l);
	}
	@Test
	public void testDeleteLivre()
	{
	livreRepository.deleteById(1L);;
	}
	@Test
	public void testListerTousLivres()
	{
	List<Livre> livs = livreRepository.findAll();
	for (Livre l : livs)
	{
	System.out.println(l);
	}
	}
	 @Test
	 public void testFindByNomLivre()
	 {
	 List<Livre> livs = livreRepository.findByNomLivre("Histoire");
	 for (Livre l : livs)
	 {
	 System.out.println(l);
	 }
	 }
	 @Test
	 public void testFindByNomLivreContains ()
	 {
	 List<Livre> livs=livreRepository.findByNomLivreContains("Histoire");
	 for (Livre l : livs)
	 {
	 System.out.println(l);
	 } }
	 @Test
	 public void testfindByNomPrix()
	 {
	 List<Livre> livs = livreRepository.findByNomPrix("Histoire", 1000.0);
	 for (Livre l : livs)
	 {
	 System.out.println(l);
	 }
	 }
	 @Test
	 public void testfindByGenre()
	 {
	 Genre gen = new Genre();
	 gen.setIdGen(1L);
	 List<Livre> livs = livreRepository.findByGenre(gen);
	 for (Livre l : livs)
	 {
	 System.out.println(l);
	 }
	 }
	 @Test
	 public void findByGenreIdGen()
	 {
	 List<Livre> livs = livreRepository.findByGenreIdGen(1L);
	 for (Livre l : livs)
	 {
	 System.out.println(l);
	 }
	  }
	 @Test
	 public void testfindByOrderByNomLivreAsc()
	 {
	 List<Livre> livs = livreRepository.findByOrderByNomLivreAsc();
	 for (Livre l : livs)
	 {
	 System.out.println(l);
	 }
	 }
	 @Test
	 public void testTrierLivresNomsPrix()
	 {
	 List<Livre> livs = livreRepository.trierLivresNomsPrix();
	 for (Livre l : livs)
	 {
	 System.out.println(l);
	 }
	 }


}
