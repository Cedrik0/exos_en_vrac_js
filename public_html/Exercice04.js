function exercice04(){
    //initialisation des variables message, ligne, nbmots et nbchar
    var message = "ceci est un texte assez long ";
    var ligne= "";
    var nbmots= 0;
    var nbchar= 0;
    
    for(i=0;i<length(message);i++){
        ligne += message[i];
        nbchar++;
        //si la valeur de message à l'index i est egal à un espace, on incrémente nbmots
        if(message[i] === " "){
            nbmots++;
            console.log(ligne + " contient " + parseInt(nbchar - 1) + "caractères et est le mot numero " + nbmots);
            //on reinitialise les variables nbchar et ligne
            nbchar = 0;
            ligne = "";
        }
    }
}