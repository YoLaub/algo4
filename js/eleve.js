class Eleve {
  constructor(na, fi, cl) {
    this.nom = na;
    this.prenom = fi;
    this.classe = cl;
    this.note = {
      math: [],
      algorithmique: [],
      javascript: [],
    };
  }

  // -----------------------------------------------------
  /*presentation()

    cette fonction permet à l'élève de se presenter
    */

  presentation() {
    alert(
      "Bonjour je suis " +
        this.nom +
        " " +
        this.prenom +
        " et je suis en classe de " +
        this.classe
    );
  }

  // -----------------------------------------------------

  // -----------------------------------------------------
  /*newNote(param1, param2)

    param1 = note
    param2 = session

    Grace à hasOwnProperty() nous verifions si la [session] est bien presente dans la liste de session. this.note[session]

    cette fonction permet d'ajouter une nouvelle note dans le tableau de note
    */


  newNote(newNote, session) {
    if (this.note.hasOwnProperty(session)) {
      this.note[session].push(newNote);
    }
  }




  
  // -----------------------------------------------------

  // -----------------------------------------------------
  /*moyenne(param1)

  param1 = matière

    cette fonction permet de generer la moyenne par matière pour l'élève du groupe

    Grace à reduce(), nous additionnons le contenue de this.note[session]

    Grace à hasOwnProperty() nous verifions si la [session] est bien presente dans la liste de session. this.note[session]

    return = la moyenne de l'élève de la matière choisie

    */

  moyenne(session) {
    let initialValue = 0;
    let moyenne = 0;
    let notNote = "pas";

    let sumArray = this.note[session].reduce((i, e) => i + e, initialValue);

    if (this.note.hasOwnProperty(session)) {
      if (this.note[session].length == 0) {
        alert("Vous n'avez pas encore de note en mathematique");
        return notNote;
      } else if (this.note[session].length == 1) {
        moyenne = this.note[session][0];
      } else {
        moyenne =
          Math.round((sumArray / this.note[session].length) * 100) / 100;
      }
      return moyenne;
    }
  }
};
