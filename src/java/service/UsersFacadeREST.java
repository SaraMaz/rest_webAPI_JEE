/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;
import java.util.HashMap;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import model.Users;
import java.io.*;

/**
 *
 * @author high---tech
 */
@Stateless
@Path("model.users")
public class UsersFacadeREST extends AbstractFacade<Users> {

    @PersistenceContext(unitName = "usersPU")
    private EntityManager em;

    public UsersFacadeREST() {
        super(Users.class);
    }

    @POST
    @Override
    @Consumes({MediaType.APPLICATION_JSON})
    public void create(Object entity) {
        HashMap hm = (HashMap) entity;
        Users u =new Users();
        //set the id
        Object o_id = hm.get("id_user");
        String id = o_id.toString();
        u.setIdUser(Integer.parseInt(id));
        //set the name
        Object o_nom = hm.get("nom");
        String nom = o_nom.toString();
        u.setNom(nom);
        //set prenom
        Object o_prenom= hm.get("prenom");
        String prenom = o_prenom.toString();
        u.setPrenom(prenom);
        //set email
        Object o_email= hm.get("email");
        String email = o_email.toString();
        u.setEmail(email); 
        u.setDateInscription();
        super.create(u);
        System.out.println(entity.getClass());
        System.out.println(entity.toString());
    }

    @PUT
    @Path("{id}")
    @Consumes({MediaType.APPLICATION_JSON})
    public void edit(@PathParam("id") Integer id, Object entity) {
        HashMap hm1 = (HashMap) entity;
        Users u =new Users();
        //set the id
        //set the id
        Object o_id = hm1.get("id_user");
        String id1 = o_id.toString();
        u.setIdUser(Integer.parseInt(id1));
        //set the name
        Object o_nom = hm1.get("nom");
        String nom = o_nom.toString();
        u.setNom(nom);
        //set prenom
        Object o_prenom= hm1.get("prenom");
        String prenom = o_prenom.toString();
        u.setPrenom(prenom);
        //set email
        Object o_email= hm1.get("email");
        String email = o_email.toString();
        u.setEmail(email); 
        u.setDateInscription();
        super.edit(u);
    }

    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id") Integer id) {
        super.remove(super.find(id));
    }

    @GET
    @Path("{id}")
    @Produces({MediaType.APPLICATION_JSON})
    public Users find(@PathParam("id") Integer id) {
        return super.find(id);
    }

    @GET
    @Override
    @Produces({MediaType.APPLICATION_JSON})
    public List<Users> findAll() {
        return super.findAll();
    }
    @Override
    protected EntityManager getEntityManager() {
        return em;
    }
    
}
