const body = document.querySelector("body"),
    title = body.querySelector("h1");
const HEX_CODE = "HEX COLOR: ";

function generateRandom(){
    const number = Math.floor(Math.random() * 16);
    
    if (number === 10){
        return "A";
    } else if (number === 11){
        return "B";
    } else if (number === 12){
        return "C";
    } else if (number === 13){
        return "D";
    } else if (number === 14){
        return "E";
    } else if (number === 15){
        return "F";
    } else {
        return number;
    }
}

function change(){
    const createdCode = `#${generateRandom()}${generateRandom()}${generateRandom()}${generateRandom()}${generateRandom()}${generateRandom()}`;
    paintColor(HEX_CODE, createdCode)
}

function paintColor(name, color){    
    title.innerText = `${name}${color}`;
	body.style.backgroundColor = color;
}


function handleClick(){
    generateRandom();
    change();
}


function init(){
    generateRandom();
    change();
    title.addEventListener("click", handleClick);
}

init();