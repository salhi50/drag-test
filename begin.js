// variables

let home = document.getElementById("home");
let info = document.getElementById("infop");
let you = document.getElementById("infos");
let loading = document.getElementById("loading");
let start = document.getElementById("start");
let btns = document.getElementById("btns");
let avatar = document.getElementById("avatar");
let kill = document.getElementById("bottom");
let foot = document.getElementById("foot");



let khtar = document.getElementById("khtar");
let end = document.getElementById("end");
let how = document.getElementById("how");
let faq = document.getElementById("faq");

let head = document.getElementById("head");
let main = document.getElementById("main");
let sect = document.getElementById("section");
let nav = document.getElementById("nav");
let lista = document.getElementById("lista");
let aside = document.getElementById("side");
let art = document.getElementById("art");

let hide = document.getElementById("close");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let gender = document.getElementById("gender");

let city = document.getElementById("city");
let desc = document.getElementById("desc");
let country = document.getElementById("country");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let prenom = document.getElementById("first-name");
let nom = document.getElementById("last-name");
let full = document.getElementById("full");
let hy = document.getElementById("hy");


let age = document.getElementById("age");
let next = document.getElementById("next");
let nex = document.getElementById("nex");
let ne = document.getElementById("ne");
let input = document.querySelector("input.input");

let showp = document.getElementById("showp");
let hidep = document.getElementById("hidep");
let pass = document.getElementById("password");
let load = document.getElementById("loader");
let rq = document.getElementById("rq");

// borders

// row 1

let borderA = document.querySelector(".borderA");
let borderB = document.querySelector(".borderB");
let borderC = document.querySelector(".borderC");
let borderD = document.querySelector(".borderD");

// row 2

let borderE = document.querySelector(".borderE");
let borderF = document.querySelector(".borderF");
let borderG = document.querySelector(".borderG");
let borderH = document.querySelector(".borderH");

// row 3

let borderI = document.querySelector(".borderI");
let borderJ = document.querySelector(".borderJ");
let borderK = document.querySelector(".borderK");
let borderL = document.querySelector(".borderL");

// row 4

let borderM = document.querySelector(".borderM");
let borderN = document.querySelector(".borderN");
let borderO = document.querySelector(".borderO");
let borderP = document.querySelector(".borderP");

// span variables

let fn = document.getElementById("fn");
let ln = document.getElementById("ln");
let g = document.getElementById("g");
let a = document.getElementById("a");

let e = document.getElementById("e");
let pn = document.getElementById("pn");
let c = document.getElementById("c");
let ci = document.getElementById("ci");

let d = document.getElementById("d");


// ##########

// aside


hide.onclick = () => {
    aside.style.display = 'none';
    four.style.display = 'none';
    hy.style.display = 'block';
    aside.style.height = 'auto';
    how.style.display = 'block';
    faq.style.display = 'block';
    foot.style.display = 'block';
    kill.style.display = 'block';
    head.style.display = 'block';
    main.style.display = 'block';
    sect.style.display = 'flex';
    art.style.display = 'block';
}

// ##########

// start next

next.onclick = () =>{
    one.style.display = 'none';
    two.style.animation = 'fade .4s 1';
    two.style.animationDelay = '.1s';
    two.style.animationFillMode = 'forwards';
}

nex.onclick = () =>{
    one.style.display = 'none';
    aside.style.height = 'auto';
    two.style.display = 'none';
    three.style.animation = 'fade .4s 1';
    three.style.animationDelay = '.1s';
    three.style.animationFillMode = 'forwards';
}

// ##########

// show hide password

showp.onclick = () =>{
    pass.type = "text";
    showp.style.display = 'none';
    hidep.style.display = 'inline';
}

hidep.onclick = () =>{
    pass.type = "password";
    hidep.style.display = 'none';
    showp.style.display = 'inline';
}

// ##########

// last side

