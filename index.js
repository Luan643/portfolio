let display = true

const menus = {
    menu1: false,
    menu2: false
}

function displayMenu(index) {
    menus[index] = !menus[index]
    const isOpen = menus[index]
    const menu = document.querySelector(`[menu-ref=${index}]`)
    menu.setAttribute('class', isOpen? 'submenu': 'submenu hidden')
}

/* let display = true
let menu 

function displayMenu(param) {
    menu = document.querySelector(param)
    if(display == true){
        displayMenuBlock()
    } else if(display == false) {
        displayMenuNone()  
    }

    console.log(display)
}

let displayMenuBlock = function a(){
    menu.style.display = "block"     
    display = !display

    console.log("1")
}

let displayMenuNone = function b(){
    menu.style.display = "none"
    display = !display
    
    console.log("2")
} */