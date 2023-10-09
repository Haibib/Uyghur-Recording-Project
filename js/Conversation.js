import(/* webpackChunkName: "od-survey" */ "./ol_od_survey.js").then(_ => selectors[0].current.click());
function loadXMLDoc() { 
    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.onreadystatechange = function () { 

        // Request finished and response  
        // is ready and Status is "OK" 
        if (this.readyState == 4 && this.status == 200) { 
            empDetails(this); 
        } 
    }; 

    let title = document.getElementById("title").innerText;
    title = "xml/" + title.replace(/\s/g, '') + ".xml";
    console.log(title);
    xmlhttp.open("GET", title, true); 
    xmlhttp.send(); 
} 

function empDetails(xml) { 
    var xmlDoc = xml.responseXML; 
    var annotation = xmlDoc.getElementsByTagName("annotation");
    var table = '';
    for(let i = 1; i < annotation.length; i++){
        table += `<div class = "annotations"> `;
        let timestamp = annotation[i].getElementsByTagName("timestamp")[0].innerHTML;
        let iu = annotation[i].getElementsByTagName("iu")[0].innerHTML;
        let seg = annotation[i].getElementsByTagName("seg")[0].innerHTML;
        let gloss = annotation[i].getElementsByTagName("gloss")[0].innerHTML;
        let eng = annotation[i].getElementsByTagName("eng")[0].innerHTML;
        table += '<div class = "speaker subheader">'  + annotation[i].getAttribute("who") + '</div>';
        table += '<div class = "timestamp transcriptElement"><span class="elementTitle">Timestamp</span>' + timestamp + '</div>';
        table += '<div class = "iu transcriptElement"><span class="elementTitle">IU</span>' + iu + '</div>';
        table += '<div class = "seg transcriptElement"><span class="elementTitle">Segment</span>' + seg + '</div>';
        table += '<div class = "gloss transcriptElement"><span class="elementTitle">Glossary</span>' + gloss + '</div>';
        table += '<div class = "eng transcriptElement"><span class="elementTitle">English</span>' + eng + '</div>';
        table += '</div>'
    }
    document.getElementById("table").innerHTML = table;       
}




