package br.com.criandoapi.projeto.DAO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.criandoapi.projeto.model.Usuario;

@Repository
public interface IUsuario extends CrudRepository<Usuario, Integer>{

}
