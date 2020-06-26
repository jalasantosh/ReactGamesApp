import Player from "./player"

class Board {
    players = [];
    isDiceActive = false;
    activePlayer = null;


    constructor(){
        let player1 = new Player();
        player1.coins["p1c1","p1c2","p1c3","p1c4"];

        let player2 = new Player();
        player1.coins["p2c1","p2c2","p2c3","p2c4"];

        let player3 = new Player();
        player1.coins["p3c1","p3c2","p3c3","p3c4"];

        let player4 = new Player();
        player1.coins["p4c1","p4c2","p4c3","p4c4"];

        this.players.push(player1);
        this.players.push(player2);
        this.players.push(player3);
        this.players.push(player4);
    }

    
}