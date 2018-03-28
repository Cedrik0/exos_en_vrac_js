function exercice03(){
    //initialisation des variables message et ligne
    var message = "ceci est un texte assez long";
    var ligne= "";
    //boucle longueur de message
    for(i=0;i<length(message); i++){
        //si la valeur de message à l'index i est egal à e alors ligne += "E"
        if(message[i] === "e"){
            ligne += "E";
        }
        //sinon si la valeur de message à l'index i est egal à "" alors ligne += "-"
        else if (message[i] === " "){
            ligne+="-";
        }
        //sinon si la valeur de message à l'index i - 1 est egal à " " alors ligne += toUpperCase(message[i])
        else if (message[i-1] === " "){
            ligne+= toUpperCase(message[i]);
        //sinon     
        }
        else{
            ligne+= message[i];
        }
    }
    //on affiche la ligne
    console.log(ligne);
}


