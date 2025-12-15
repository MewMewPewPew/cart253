class Animal{
  nom = "";

  constructor(nom){
    this.nom = nom;
  }

  cri(){
    return '';
  }

  getNom(){
    return this.nom;
  }

  getNomSwag(){
    return "*** " + this.nom + " ***";
  }

  criAvecNom(){
    return this.nom + ' a fait le son ' + this.cri();
  }
}

class Chat extends Animal{

  couleur="";

  constructor(nom, couleur){
    super("chat-"+nom);
    this.couleur = couleur;
  }

  cri(){
    return 'miaw';
  }

}

let mon_chat = new Chat("benji");
console.log(mon_chat.getNom());
// console.log(mon_chat.criAvecNom());



