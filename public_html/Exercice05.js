//extraction des mots de la chaine
//stockage dans un tableau de string
//retourne le message correspondant au resultat de l'exo
function exercice05(){
    //initialisation des variables
    var message = "ceci est un texte assez long ";
    var messageDeRetour = "";
    var listeDeMots = [];
    var whiteSpace = " ";
    var idx = 0;
    var word = "";
    var nbchar = 0;
    //extraction des mots de la chaine
    for(var i = 0; i < length(message); i++){
        //si la valeur de message à l'index i est egal à " ", on stock word dans la liste de mot
        if(message[i] === whiteSpace){
            listeDeMots[idx] = word;
            idx++;
            word = "";
        //sinon word = word + message[i]
        }else{
            word += message[i];
            //si i est egal à la longueur du message - 1, on stock word dans la liste de mots
            if(i === length(message)-1){
            listeDeMots[idx] = word;
            }
        }
    }
    // partie 1 de l'exo : afficher un mot sur deux a partir du second
    
    for(var i = 0; i < length(listeDeMots); i++){
        //si i modulo 2 est egal à 0 alors, on stock la liste de mots dans la variable message de retour
        if(i%2 === 0){
            messageDeRetour += listeDeMots[i] + " ";
        }
    }
    
    console.log(message);
    console.log("Si on supprime un mot sur deux à partir du premier, il reste: " + messageDeRetour);
    // Partie 2 de l'exo : cacher un mot sur deux a partir du second
    messageDeRetour= "";
    for(var i = 0; i < length(listeDeMots); i++){
        //si i modulo 2 est egal à 1, on stock la liste de mots dans la variable message de retour
        if(i%2 ===1){
            messageDeRetour += listeDeMots[i] + " ";
        }
    }
    
    console.log("Si on supprime un mot sur deux à partir du deuxième, il reste: " + messageDeRetour);
    
    // Partie 3 de l'exo : Supprimez tous les mots donc le nombre de caractère est supérieur à 3
//    messageDeRetour= "";
//    for(var i = 0; i < length(message); i++) {
//        messageDeRetour += message[i];
//        nbchar++;
//        //si la valeur de message à l'index i est egal à un espace, on incrémente nbmots
//        if(message[i] === " "){
//        }
//    }
    //Partie 4 de l'exo : afficher les mots qui ont un e
    
    //on reinitialise la variable à sa valeur de base
    messageDeRetour= "";
    var isOk = false;
    for(var i = 0; i < length(listeDeMots); i++){
        word = listeDeMots[i];
        
        for(var j = 0; j < length(word); j++){
            //si la valeur de word à l'index j est egal à e alors isOk est true
            if(word[j] === "e"){
                isOk = true;
                break;
                
            }
        }
        //si isOk est vrai, on stock word dans le message de retour
        if(isOk){
            messageDeRetour += word + " ";
            //on reinitialise la valeur isOk à faux
            isOk = false;
        }
    }
    console.log( messageDeRetour);
}