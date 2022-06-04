const dec = document.getElementById("decrease");
const res = document.getElementById("reset");
const inc = document.getElementById("increase");

const val = document.querySelector(".value");

var counter = 0;

inc.addEventListener('click', function(){
    counter++;
    if(counter > 0){
        val.style.color = "green";
    } else if(counter == 0){
        val.style.color = "white";
    }
    val.textContent = counter;
})

res.addEventListener('click', function(){
    counter = 0;
    val.textContent = counter;
    val.style.color = "white";
})

dec.addEventListener('click', function(){
    counter--;
    if(counter < 0){
        val.style.color = "red";
    } else if(counter == 0){
        val.style.color = "white";
    }
    val.textContent = counter;

})

