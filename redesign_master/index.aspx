<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="redesign_master.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>CCO v3.0</title>
    <link href="/css/bootstrap.css" rel="stylesheet" />
    <link href="/css/jquery.sidr.dark.css" rel="stylesheet" />
    <link href="/css/global.css" rel="stylesheet" />
</head>

<body class="bg-back">
    <div class="navbar">
        <div class="navbar-inner">
            <a class="btn btn-navbar btn-menu pull-left" id="trigger">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>
            <a class="btn btn-navbar pull-right btn-star" id="fav-trigger">
                <i class="icon-star icon-white"></i>
            </a>
        </div>
    </div>

    <div id="sidr-menu">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Students</a></li>
            <li><a href="#">Alumni</a></li>
            <li><a href="#">Employers</a></li>
            <li><a href="#">Faculty</a></li>
            <li><a href="#">Parents</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </div>
    <div id="favorites">
        <ul>
            <li><a href="#">Career & Major Planning</a></li>
            <li><a href="#">21st Century Partners</a></li>
            <li><a href="#">myCCO</a></li>
            <li><a href="#">Calendar</a></li>
        </ul>
    </div>

	<div class="container main-container">

    	<div class="row">
            <div class="tile span4 bg-newgold" >
            
                <img src="/img/mycco.png" id="mycco" />
            </div>
            <div class="span4 tile bg-black">
                <img src="/img/log2.png" id="cco" />
                <ul class='socials' style='margin-left: 15%'>
                    <li class='social-facebook'><a href='#'>Facebook</a></li>
                    <li class='social-linked'><a href='#'>LinkedIn</a></li>
                    <li class='social-pinterest'><a href='#'>Pinterest</a></li>
                    <li class='social-twitter'><a href='#'>Twitter</a></li>
                    <li class='social-wordpress'><a href='#'>Wordpress</a></li>
                    <li class='social-instagram'><a href='#'>Instagram</a></li>
                </ul>
            </div>
            <div class="tile span4 bg-skyblue">
               <img src="https://www.cco.purdue.edu/Images/Student/Career&Exploration/fullmodel_463x468.png" height="110px" width="110px" style="margin-top: 20px" id="cmp"/>
            </div>
        </div>

        <div class="row">
            <a href="/students/">
            <div class="tile tile-tall span4 bg-teal">
                <span>Students</span>
            </div>
            </a>
            <div class="tile tile-tall span4 bg-lightblue">

                <span>Nursing Career Fair</span> <br>
                <span>11:30am - 3:00pm</span> <br>
                <span>PMU South Ballroom</span> <br>
            </div>

            <div class="tile tile-tall span4 bg-orange">

            </div>
        </div>

        <div class="row">
            <div class="tile tile-short span4 bg-pink">
                <span class="tile-name">Resources</span>
            </div>
            <div class="tile tile-short span4 bg-red">
                <img src="img/cal.png" height="90px" width="90px" style="margin-top: -10px"/>
                <span class="tile-name">Calendar</span>
            </div>
            <div class="tile tile-short span4 bg-newgold">
                <span class="tile-name">Employers</span>
            </div>
        </div>
    </div>

</body>
<script src='//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.sidr.min.js"></script>
<script>
    $("#trigger").sidr({
        source: '#sidr-menu',
        name: 'main-menu',
        side: 'left'
    });
    $("#fav-trigger").sidr({
        source: '#favorites',
        name: 'fav-menu',
        side: 'right'
    });
</script>
</html>
