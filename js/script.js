document.getElementById("cards").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}
var selectors = document.getElementsByClassName("form-check-input");
var hyphen = document.getElementsByClassName("hyphen-container");
var gloss = document.getElementsByClassName("gloss-container");
var eng = document.getElementsByClassName("english-transcript-container");
var time = document.getElementsByClassName("ti-time");
selectors[0].addEventListener('click', function(){
    change(hyphen);
});
selectors[1].addEventListener('click', function(){
    change(gloss);
});
selectors[2].addEventListener('click', function(){
    change(eng);
});
selectors[3].addEventListener('click', function(){
    change(time);
});

function change(cur){
  for(let i=0; i<cur.length; i++){
    if (cur[i].style.display === "table-row"){
        cur[i].style.display = 'none';
    }
    else{
        cur[i].style.display = 'table-row';
    }
  }
}
