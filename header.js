let header = document.getElementById("header-comp");
header.innerHTML = `
<div id="sh"><br>
    <label class="sw">shaked website</label><br>
    <button class="bap" onclick="aboutMe()">About me</button> &nbsp;
    <button class="bap" onclick="welcome()">welcome</button>&nbsp;
    <button class="bap" onclick="home()">home</button>&nbsp;
    <button class="bap" onclick="logOut()">Log out</button>
</div>

<style>
    .bap{
        font-family: 'Kanit', sans-serif;
        font-size: 17px;
        color:aliceblue;
        background-color: rgba(240, 248, 255, 0);
        border-style: none;
        
    }

    .bap:hover{
        background-color: rgba(226, 43, 211, 0.551);
        font-size: 18px;
    }

    #sh{
        background-color: rgba(255, 152, 245, 0.777);
        text-align:center;
  }
    .sw{font-size: 30px;}
</style>`

function aboutMe() {
    window.location.href='../aboutMe/aboutMe.html'
}

function logOut(){   
    window.location.href = "../index.html"; 
}

function welcome(){
    window.location.href='../welcomepage/welcomepage.html'
}

function home(){
    window.location.href="../homepage/homepage.html";
}