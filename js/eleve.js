class Eleve{
    constructor (na, fi ,cl){

        this.nom = na;
        this.prenom = fi;
        this.classe = cl;
        this.note = {
            math: [],
            algorithmique: [],
            javascript: []
        }
        }
    
    
    presentation(){
        alert('Bonjour je suis ' + this.nom + " " + this.prenom + ' et je suis en classe de ' + this.classe)
    }
    newNoteMath (math){
        this.note.math = math;
    }
    newNoteAlgo (algori){
        this.note.algorithmique = algori;
    }
    newNoteJs (javascript){
        this.note.javascript = javascript;
    }
    moyenne(){
        alert('ma moyenne general est de ')
    }
}