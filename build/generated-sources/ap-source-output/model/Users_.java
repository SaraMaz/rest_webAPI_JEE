package model;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2018-12-03T02:02:10")
@StaticMetamodel(Users.class)
public class Users_ { 

    public static volatile SingularAttribute<Users, Integer> idUser;
    public static volatile SingularAttribute<Users, Date> dateInscription;
    public static volatile SingularAttribute<Users, String> nom;
    public static volatile SingularAttribute<Users, String> prenom;
    public static volatile SingularAttribute<Users, String> email;

}