document.addEventListener('DOMContentLoaded', function() {
    let conversationHeader = '<head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Uyghur Recording Project</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"><link rel="stylesheet" href="css/bootstrap-theme.css"><link rel="stylesheet" href="css/styles.css"><link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" rel="stylesheet"><script src = "js/jquery-2.1.4.min.js"></script></head><body><header><nav id="nav" class="navbar navbar-expand-sm navbar-light"><div id="nav-container" class="container"><a id="brand" class="navbar-brand align-middle" href="English-Home.html">Uyghur Recording Project</a><ul id="tot-dropdown"class="nav navbar-nav navbar-right"><svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#fff" d="M31.33,23.48a7.06,7.06,0,0,0-4.79,1.87A1.48,1.48,0,0,0,25.6,25s0,0,0,0a8.13,8.13,0,0,1-3.11-.59,12.28,12.28,0,0,0,2.48-6.3h.66a1.5,1.5,0,0,0,0-3H21.34V12.78a1.5,1.5,0,1,0-3,0v2.34H14.08a1.5,1.5,0,0,0,0,3h7.84A9,9,0,0,1,20,22.67a9.32,9.32,0,0,1-1.76-2.93,1.5,1.5,0,1,0-2.82,1,12.38,12.38,0,0,0,2.11,3.63,9.28,9.28,0,0,1-3.42.6h0a1.5,1.5,0,1,0,0,3h0A11.3,11.3,0,0,0,20,26.54,10.42,10.42,0,0,0,24.71,28a7,7,0,0,0-.51,2.63v1.12H13.77a1.5,1.5,0,0,0-1.14.52,1.47,1.47,0,0,0-.34,1.21c0,.1.19,1.23.53,2.82a1,1,0,0,1-1.57,1C8.1,35,4.74,32.2,3.69,30.23A1.82,1.82,0,0,0,3.54,30a4.07,4.07,0,0,1-.74-2.35V11.52A4.13,4.13,0,0,1,6.93,7.39H32.67a4.13,4.13,0,0,1,4.13,4.13v12ZM61.2,30.61V46.7a4,4,0,0,1-.74,2.35,1.17,1.17,0,0,0-.15.27c-1,2-4.41,4.77-7.56,7.09a1,1,0,0,1-1.57-1c.34-1.6.52-2.73.53-2.83a1.49,1.49,0,0,0-1.48-1.73H31.33A4.13,4.13,0,0,1,27.2,46.7V30.61a4.13,4.13,0,0,1,4.13-4.13H57.07A4.13,4.13,0,0,1,61.2,30.61Zm-10.42,14L49.05,40.3l-3.42-8.56h0a1.3,1.3,0,0,0-.08-.17l-.06-.1-.09-.12-.09-.1-.1-.09-.13-.1L45,31l-.16-.09h0a.38.38,0,0,0-.1,0l-.16-.05-.15,0h-.3l-.13,0-.17.05a.38.38,0,0,0-.1,0h0l-.15.09-.11.05-.12.1-.1.09-.09.1-.1.12s0,.07-.05.1l-.09.17h0L39.42,40.3l-1.73,4.32a1.51,1.51,0,0,0,.84,2,1.55,1.55,0,0,0,.56.11,1.51,1.51,0,0,0,1.39-1l1.34-3.35h4.84L48,45.73a1.49,1.49,0,0,0,1.39,1,1.54,1.54,0,0,0,.55-.11A1.5,1.5,0,0,0,50.78,44.62ZM43,39.38h2.44l-1.22-3Z"/></svg><button id="dropdown"type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20"> Language </button><ul id="drop-menu" class="dropdown-menu" aria-labelledby="dropdownMenuOffset"><li><a class="dropdown-item" href="English-Home.html">English</a></li><li><a class="dropdown-item" href="#">Uyghur</a></li><li><hr class="dropdown-divider"></li><li><a class="dropdown-item" href="#">Coming Soon</a></li></ul></ul></div></div></nav></header>';
    let html = document.querySelector("html");
    html.innerHTML = conversationHeader + html.innerHTML;

    let conversationFooter = '<div class="container"> <div class="row"> <section id="volunteer" class="col-md-4"> <span>Volunteer:</span><br> Sign consent form<br> Record conversation<br> Contact Michael Fiddler <hr class="visible-xs text-center"> </section> <section id="contact" class="col-md-4"> <span>Contact:</span><br> Email - Example@gmail.com<br> Phone - (123)-456-789 <p>* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque luctus scelerisque.</p> <hr class="visible-xs text-center"> </section> <section id="random" class="col-md-4"> <p>"Great research material to linguists worldwide"</p> <p>"Helping to perserve the Uyghur language"</p> </section> </div> <div class="text-center">© Copyright Michael Fiddler 2022</div> </div>';
    let footer = document.querySelector("footer");
    if(footer.innerHTML === ""){
        footer.innerHTML = conversationFooter;
    }
    
    loadXMLDoc();
    var selectors = document.getElementsByClassName("form-check-input");
var timestamp = document.getElementsByClassName("timestamp");
var iu = document.getElementsByClassName("iu");
var seg = document.getElementsByClassName("seg");
var gloss = document.getElementsByClassName("gloss");
var eng = document.getElementsByClassName("eng");
    selectors[0].addEventListener('click', function(){
        change(timestamp);
    });
    selectors[1].addEventListener('click', function(){
        change(iu);
    });
    selectors[2].addEventListener('click', function(){
        change(seg);
    });
    selectors[3].addEventListener('click', function(){
        change(gloss);
    });
    selectors[4].addEventListener('click', function(){
        change(eng);
    });
    change(timestamp);
});

function change(cur){
  for(let i=0; i<cur.length; i++){
    if (cur[i].style.display === 'none'){
        cur[i].style.display = 'flex';
    }
    else{
        cur[i].style.display = 'none';
    }
  }
}