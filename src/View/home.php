<?php
?>
<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel='stylesheet' type='text/css' href='style/home-style.css'/>
    <script src="scripts/home-movies.js" defer></script>
    <title>Accueil</title>
</head>
<body>
    <nav>
        <a href="movies">Films</a>
        <a href="series">Series</a>
        <label for="recherche"></label>
        <input id="search" name="recherche" type="text" placeholder="recherche">
    </nav>
    <div class="content-home">
        <div>
            <h2 class='home-title'>Les films tendances</h2>
            <div class='trending-movies'>
            </div>
        </div>
       <div>
           <h2 class='home-title'>Les series tendances</h2>
           <div class='trending-series'>
           </div>
       </div>

        <div>
            <h2 class='home-title'>Résultat de recherche</h2>
            <div class='search'>

            </div>
        </div>
    </div>
</body>
</html>
