let cats = [ 'Milo', 'Otis', 'Garfield' ];

function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    return [...cats, "Broom"];
}
function prependCat(name){
    return ["Arnold",...cats];
}
function removeLastCat(){
    return cats.slice(0,2);
}

function removeFirstCat(){
    return cats.slice(1);
}