ne.onclick = () => {
    aside.style.display = 'block';
    aside.style.height = '88vh';
    three.style.display = 'none';
    load.style.display = 'block';
    rq.style.display = 'none';

    // start values
    fn.innerHTML = prenom.value;
    ln.innerHTML = nom.value;
    g.innerHTML = gender.value;
    a.innerHTML = age.value;

    e.innerHTML = email.value;
    pn.innerHTML = phone.value;
    c.innerHTML = country.value;
    ci.innerHTML = city.value;

    d.innerHTML = desc.value;
    full.innerHTML = `${prenom.value} ${nom.value}`


    timeOut = setTimeout(done,5000);
}

// loader


function done(){
    load.style.display = 'none';
    four.style.display = 'block';
}


// #########

// start informations

info.onclick = () => {
    loading.style.display = 'block';
    head.style.display = 'none';
    btns.style.display = 'none';
    info.style.background = '#105593';
    info.style.color = 'white';
    home.style.background = 'white';
    info.style.display = 'none';
    home.style.color = '#105593';
    home.style.flexBasis = '33.33%'
    document.querySelector("li.rate").style.flexBasis = '33.33%'
    document.querySelector("li.apps").style.flexBasis = '33.33%'
    lool = setTimeout(showMe,3000);
    
    main.style.display = 'none';
    sect.style.display = 'none';
    how.style.display = 'none';
    faq.style.display = 'none';
    foot.style.display = 'none';
    art.style.display = 'none';
}
lista.onclick = () => {
    main.style.display = 'none';
    how.style.display = 'none';
    faq.style.display = 'none';
    aside.style.display = 'block';
    sect.style.display = 'none';
    kill.style.display = 'none';
    head.style.display = 'none';
    foot.style.display = 'none';
}

function showMe(){
    loading.style.display = 'none';
    start.style.display = 'block';
    btns.style.display = 'block';
}

