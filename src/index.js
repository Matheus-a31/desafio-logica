let nomeDoHeroiEXpDoHeroi = [
["Matheus", "joão", "Vitor"], //linha 0 =  nomes
[11000, 2000, 5002]  //linha 1 =  xp
]

for(let i=0; i<1; i++){
    for (let j = 0; j < nomeDoHeroiEXpDoHeroi[1].length; j++) {
        if (nomeDoHeroiEXpDoHeroi[1][j] < 1000){
            console.log("O Herói de nome: "+nomeDoHeroiEXpDoHeroi[0][j]+" está no nível de"+" Ferro")
        }
        
        else if(nomeDoHeroiEXpDoHeroi[1][j] < 2000 && nomeDoHeroiEXpDoHeroi[1][0] >= 1001){
            console.log("O Herói de nome: "+nomeDoHeroiEXpDoHeroi[0][j]+" está no nível de"+" Bronze")
        }
        
        else if(nomeDoHeroiEXpDoHeroi[1][j] < 5000 && nomeDoHeroiEXpDoHeroi[1][0] >= 2001){
            console.log("O Herói de nome: "+nomeDoHeroiEXpDoHeroi[0][j]+" está no nível de"+" Prata")
        }
        
        else if(nomeDoHeroiEXpDoHeroi[1][j] < 7000 && nomeDoHeroiEXpDoHeroi[1][0] >= 5001){
            console.log("O Herói de nome: "+nomeDoHeroiEXpDoHeroi[0][j]+" está no nível de"+" Ouro")
        }
        
        else if(nomeDoHeroiEXpDoHeroi[1][j] < 8000 && nomeDoHeroiEXpDoHeroi[1][0] >= 7001){
            console.log("O Herói de nome: "+nomeDoHeroiEXpDoHeroi[0][j]+" está no nível de"+" Platina")
        }
        
        else if(nomeDoHeroiEXpDoHeroi[1][j] < 9000 && nomeDoHeroiEXpDoHeroi[1][0] >= 8001){
            console.log("O Herói de nome: "+nomeDoHeroiEXpDoHeroi[0][j]+" está no nível de"+" Ascendente")
        }
        
        else if(nomeDoHeroiEXpDoHeroi[1][j] < 10000 && nomeDoHeroiEXpDoHeroi[1][0] >= 9001){
            console.log("O Herói de nome: "+nomeDoHeroiEXpDoHeroi[0][j]+" está no nível de"+" Imortal")
        }
            
        else if(nomeDoHeroiEXpDoHeroi[1][j] >= 10001){
            console.log("O Herói de nome: "+nomeDoHeroiEXpDoHeroi[0][j]+" está no nível de"+" Radiante")
        }
        
        else{
            console.log("O Herói de nome: "+nomeDoHeroiEXpDoHeroi[0][j]+" está nos niveis listados.")
        }
        
    }
}

