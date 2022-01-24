// Using Class (And I get Stuck)
const hasilGame = document.querySelector(".versus > p")
const rockDiv = document.getElementById("rock")
const paperDiv = document.getElementById("paper")
const scissorDiv = document.getElementById("scissor")
const comRockDiv = document.getElementById("rock-com")
const comPaperDiv = document.getElementById("paper-com")
const comScissorDiv = document.getElementById("scissor-com")

class UserChoose {
    constructor(userAction) {
        this.userAction = userAction
    }
}

class comChoose {
    constructor() {
        this.comAction()
    }
    comAction() {
        let comPick = Math.floor(Math.random() * 3)
        if (comPick === 1) {
            this.comMove = "batu"
        }else if (comPick === 2) {
            this.comMove = "kertas"
        }else {
            this.comMove = "gunting"
        }
    }
}

class GameLogic {
    constructor(userAction,comPick) {
    this.userAction = userAction
    this.comPick = comPick
    }

    logicGame() {
        if (this.userAction == 'batu') {
            userHandrock()
        } else if (this.userAction == 'kertas'){
            userHandpaper()
        } else {
            userHandscissor()
        }
        if(this.userAction === this.comPick){
            draw(this.userAction, this.comPick)
        // console.log("draw")
        } else if(this.userAction === 'batu' && this.comPick === 'gunting'){
            win(this.userAction, this.comPick)
        // console.log("win")
        } else if(this.userAction === 'kertas' && this.comPick === 'batu'){
            win(this.userAction, this.comPick)
        // console.log("win")
        } else if(this.userAction === 'gunting' && this.comPick === 'kertas'){
            win(this.userAction, this.comPick)
        // console.log("win")
        } else if(this.userAction === 'batu' && this.comPick === 'kertas'){
            lose(this.userAction, this.comPick)
        // console.log("lose")
        } else if(this.userAction === 'kertas' && this.comPick === 'gunting'){
            lose(this.userAction, this.comPick)
        // console.log("lose")
        } else {
            lose(this.userAction, this.comPick)
        // console.log("lose")
        }
        if (this.comPick == 'batu') {
            comHandrock()
        } else if (this.comPick == 'kertas'){
            comHandpaper()
        } else {
            comHandscissor()
        }
    }
}

function game(userAction){
    let player = new UserChoose(userAction)
    let computer = new comChoose()
    let gabungan = new GameLogic(player.userAction, computer.comMove)
    // console.log(player)
    // console.log(computer)
    // console.log(gabungan)
    gabungan.logicGame()
}

// Hasil Permainan
function win(userAction, comPick){
    // console.log("PLAYER 1 WIN")
    // console.log(user)
    // console.log(computer)
    hasilGame.innerHTML = "PLAYER 1 WIN"
    hasilGame.style.padding = "20px"
    hasilGame.style.fontSize = "55px"
    hasilGame.style.backgroundColor = "#4C9654"
    hasilGame.style.transform = "rotate(-12deg)"
    hasilGame.style.color = "black"
}
function lose(userAction, comPick){
    // console.log("COMPUTER WIN")
    hasilGame.innerHTML = "COMPUTER WIN"
    hasilGame.style.padding = "20px"
    hasilGame.style.fontSize = "55px"
    hasilGame.style.backgroundColor = "#720000"
    hasilGame.style.transform = "rotate(-12deg)"
    hasilGame.style.color = "black"
}
function draw(userAction, comPick){
    // console.log("Draw")
    hasilGame.innerHTML = "DRAW"
    hasilGame.style.padding = "20px"
    hasilGame.style.fontSize = "55px"
    hasilGame.style.backgroundColor = "#e6e600"
    hasilGame.style.transform = "rotate(-12deg)"
    hasilGame.style.color = "black"
}

// hasil style
function userHandrock() {
    rockDiv.classList.add("scale-batu")
    paperDiv.classList.add("scale-down-kertas")
    scissorDiv.classList.add("scale-down-gunting")
    // paperDiv.removeAttribute("onclick")
    // scissorDiv.removeAttribute("onclick")
}
function userHandpaper() {
    rockDiv.classList.add("scale-down-batu")
    paperDiv.classList.add("scale-kertas")
    scissorDiv.classList.add("scale-down-gunting")
    // rockDiv.removeAttribute("onclick")
    // scissorDiv.removeAttribute("onclick")
}
function userHandscissor() {
    rockDiv.classList.add("scale-down-batu")
    paperDiv.classList.add("scale-down-kertas")
    scissorDiv.classList.add("scale-gunting")
    // rockDiv.removeAttribute("onclick")
    // paperDiv.removeAttribute("onclick")
}
function comHandrock() {
    comRockDiv.classList.add("scale-batu-com")
    comPaperDiv.classList.add("scale-down-kertas-com")
    comScissorDiv.classList.add("scale-down-gunting-com")
}
function comHandpaper() {
    comRockDiv.classList.add("scale-down-batu-com")
    comPaperDiv.classList.add("scale-kertas-com")
    comScissorDiv.classList.add("scale-down-gunting-com")
}
function comHandscissor() {
    comRockDiv.classList.add("scale-down-batu-com")
    comPaperDiv.classList.add("scale-down-kertas-com")
    comScissorDiv.classList.add("scale-gunting-com")
}