borderA.onclick = () =>{
    borderA.style.border = '2px solid #0f8cfa';
    borderA.style.boxShadow = 'rgba(15, 140, 250,.50) 0px 5px 15px';
    
    // box shadows
    borderB.style.boxShadow = 'none';
    borderC.style.boxShadow = 'none';
    borderD.style.boxShadow = 'none';
    borderE.style.boxShadow = 'none';
    borderF.style.boxShadow = 'none';
    borderG.style.boxShadow = 'none';
    borderH.style.boxShadow = 'none';
    borderI.style.boxShadow = 'none';
    borderJ.style.boxShadow = 'none';
    borderK.style.boxShadow = 'none';
    borderL.style.boxShadow = 'none';
    borderM.style.boxShadow = 'none';
    borderN.style.boxShadow = 'none';
    borderO.style.boxShadow = 'none';
    borderP.style.boxShadow = 'none';
    
    

    // borders

    borderB.style.border = "0"
    borderC.style.border = "0"
    borderD.style.border = "0"
    borderE.style.border = "0"
    borderF.style.border = "0"
    borderG.style.border = "0"
    borderH.style.border = "0"
    borderI.style.border = "0"
    borderJ.style.border = "0"
    borderK.style.border = "0"
    borderL.style.border = "0"
    borderM.style.border = "0"
    borderN.style.border = "0"
    borderO.style.border = "0"
    borderP.style.border = "0"

    // image

    avatar.setAttribute("src", "images/gogu.png")
}
borderB.onclick = () =>{
    borderB.style.border = '2px solid #0f8cfa';
    borderB.style.boxShadow = 'rgba(15, 140, 250,.50) 0px 5px 15px';
    
    avatar.setAttribute("src", "images/loffy.jpg")

    // box shadows
    borderA.style.boxShadow = 'none';
    borderC.style.boxShadow = 'none';
    borderD.style.boxShadow = 'none';
    borderE.style.boxShadow = 'none';
    borderF.style.boxShadow = 'none';
    borderG.style.boxShadow = 'none';
    borderH.style.boxShadow = 'none';
    borderI.style.boxShadow = 'none';
    borderJ.style.boxShadow = 'none';
    borderK.style.boxShadow = 'none';
    borderL.style.boxShadow = 'none';
    borderM.style.boxShadow = 'none';
    borderN.style.boxShadow = 'none';
    borderO.style.boxShadow = 'none';
    borderP.style.boxShadow = 'none';
    
    

    // borders

    borderA.style.border = "0"
    borderC.style.border = "0"
    borderD.style.border = "0"
    borderE.style.border = "0"
    borderF.style.border = "0"
    borderG.style.border = "0"
    borderH.style.border = "0"
    borderI.style.border = "0"
    borderJ.style.border = "0"
    borderK.style.border = "0"
    borderL.style.border = "0"
    borderM.style.border = "0"
    borderN.style.border = "0"
    borderO.style.border = "0"
    borderP.style.border = "0"
}
borderC.onclick = () =>{
    borderC.style.border = '2px solid #0f8cfa';
    borderC.style.boxShadow = 'rgba(15, 140, 250,.50) 0px 5px 15px';
    
    avatar.setAttribute("src", "images/dark.jpg")

    // box shadows
    borderB.style.boxShadow = 'none';
    borderA.style.boxShadow = 'none';
    borderD.style.boxShadow = 'none';
    borderE.style.boxShadow = 'none';
    borderF.style.boxShadow = 'none';
    borderG.style.boxShadow = 'none';
    borderH.style.boxShadow = 'none';
    borderI.style.boxShadow = 'none';
    borderJ.style.boxShadow = 'none';
    borderK.style.boxShadow = 'none';
    borderL.style.boxShadow = 'none';
    borderM.style.boxShadow = 'none';
    borderN.style.boxShadow = 'none';
    borderO.style.boxShadow = 'none';
    borderP.style.boxShadow = 'none';
    
    

    // borders

    borderB.style.border = "0"
    borderA.style.border = "0"
    borderD.style.border = "0"
    borderE.style.border = "0"
    borderF.style.border = "0"
    borderG.style.border = "0"
    borderH.style.border = "0"
    borderI.style.border = "0"
    borderJ.style.border = "0"
    borderK.style.border = "0"
    borderL.style.border = "0"
    borderM.style.border = "0"
    borderN.style.border = "0"
    borderO.style.border = "0"
    borderP.style.border = "0"
}
borderD.onclick = () =>{
    borderD.style.border = '2px solid #0f8cfa';
    borderD.style.boxShadow = 'rgba(15, 140, 250,.50) 0px 5px 15px';
    
    avatar.setAttribute("src", "images/girl.jpg")

    // box shadows
    borderB.style.boxShadow = 'none';
    borderC.style.boxShadow = 'none';
    borderA.style.boxShadow = 'none';
    borderE.style.boxShadow = 'none';
    borderF.style.boxShadow = 'none';
    borderG.style.boxShadow = 'none';
    borderH.style.boxShadow = 'none';
    borderI.style.boxShadow = 'none';
    borderJ.style.boxShadow = 'none';
    borderK.style.boxShadow = 'none';
    borderL.style.boxShadow = 'none';
    borderM.style.boxShadow = 'none';
    borderN.style.boxShadow = 'none';
    borderO.style.boxShadow = 'none';
    borderP.style.boxShadow = 'none';
    
    

    // borders

    borderB.style.border = "0"
    borderC.style.border = "0"
    borderA.style.border = "0"
    borderE.style.border = "0"
    borderF.style.border = "0"
    borderG.style.border = "0"
    borderH.style.border = "0"
    borderI.style.border = "0"
    borderJ.style.border = "0"
    borderK.style.border = "0"
    borderL.style.border = "0"
    borderM.style.border = "0"
    borderN.style.border = "0"
    borderO.style.border = "0"
    borderP.style.border = "0"
}
borderE.onclick = () =>{
    borderE.style.border = '2px solid #0f8cfa';
    borderE.style.boxShadow = 'rgba(15, 140, 250,.50) 0px 5px 15px';
    
    avatar.setAttribute("src", "images/yahiko.jpg")

    // box shadows
    borderB.style.boxShadow = 'none';
    borderC.style.boxShadow = 'none';
    borderD.style.boxShadow = 'none';
    borderA.style.boxShadow = 'none';
    borderF.style.boxShadow = 'none';
    borderG.style.boxShadow = 'none';
    borderH.style.boxShadow = 'none';
    borderI.style.boxShadow = 'none';
    borderJ.style.boxShadow = 'none';
    borderK.style.boxShadow = 'none';
    borderL.style.boxShadow = 'none';
    borderM.style.boxShadow = 'none';
    borderN.style.boxShadow = 'none';
    borderO.style.boxShadow = 'none';
    borderP.style.boxShadow = 'none';
    
    

    // borders

    borderB.style.border = "0"
    borderC.style.border = "0"
    borderD.style.border = "0"
    borderA.style.border = "0"
    borderF.style.border = "0"
    borderG.style.border = "0"
    borderH.style.border = "0"
    borderI.style.border = "0"
    borderJ.style.border = "0"
    borderK.style.border = "0"
    borderL.style.border = "0"
    borderM.style.border = "0"
    borderN.style.border = "0"
    borderO.style.border = "0"
    borderP.style.border = "0"
}
borderF.onclick = () =>{
    borderF.style.border = '2px solid #0f8cfa';
    borderF.style.boxShadow = 'rgba(15, 140, 250,.50) 0px 5px 15px';
    avatar.setAttribute("src", "images/madara.jpg")
    
    // box shadows
    borderB.style.boxShadow = 'none';
    borderC.style.boxShadow = 'none';
    borderD.style.boxShadow = 'none';
    borderE.style.boxShadow = 'none';
    borderA.style.boxShadow = 'none';
    borderG.style.boxShadow = 'none';
    borderH.style.boxShadow = 'none';
    borderI.style.boxShadow = 'none';
    borderJ.style.boxShadow = 'none';
    borderK.style.boxShadow = 'none';
    borderL.style.boxShadow = 'none';
    borderM.style.boxShadow = 'none';
    borderN.style.boxShadow = 'none';
    borderO.style.boxShadow = 'none';
    borderP.style.boxShadow = 'none';
    
    

    // borders

    borderB.style.border = "0"
    borderC.style.border = "0"
    borderD.style.border = "0"
    borderE.style.border = "0"
    borderA.style.border = "0"
    borderG.style.border = "0"
    borderH.style.border = "0"
    borderI.style.border = "0"
    borderJ.style.border = "0"
    borderK.style.border = "0"
    borderL.style.border = "0"
    borderM.style.border = "0"
    borderN.style.border = "0"
    borderO.style.border = "0"
    borderP.style.border = "0"
}
borderG.onclick = () =>{
    borderG.style.border = '2px solid #0f8cfa';
    borderG.style.boxShadow = 'rgba(15, 140, 250,.50) 0px 5px 15px';
    avatar.setAttribute("src", "images/sakura.png")
    
    // box shadows
    borderB.style.boxShadow = 'none';
    borderC.style.boxShadow = 'none';
    borderD.style.boxShadow = 'none';
    borderE.style.boxShadow = 'none';
    borderF.style.boxShadow = 'none';
    borderA.style.boxShadow = 'none';
    borderH.style.boxShadow = 'none';
    borderI.style.boxShadow = 'none';
    borderJ.style.boxShadow = 'none';
    borderK.style.boxShadow = 'none';
    borderL.style.boxShadow = 'none';
    borderM.style.boxShadow = 'none';
    borderN.style.boxShadow = 'none';
    borderO.style.boxShadow = 'none';
    borderP.style.boxShadow = 'none';
    
    

    // borders

    borderB.style.border = "0"
    borderC.style.border = "0"
    borderD.style.border = "0"
    borderE.style.border = "0"
    borderF.style.border = "0"
    borderA.style.border = "0"
    borderH.style.border = "0"
    borderI.style.border = "0"
    borderJ.style.border = "0"
    borderK.style.border = "0"
    borderL.style.border = "0"
    borderM.style.border = "0"
    borderN.style.border = "0"
    borderO.style.border = "0"
    borderP.style.border = "0"
}
borderH.onclick = () =>{
    borderH.style.border = '2px solid #0f8cfa';
    borderH.style.boxShadow = 'rgba(15, 140, 250,.50) 0px 5px 15px';
    avatar.setAttribute("src", "images/itachi.jpg")
    
    // box shadows
    borderB.style.boxShadow = 'none';
    borderC.style.boxShadow = 'none';
    borderD.style.boxShadow = 'none';
    borderE.style.boxShadow = 'none';
    borderF.style.boxShadow = 'none';
    borderG.style.boxShadow = 'none';
    borderA.style.boxShadow = 'none';
    borderI.style.boxShadow = 'none';
    borderJ.style.boxShadow = 'none';
    borderK.style.boxShadow = 'none';
    borderL.style.boxShadow = 'none';
    borderM.style.boxShadow = 'none';
    borderN.style.boxShadow = 'none';
    borderO.style.boxShadow = 'none';
    borderP.style.boxShadow = 'none';
    
    

    // borders

    borderB.style.border = "0"
    borderC.style.border = "0"
    borderD.style.border = "0"
    borderE.style.border = "0"
    borderF.style.border = "0"
    borderG.style.border = "0"
    borderA.style.border = "0"
    borderI.style.border = "0"
    borderJ.style.border = "0"
    borderK.style.border = "0"
    borderL.style.border = "0"
    borderM.style.border = "0"
    borderN.style.border = "0"
    borderO.style.border = "0"
    borderP.style.border = "0"
}
borderI.onclick = () =>{
    borderI.style.border = '2px solid #0f8cfa';
    borderI.style.boxShadow = 'rgba(15, 140, 250,.50) 0px 5px 15px';
    avatar.setAttribute("src", "images/ino.jpeg")
    
    // box shadows
    borderB.style.boxShadow = 'none';
    borderC.style.boxShadow = 'none';
    borderD.style.boxShadow = 'none';
    borderE.style.boxShadow = 'none';
    borderF.style.boxShadow = 'none';
    borderG.style.boxShadow = 'none';
    borderH.style.boxShadow = 'none';
    borderA.style.boxShadow = 'none';
    borderJ.style.boxShadow = 'none';
    borderK.style.boxShadow = 'none';
    borderL.style.boxShadow = 'none';
    borderM.style.boxShadow = 'none';
    borderN.style.boxShadow = 'none';
    borderO.style.boxShadow = 'none';
    borderP.style.boxShadow = 'none';
    
    

    // borders

    borderB.style.border = "0"
    borderC.style.border = "0"
    borderD.style.border = "0"
    borderE.style.border = "0"
    borderF.style.border = "0"
    borderG.style.border = "0"
    borderH.style.border = "0"
    borderA.style.border = "0"
    borderJ.style.border = "0"
    borderK.style.border = "0"
    borderL.style.border = "0"
    borderM.style.border = "0"
    borderN.style.border = "0"
    borderO.style.border = "0"
    borderP.style.border = "0"
}
borderJ.onclick = () =>{
    borderJ.style.border = '2px solid #0f8cfa';
    borderJ.style.boxShadow = 'rgba(15, 140, 250,.50) 0px 5px 15px';
    avatar.setAttribute("src", "images/saitama.jpg")
    
    // box shadows
    borderB.style.boxShadow = 'none';
    borderC.style.boxShadow = 'none';
    borderD.style.boxShadow = 'none';
    borderE.style.boxShadow = 'none';
    borderF.style.boxShadow = 'none';
    borderG.style.boxShadow = 'none';
    borderH.style.boxShadow = 'none';
    borderI.style.boxShadow = 'none';
    borderA.style.boxShadow = 'none';
    borderK.style.boxShadow = 'none';
    borderL.style.boxShadow = 'none';
    borderM.style.boxShadow = 'none';
    borderN.style.boxShadow = 'none';
    borderO.style.boxShadow = 'none';
    borderP.style.boxShadow = 'none';
    
    

    // borders

    borderB.style.border = "0"
    borderC.style.border = "0"
    borderD.style.border = "0"
    borderE.style.border = "0"
    borderF.style.border = "0"
    borderG.style.border = "0"
    borderH.style.border = "0"
    borderI.style.border = "0"
    borderA.style.border = "0"
    borderK.style.border = "0"
    borderL.style.border = "0"
    borderM.style.border = "0"
    borderN.style.border = "0"
    borderO.style.border = "0"
    borderP.style.border = "0"
}
borderK.onclick = () =>{
    borderK.style.border = '2px solid #0f8cfa';
    borderK.style.boxShadow = 'rgba(15, 140, 250,.50) 0px 5px 15px';
    avatar.setAttribute("src", "images/mido.jpg")
    
    // box shadows
    borderB.style.boxShadow = 'none';
    borderC.style.boxShadow = 'none';
    borderD.style.boxShadow = 'none';
    borderE.style.boxShadow = 'none';
    borderF.style.boxShadow = 'none';
    borderG.style.boxShadow = 'none';
    borderH.style.boxShadow = 'none';
    borderI.style.boxShadow = 'none';
    borderJ.style.boxShadow = 'none';
    borderA.style.boxShadow = 'none';
    borderL.style.boxShadow = 'none';
    borderM.style.boxShadow = 'none';
    borderN.style.boxShadow = 'none';
    borderO.style.boxShadow = 'none';
    borderP.style.boxShadow = 'none';
    
    

    // borders

    borderB.style.border = "0"
    borderC.style.border = "0"
    borderD.style.border = "0"
    borderE.style.border = "0"
    borderF.style.border = "0"
    borderG.style.border = "0"
    borderH.style.border = "0"
    borderI.style.border = "0"
    borderJ.style.border = "0"
    borderA.style.border = "0"
    borderL.style.border = "0"
    borderM.style.border = "0"
    borderN.style.border = "0"
    borderO.style.border = "0"
    borderP.style.border = "0"
}
borderL.onclick = () =>{
    borderL.style.border = '2px solid #0f8cfa';
    borderL.style.boxShadow = 'rgba(15, 140, 250,.50) 0px 5px 15px';
    avatar.setAttribute("src", "images/toky.jpg")
    
    // box shadows
    borderB.style.boxShadow = 'none';
    borderC.style.boxShadow = 'none';
    borderD.style.boxShadow = 'none';
    borderE.style.boxShadow = 'none';
    borderF.style.boxShadow = 'none';
    borderG.style.boxShadow = 'none';
    borderH.style.boxShadow = 'none';
    borderI.style.boxShadow = 'none';
    borderJ.style.boxShadow = 'none';
    borderK.style.boxShadow = 'none';
    borderA.style.boxShadow = 'none';
    borderM.style.boxShadow = 'none';
    borderN.style.boxShadow = 'none';
    borderO.style.boxShadow = 'none';
    borderP.style.boxShadow = 'none';
    
    

    // borders

    borderB.style.border = "0"
    borderC.style.border = "0"
    borderD.style.border = "0"
    borderE.style.border = "0"
    borderF.style.border = "0"
    borderG.style.border = "0"
    borderH.style.border = "0"
    borderI.style.border = "0"
    borderJ.style.border = "0"
    borderK.style.border = "0"
    borderA.style.border = "0"
    borderM.style.border = "0"
    borderN.style.border = "0"
    borderO.style.border = "0"
    borderP.style.border = "0"
}
borderM.onclick = () =>{
    borderM.style.border = '2px solid #0f8cfa';
    borderM.style.boxShadow = 'rgba(15, 140, 250,.50) 0px 5px 15px';
    avatar.setAttribute("src", "images/tok.jpg")
    
    // box shadows
    borderB.style.boxShadow = 'none';
    borderC.style.boxShadow = 'none';
    borderD.style.boxShadow = 'none';
    borderE.style.boxShadow = 'none';
    borderF.style.boxShadow = 'none';
    borderG.style.boxShadow = 'none';
    borderH.style.boxShadow = 'none';
    borderI.style.boxShadow = 'none';
    borderJ.style.boxShadow = 'none';
    borderK.style.boxShadow = 'none';
    borderL.style.boxShadow = 'none';
    borderA.style.boxShadow = 'none';
    borderN.style.boxShadow = 'none';
    borderO.style.boxShadow = 'none';
    borderP.style.boxShadow = 'none';
    
    

    // borders

    borderB.style.border = "0"
    borderC.style.border = "0"
    borderD.style.border = "0"
    borderE.style.border = "0"
    borderF.style.border = "0"
    borderG.style.border = "0"
    borderH.style.border = "0"
    borderI.style.border = "0"
    borderJ.style.border = "0"
    borderK.style.border = "0"
    borderL.style.border = "0"
    borderA.style.border = "0"
    borderN.style.border = "0"
    borderO.style.border = "0"
    borderP.style.border = "0"
}
borderN.onclick = () =>{
    borderN.style.border = '2px solid #0f8cfa';
    borderN.style.boxShadow = 'rgba(15, 140, 250,.50) 0px 5px 15px';
    avatar.setAttribute("src", "images/kagg.jpg")
    
    // box shadows
    borderB.style.boxShadow = 'none';
    borderC.style.boxShadow = 'none';
    borderD.style.boxShadow = 'none';
    borderE.style.boxShadow = 'none';
    borderF.style.boxShadow = 'none';
    borderG.style.boxShadow = 'none';
    borderH.style.boxShadow = 'none';
    borderI.style.boxShadow = 'none';
    borderJ.style.boxShadow = 'none';
    borderK.style.boxShadow = 'none';
    borderL.style.boxShadow = 'none';
    borderM.style.boxShadow = 'none';
    borderA.style.boxShadow = 'none';
    borderO.style.boxShadow = 'none';
    borderP.style.boxShadow = 'none';
    
    

    // borders

    borderB.style.border = "0"
    borderC.style.border = "0"
    borderD.style.border = "0"
    borderE.style.border = "0"
    borderF.style.border = "0"
    borderG.style.border = "0"
    borderH.style.border = "0"
    borderI.style.border = "0"
    borderJ.style.border = "0"
    borderK.style.border = "0"
    borderL.style.border = "0"
    borderM.style.border = "0"
    borderA.style.border = "0"
    borderO.style.border = "0"
    borderP.style.border = "0"
}
borderO.onclick = () =>{
    borderO.style.border = '2px solid #0f8cfa';
    borderO.style.boxShadow = 'rgba(15, 140, 250,.50) 0px 5px 15px';
    avatar.setAttribute("src", "images/gl.jpeg")
    
    // box shadows
    borderB.style.boxShadow = 'none';
    borderC.style.boxShadow = 'none';
    borderD.style.boxShadow = 'none';
    borderE.style.boxShadow = 'none';
    borderF.style.boxShadow = 'none';
    borderG.style.boxShadow = 'none';
    borderH.style.boxShadow = 'none';
    borderI.style.boxShadow = 'none';
    borderJ.style.boxShadow = 'none';
    borderK.style.boxShadow = 'none';
    borderL.style.boxShadow = 'none';
    borderM.style.boxShadow = 'none';
    borderN.style.boxShadow = 'none';
    borderA.style.boxShadow = 'none';
    borderP.style.boxShadow = 'none';
    
    

    // borders

    borderB.style.border = "0"
    borderC.style.border = "0"
    borderD.style.border = "0"
    borderE.style.border = "0"
    borderF.style.border = "0"
    borderG.style.border = "0"
    borderH.style.border = "0"
    borderI.style.border = "0"
    borderJ.style.border = "0"
    borderK.style.border = "0"
    borderL.style.border = "0"
    borderM.style.border = "0"
    borderN.style.border = "0"
    borderA.style.border = "0"
    borderP.style.border = "0"
}
borderP.onclick = () =>{
    borderP.style.border = '2px solid #0f8cfa';
    borderP.style.boxShadow = 'rgba(15, 140, 250,.50) 0px 5px 15px';
    avatar.setAttribute("src", "images/zeno.jpg")
    
    // box shadows
    borderB.style.boxShadow = 'none';
    borderC.style.boxShadow = 'none';
    borderD.style.boxShadow = 'none';
    borderE.style.boxShadow = 'none';
    borderF.style.boxShadow = 'none';
    borderG.style.boxShadow = 'none';
    borderH.style.boxShadow = 'none';
    borderI.style.boxShadow = 'none';
    borderJ.style.boxShadow = 'none';
    borderK.style.boxShadow = 'none';
    borderL.style.boxShadow = 'none';
    borderM.style.boxShadow = 'none';
    borderN.style.boxShadow = 'none';
    borderO.style.boxShadow = 'none';
    borderA.style.boxShadow = 'none';
    
    

    // borders

    borderB.style.border = "0"
    borderC.style.border = "0"
    borderD.style.border = "0"
    borderE.style.border = "0"
    borderF.style.border = "0"
    borderG.style.border = "0"
    borderH.style.border = "0"
    borderI.style.border = "0"
    borderJ.style.border = "0"
    borderK.style.border = "0"
    borderL.style.border = "0"
    borderM.style.border = "0"
    borderN.style.border = "0"
    borderO.style.border = "0"
    borderA.style.border = "0"
}

