*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:'Poppins',sans-serif;
    background:#050505;
    color:white;
    overflow-x:hidden;
}

.hero{
    height:100vh;
    background:url("assets/images/portada.jpg") center center/cover no-repeat;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
}

.overlay{
    position:absolute;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.60);
}

.contenido{
    position:relative;
    z-index:2;
    text-align:center;
    max-width:900px;
    padding:20px;
}

h1{
    font-family:'Cinzel',serif;
    font-size:4rem;
    color:#d6b46a;
    text-shadow:0 0 25px rgba(214,180,106,.8);
}

p{
    margin-top:20px;
    font-size:1.4rem;
    letter-spacing:3px;
}

.boton{
    display:inline-block;
    margin-top:40px;
    padding:15px 40px;
    border:2px solid #d6b46a;
    color:#d6b46a;
    text-decoration:none;
    border-radius:40px;
    transition:.4s;
}

.boton:hover{
    background:#d6b46a;
    color:black;
}

.menu{
    position:fixed;
    top:0;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:25px 60px;
    z-index:1000;
    background:rgba(0,0,0,.35);
    backdrop-filter:blur(10px);
}

.menu ul{
    display:flex;
    list-style:none;
    gap:25px;
}

.menu a{
    color:white;
    text-decoration:none;
    transition:.3s;
}

.menu a:hover{
    color:#d6b46a;
}

.logo{
    font-family:'Cinzel',serif;
    color:#d6b46a;
    font-size:1.4rem;
}
