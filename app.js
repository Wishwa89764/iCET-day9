
let num = Math.random()*11;
let x,y;
let round=0;

function guest_click(){
    y=Number(Math.floor(Math.random()*11));
    x=Number(document.getElementById("text").value);
    console.log(typeof x);
    round++;
    if(round<3){
        if(x==y){
            alert(y+" You WIN");
        }else{
            alert(y+" You Loss.. Please Try again");
            document.getElementById("text").value="";
        }
    }else{
        if(x==y){
            alert(y+" You WIN");
        }else{
            alert(y+"  You Loss...\nGame Over")
            document.getElementById("text").value="";
        }
        
    }
    
}
