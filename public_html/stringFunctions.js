function length(chaine){
    //initialisation de la variable longueur à 0
    var longueur = 0;
    while(true){
        //si la chaine a l'index longueur contient quelque chose alors on incrémente
        if(chaine[longueur] !== undefined){
            longueur++;
            //sinon on sort 
        }else{
            break;
        }  
    }
    return longueur;
}


function toUpperCase(char) {
    var tableau = [
        
            ["a","A"],
            ["b","B"],
            ["c","C"],
            ["d","D"],
            ["e","E"],
            ["f","F"],
            ["g","G"],
            ["h","H"],
            ["i","I"],
            ["j","J"],
            ["k","K"],
            ["l","L"],
            ["m","M"],
            ["n","N"],
            ["o","O"],
            ["p","P"],
            ["q","Q"],
            ["r","R"],
            ["s","S"],
            ["t","T"],
            ["u","U"],
            ["v","V"],
            ["w","W"],
            ["x","X"],
            ["y","Y"],
            ["z","Z"]
        ];
    for (var j = 0; j < 2; j++) {
      
        for (var i = 0; i < 26; i++) {
          
            if (char === tableau[i][j]) {
              
            return tableau[i][1];
          }
      }
    }
}