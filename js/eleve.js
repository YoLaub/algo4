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
    newNoteMath (mathNote){
        let mathArray =  this.note.math;
        mathArray = mathArray.push(mathNote);
    }
    newNoteAlgo (algoNote){
        let algoArray = this.note.algorithmique;
        algoArray = algoArray.push(algoNote)
    }
    newNoteJs (jsNote){
        let jsArray = this.note.javascript;
        jsArray = jsArray.push(jsNote)
    }
    moyenneMath(){
        let initialValue = 0;
        let sumArray = this.note.math.reduce((i, e)=> i + e, initialValue);
        let moyenne =  Math.round((sumArray/this.note.math.length)*100)/100;

        return moyenne
    }
    moyenneAlgo(){
        let initialValue = 0;
        let sumArray = this.note.algorithmique.reduce((i, e)=> i + e, initialValue);
        let moyenne =  Math.round((sumArray/this.note.algorithmique.length)*100)/100;

        return moyenne
    }
    moyenneJs(){
        let initialValue = 0;
        let sumArray = this.note.javascript.reduce((i, e)=> i + e, initialValue);
        let moyenne =  Math.round((sumArray/this.note.javascript.length)*100)/100;

        return moyenne
    }


}