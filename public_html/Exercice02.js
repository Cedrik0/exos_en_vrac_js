function exercice02(){
    //initialisation des variables message, espace, o et pos
    var message= "bonjour à tous !";
    var espace= 0;
    var o = 0;
    var pos = "";
    
    for(i=0; i<length(message); i++){
        //si la valeur de message à l'index i est egal a espace
        if (message[i] === " "){
            //on incrémente la valeur espace
            espace++;
            //sinon si la valeur de message à l'index i est egal a o
        }else if (message[i] === "o"){
            //on incrémente la valeur o
            o++;
            
            pos = pos + " Il y a un o en " + parseInt(i+1) + "eme position";
        }
    }
    //on affiche les resultats
    console.log(" " + message);
    console.log(" Il y a " + espace + " espaces dans la chaine");
    console.log(" Il y a " + o + " o dans la chaine");
    console.log(pos);
}


