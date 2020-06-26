class Player {
    coins = [];
    activeCoin = null;

    updateActiveCoin = (id) => {
        if(this.coins.includes(id)){
            this.activeCoin = id;
        }
    }

    move = (pathId)=>{
        var element = document.querySelector("#"+pathId);
        var rect = element.getBoundingClientRect();
        
        var coin1 = document.querySelector(activeCoin);
        coin1.style.top = (rect.top + 14 ) +"px";
        coin1.style.right = (rect.right) +"px";
        coin1.style.bottom = (rect.bottom)+"px";
        coin1.style.left = (rect.left+14)+"px";
    }

}

export default Player;