// Using Function And Success
// const hasilGame = document.querySelector(".versus > p")
// const rockDiv = document.getElementById("rock")
// const paperDiv = document.getElementById("paper")
// const scissorDiv = document.getElementById("scissor")
// const comRockDiv = document.getElementById("rock-com")
// const comPaperDiv = document.getElementById("paper-com")
// const comScissorDiv = document.getElementById("scissor-com")

// // Pilihan Komputer
// const selections = ['batu', 'kertas', 'gunting']
// function getpilihancomputer() {
//     const comp = Math.floor(Math.random() * selections.length)
//     if( comp === 1) return 'batu'
//     if( comp === 2 ) return 'kertas'
//     return 'gunting'  
// }

// // Hasil Permainan
// function win(userPick, computerPick){
//     // console.log("PLAYER 1 WIN")
//     // console.log(user)
//     // console.log(computer)
//     hasilGame.innerHTML = "PLAYER 1 WIN"
//     hasilGame.style.padding = "20px"
//     hasilGame.style.fontSize = "55px"
//     hasilGame.style.backgroundColor = "#4C9654"
//     hasilGame.style.transform = "rotate(-12deg)"
//     hasilGame.style.color = "black"
// }
// function lose(userPick, computerPick){
//     // console.log("COMPUTER WIN")
//     hasilGame.innerHTML = "COMPUTER WIN"
//     hasilGame.style.padding = "20px"
//     hasilGame.style.fontSize = "55px"
//     hasilGame.style.backgroundColor = "#720000"
//     hasilGame.style.transform = "rotate(-12deg)"
//     hasilGame.style.color = "black"
// }
// function draw(userPick, commputerPick){
//     // console.log("Draw")
//     hasilGame.innerHTML = "DRAW"
//     hasilGame.style.padding = "20px"
//     hasilGame.style.fontSize = "55px"
//     hasilGame.style.backgroundColor = "#e6e600"
//     hasilGame.style.transform = "rotate(-12deg)"
//     hasilGame.style.color = "black"
// }

// // logika Permainan
// function game(userPick) {
//     if (userPick == 'batu') {
//         userHandrock()
//     } else if (userPick == 'kertas'){
//         userHandpaper()
//     } else {
//         userHandscissor()
//     }
//     const computerPick = getpilihancomputer()
//     console.log(computerPick)
//     switch (userPick + computerPick) {
//         case "batugunting":
//         case "kertasbatu" :
//         case "guntingkertas":
//             win(userPick, computerPick)
//             break
//         case "batukertas":
//         case "kertasgunting":
//         case "guntingbatu":
//             lose(userPick, computerPick)
//             break
//         case "batubatu":
//         case "kertaskertas":
//         case "guntinggunting":
//             draw(userPick, computerPick)
//             break
//     }
//      if (computerPick == 'batu') {
//         comHandrock()
//     } else if (computerPick == 'kertas'){
//         comHandpaper()
//     } else {
//         comHandscissor()
//     }
// }

// // hasil style
// function userHandrock() {
//     rockDiv.classList.add("scale-batu")
//     paperDiv.classList.add("scale-down-kertas")
//     scissorDiv.classList.add("scale-down-gunting")
//     // paperDiv.removeAttribute("onclick")
//     // scissorDiv.removeAttribute("onclick")
// }
// function userHandpaper() {
//     rockDiv.classList.add("scale-down-batu")
//     paperDiv.classList.add("scale-kertas")
//     scissorDiv.classList.add("scale-down-gunting")
//     // rockDiv.removeAttribute("onclick")
//     // scissorDiv.removeAttribute("onclick")
// }
// function userHandscissor() {
//     rockDiv.classList.add("scale-down-batu")
//     paperDiv.classList.add("scale-down-kertas")
//     scissorDiv.classList.add("scale-gunting")
//     // rockDiv.removeAttribute("onclick")
//     // paperDiv.removeAttribute("onclick")
// }
// function comHandrock() {
//     comRockDiv.classList.add("scale-batu-com")
//     comPaperDiv.classList.add("scale-down-kertas-com")
//     comScissorDiv.classList.add("scale-down-gunting-com")
// }
// function comHandpaper() {
//     comRockDiv.classList.add("scale-down-batu-com")
//     comPaperDiv.classList.add("scale-kertas-com")
//     comScissorDiv.classList.add("scale-down-gunting-com")
// }
// function comHandscissor() {
//     comRockDiv.classList.add("scale-down-batu-com")
//     comPaperDiv.classList.add("scale-down-kertas-com")
//     comScissorDiv.classList.add("scale-gunting-com")
// }