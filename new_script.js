// function to change tabs onclick 
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// function to make navbar responsive
function respondNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// function for clock
function currentTime() {
    // create date object
    let date = new Date(); 

    // store h m s values
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // default session
    let session = "AM";

    // store date month and year
    let d = date.getDate();
    let mo = date.getMonth() + 1;
    let y = date.getFullYear();

    // refine date and month
    d = (d < 10) ? "0" + d : d;
    mo = (mo < 10) ? "0" + mo : mo;
    
    // combine date month year
    dd = d + "/" + mo + "/" + y
  
    // change session if required
    if((hh >= 12) && (mm > 0)){
        session = "PM";
    }

    // refine h m s
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    
    // final date time string
    let time = dd + " " + hh + ":" + mm + ":" + ss + " " + session;

    // throw string to html
    document.getElementById("clock").innerText = time; 

    // refresh every 1000ms
    let t = setTimeout(function(){ currentTime() }, 1000);  
}

window.onload = () => {currentTime();}