// choose option



khtar.onclick = () =>{
    start.style.display = 'none';
    end.style.display = 'block';
    info.style.display = 'none';
    home.style.flexBasis = '33.33%'
    document.querySelector("li.rate").style.flexBasis = '33.33%'
    document.querySelector("li.apps").style.flexBasis = '33.33%'
}


// start faq

// list

let awal = document.getElementById("awal");
let tani = document.getElementById("tani");
let talt = document.getElementById("talt");
let raba = document.getElementById("raba");

// paragraph

let alawal = document.getElementById("alawal");
let altani = document.getElementById("altani");
let altalt = document.getElementById("altalt");
let alraba = document.getElementById("alraba");

// icons

let todownA = document.getElementById("todownA");
let toupA = document.getElementById("toupA");

let todownB = document.getElementById("todownB");
let toupB = document.getElementById("toupB");

let todownC = document.getElementById("todownC");
let toupC = document.getElementById("toupC");

let todownD = document.getElementById("todownD");
let toupD = document.getElementById("toupD");


// start

awal.onclick = () =>{
    if(alawal.style.display === "none"){
        alawal.style.display = 'block';
        todownA.style.display = 'none';
        toupA.style.display = 'block';
    }
    else{
        alawal.style.display = 'none';
        todownA.style.display = 'block';
        toupA.style.display = 'none';
    }
}

tani.onclick = () =>{
    if(altani.style.display === "none"){
        altani.style.display = 'block';
        todownB.style.display = 'none';
        toupB.style.display = 'block';
    }
    else{
        altani.style.display = 'none';
        todownB.style.display = 'block';
        toupB.style.display = 'none';
    }
}

talt.onclick = () =>{
    if(altalt.style.display === "none"){
        altalt.style.display = 'block';
        todownC.style.display = 'none';
        toupC.style.display = 'block';
    }
    else{
        altalt.style.display = 'none';
        todownC.style.display = 'block';
        toupC.style.display = 'none';
    }
}

raba.onclick = () =>{
    if(alraba.style.display === "none"){
        alraba.style.display = 'block';
        todownD.style.display = 'none';
        toupD.style.display = 'block';
    }
    else{
        alraba.style.display = 'none';
        todownD.style.display = 'block';
        toupD.style.display = 'none';
    }
}



