
let num = Math.random()*11;
let x,y;

function guest_click(){
    y=Number(Math.floor(Math.random()*11));
    x=Number(document.getElementById("text").value);
    console.log(typeof x);
    if(x==0){
        alert(y+"You WIN");
    }else{
        alert(y+"wrone");
    }
    
}
