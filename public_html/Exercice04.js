function exercice04(){
    var message = "ceci est un texte assez long ";
    var ligne= "";
    var nbmots= 0;
    var nbchar= 0;
    
    for(i=0;i<length(message);i++){
        ligne+=message[i];
        nbchar++;
        if(message[i] === " "){
            nbmots++;
            console.log(ligne + " contient " + parseInt(nbchar - 1) + "caractères et est le mot numero " + nbmots);
            nbchar = 0;
            ligne = "";
        }
    }
}


