import {Subject} from 'rxjs';

export class UserService {

  private users = [
    {
      nom : 'walid' ,
      prenom : 'djebbouri' ,
      age : 27 ,
    },

    {
      nom : 'houssem' ,
      prenom : 'djebbouri' ,
      age : 24 ,
    },

    {
      nom : 'aymen' ,
      prenom : 'adjadji' ,
      age : 26 ,
    },


  ] ;

  userSubject = new Subject<any[]>() ;

  envyerUser() {

    this.userSubject.next(this.users.slice()) ;
  }

  modifierUser(index: number , nom: string , prenom: string , age: number) {
    this.users[index].nom = nom ;
    this.users[index].prenom = prenom ;
    this.users[index].age = age ;
    this.envyerUser() ;
  }




}
