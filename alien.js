class MotherShip {
    constructor(){
        this.name = "Mother Ship"
        this.hitPoints = 100;
    }
    takeHit() {
        this.hitPoints = this.hitPoints - 9;
    }
}

class DefenceShip {
    constructor(){
        this.name = "Defence Ship"
        this.hitPoints = 80;
    }
    takeHit() {
        this.hitPoints = this.hitPoints - 10;
    }
}

class AttackShip {
    constructor() {
        this.name = "Attack Ship"
        this.hitPoints = 45;
    }
    takeHit() {
        this.hitPoints = this.hitPoints - 12;
    }
}


// all ships array

let allShips = []; 


// create ships

const createShips = () => { 
    allShips[0] = new MotherShip;
    for (let index=1; index <6; index++) {
        allShips[index] = new DefenceShip;
    }
    for (let index=6; index <14; index++) {
        allShips[index] = new AttackShip;
    }
    return allShips;
}


const attackShip = () => {
    const randomShipIndex = Math.floor(Math.random() * allShips.length);
    allShips[randomShipIndex].takeHit();
    return allShips;
}

const printIndividualShip = (ship) => {
    const showShip = `<p class='ship'> ${ship.name} - HP: ${ship.hitPoints}</p >`;
    document.getElementById('alienShips').innerHTML += showShip;
}

const printShips = () => {
    document.getElementById('alienShips').innerHTML = "";
    allShips.forEach(printIndividualShip);
}

const startResetGame = () => {
    // allShips = [];
    createShips();
    printShips();
}


