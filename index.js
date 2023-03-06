
let display = true
let menu1 = document.querySelector("div.opcaoMenu1")

function displayMenu() {
    
    if(display == true){
        displayMenuBlock()
    } else if(display == false) {
        bdisplayMenuNone()  
    }
    console.log(display)
}

let displayMenuBlock = function a(){
    menu1.style.display = "block"     
    console.log("1")
    display = !display
}

let bdisplayMenuNone = function b(){
    menu1.style.display = "none"
    console.log("2")
    display = !display
    
}
console.log(menu1)
