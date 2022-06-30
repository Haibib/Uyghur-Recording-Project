var selectors = document.getElementsByClassName("form-check-input");
var hyphen = document.getElementById("hyphen-container");
var gloss = document.getElementById("gloss-container");
var eng = document.getElementById("english-transcript-container");
var hyphenOn= false;
var glossOn= false;
var engOn= false;
selectors[0].addEventListener('click', function(){
    hyphenOn=change(hyphen, hyphenOn);
});
selectors[1].addEventListener('click', function(){
    glossOn=change(gloss, glossOn);
});
selectors[2].addEventListener('click', function(){
    engOn=change(eng, engOn);
});

function change(cur, bol){
    if (bol){
        cur.style.display = 'none';
        return false;
    }
    else{
        cur.style.display = 'block';
        return true;
    }
}

