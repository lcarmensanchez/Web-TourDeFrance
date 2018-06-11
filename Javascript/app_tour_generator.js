function searchInJson(year){
      var data = getJSON()
      
        $('#winner').html("");
        $('#climber').html("");
        $('#sprinter').html("");
        $('#other-result').html("");
        $('#explanations').html("");

        if ((year >= 1903 && year < 1915) || (year > 1918 && year < 1940) || (year > 1946 && year <= 2017))  {
            if (data[year].Winner.name == 'd\u00e9sattribu\u00e9'){
                $('#winner').html('Pas de vainqueur : l\'américain Lance Armstrong a remport\u00e9 sept Tours entre 1999 et 2005. Mais ils lui ont été retirés en 2012 par l\'Union cycliste internationale. Cette année-là, l\'Agence américaine antidopage (USADA) conclut en effet que le coureur a utilisé des substances dopantes pour améliorer ses performances sportives.');
            }
            else {
				$('#winner').html('<a> Gagnant du Tour de France : <b>' + data[year].Winner.name + '</b> (' + data[year].Winner.nationality + ')</a>');
				$('#winner').prepend('<img class="img" id="maillot_jaune" src="./Resources/img/MAILLOTJAUNE.png" />')
			}
			if (data[year].Winner.name != 'none' && data[year].Climber.nationality != "none")
                $('#climber').html('<img class="img" src="./Resources/img/MAILLOTAPOIS.png" id="maillot_pois" />Meilleur grimpeur : <b>' + data[year].Climber.name + '</b> (' + data[year].Climber.nationality + ')');
            if (year < 1953)
                $('#sprinter').html("Pas de meilleur sprinter : le maillot vert n'a été créé qu\'en 1953, cinquante ans après le premier Tour de France.");
            else
                $('#sprinter').html('<img class="img" id="maillot_vert" src="./Resources/img/MAILLOTVERT.png" />Meilleur sprinteur : <b>' + data[year].Sprinter.name + '</b> (' + data[year].Sprinter.nationality + ')');
        }
        else if (year >= 1915 && year <= 1918) 
            $('#other-result').html("De 1915 à 1918, il n'y a pas eu de Tour de France à cause de la Première Guerre mondiale.");
        else if (year >= 1940 && year <= 1946) 
            $('#other-result').html("De 1940 à 1946, il n'y a pas eu de Tour de France à cause de la Seconde Guerre mondiale.");
        if (('img' in window || (window.DocumentTouch && document instanceof DocumentTouch))) {
             $('div').bind('touchstart', function(){
                  if (this.id == "winner")
                    $('#explanations').html("<p class='explanations'>Depuis 1919, le coureur en tête du classement général du Tour porte le maillot jaune. Le classement est obtenu en cumulant les temps réalisés sur chaque étape par chacun des participants.</p>");
                else if (this.id == "climber")
                    $('#explanations').html("<p class='explanations'>Lorsqu'ils franchissent des passages escarpés comme des cols, les coureurs gagnent des points. Le meilleur grimpeur remporte le Grand Prix de la montagne et arbore un maillot blanc à pois rouges.</p>"); 
                else if (this.id == "sprinter")
                     $('#explanations').html("<p class='explanations'>Le maillot vert a été créé en 1953. Lors du sprint final de chaque étape, les coureurs remportent des points variant selon leur classement. Celui qui atteint la première place revêt le maillot vert.</p>");
        });
              };
        $('div').bind('touchend', function(){
            $('#explanations').html("");
        });

        $(document).ready(function(){
            $("img").hover(function(){
                if (this.id == "maillot_jaune")
                    $('#explanations').html("<p class='explanations'>Depuis 1919, le coureur en tête du classement général du Tour porte le maillot jaune. Le classement est obtenu en cumulant les temps réalisés sur chaque étape par chacun des participants.</p>");
                else if (this.id == "maillot_pois")
                    $('#explanations').html("<p class='explanations'>Lorsqu'ils franchissent des passages escarpés comme des cols, les coureurs gagnent des points. Le meilleur grimpeur remporte le Grand Prix de la montagne et arbore un maillot blanc à pois rouges.</p>"); 
                else if (this.id == "maillot_vert")
                     $('#explanations').html("<p class='explanations'>Le maillot vert a été créé en 1953. Lors du sprint final de chaque étape, les coureurs remportent des points variant selon leur classement. Celui qui atteint la première place revêt le maillot vert.</p>");
            });
            $("img").mouseleave(function(){
                $('#explanations').html("");
            });
        });     
    }


    $( "#generator_button" ).click(function() {
        searchInJson($( "#year" ).val());
    });

