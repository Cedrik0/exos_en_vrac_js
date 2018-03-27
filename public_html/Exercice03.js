function exercice03(){
    
    var message = "ceci est un texte assez long";
    var ligne= "";
    
    for(i=0;i<length(message); i++){
        if(message[i] === "e"){
            ligne += "E";
        }
        else if (message[i] === ""){
            ligne+="-";
        }
        else if (message[i-1] === " "){
            ligne+= toUpperCase(message[i]);
        }else{
            ligne+= message[i];
        }
    }
    console.log(ligne);
}


