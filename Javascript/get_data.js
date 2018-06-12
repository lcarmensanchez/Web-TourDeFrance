function getMessages(){
  var messages =
  {
            "WW": 
            {    
                "first": "De 1915 à 1918, il n'y a pas eu de Tour de France à cause de la Première Guerre mondiale.",
                "second": "De 1940 à 1946, il n'y a pas eu de Tour de France à cause de la Seconde Guerre mondiale."
            },
            "exceptions":
            {
              "climber": 'Pas de meilleur grimpeur : ce n\'est qu\'en 1933 qu\'est créé le "Grand Prix de la montagne" qui le récompense officiellement.',
              "sprinter": "Pas de meilleur sprinter : le maillot vert n'apparaît qu\'en 1953, cinquante ans après le premier Tour de France.",
              "Armstrong": " Pas de vainqueur : l\'américain Lance Armstrong a remport\u00e9 sept Tours entre 1999 et 2005. Mais ils lui ont été retirés en 2012 par l\'Union cycliste internationale. Cette année-là, l\'Agence américaine antidopage (USADA) conclut en effet que le coureur a utilisé des substances dopantes pour améliorer ses performances sportives.",
              "Kohl" : "Bernhard Kohl a été contrôlé positivement aux tests antidopages et déclassé. La première place du classement du meilleur grimpeur revient par conséquent à ",
              "Pellizotti" : "Franco Pellizotti a été contrôlé positivement aux tests antidopages et déclassé. La première place du classement du meilleur grimpeur revient par conséquent à ",
              "error" : "Le Tour de France n'a eu lieu que de 1903 à 2017. Pour les enfants nés en 2018, il va falloir attendre la prochaine édition..."
            },
            "img":
            {
              "climber": '<img class="img" src="./Resources/img/MAILLOTAPOIS.png" id="maillot_pois" />',
              "sprinter": '<img class="img" id="maillot_vert" src="./Resources/img/MAILLOTVERT.png" />',
              "winner": "<img class='img' id='maillot_jaune' src='./Resources/img/MAILLOTJAUNE.png' />",
            }
    };
  return(messages);
}

function getJSON(){
  var data =
  {
            "1903": 
            {    
                "Winner": { "name": "Maurice Garin", "nationality": "France"},
                "Climber": {"name": "none", "nationality": "none"},
                "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1904":
            {
              "Winner": {"name": "Henri Cornet", "nationality": "France"},
              "Climber" : {"name": "none", "nationality": "none"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1905":
            {
                "Winner": {"name": "Louis Trousselier", "nationality": "France"},
                "Climber" : {"name": "Ren\u00e9 Pottier", "nationality": "France"},
                "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1906":
            {
                "Winner": {"name": "Ren\u00e9 Pottier", "nationality": "France"},
                "Climber" : {"name": "Ren\u00e9 Pottier", "nationality": "France"},
                "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1907":
            {
                "Winner": {"name": "Lucien Petit-Breton", "nationality": "France"},
                "Climber" : {"name": "Emile Georget", "nationality": "France"},
                "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1908":
            {
                "Winner": {"name": "Lucien Petit-Breton", "nationality": "France"},
                "Climber" : {"name": "Gustave Garrigou", "nationality": "France"},
                "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1909":
            {
                "Winner": {"name": "Fran\u00e7ois Faber", "nationality": "Luxembourg"},
                "Climber" : {"name": "Fran\u00e7ois Faber", "nationality": "Luxembourg"},
                "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1910":
            {
                "Winner": {"name": "Octave Lapize", "nationality": "France"},
                "Climber" : {"name": "Octave Lapize", "nationality": "France"},
                "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1911":
            {
                "Winner": {"name": "Gustave Garrigou", "nationality": "France"},
                "Climber" : {"name": "Paul Duboc", "nationality": "France"},
                "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1912":
            {
                "Winner": {"name": "Odile Defraye", "nationality": "Belgique"},
                "Climber" : {"name": "Odile Defray", "nationality": "Belgique"},
                "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1913":
            {
                "Winner": {"name": "Philippe Thys", "nationality": "Belgique"},
                "Climber" : {"name": "Philippe Thys", "nationality": "Belgique"},
                "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1914":
            {
                "Winner": {"name": "Philippe Thys", "nationality": "Belgique"},
                "Climber" : {"name": "Firmin Lambot", "nationality": "Belgique"},
                "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1915":
            {
                "Winner": {"name": "WWI", "nationality": "none"},
                "Climber" : {"name": "WWI", "nationality": "none"},
                "Sprinter": {"name": "WWI", "nationality": "none"}
            },
            "1916":
            {
                "Winner": {"name": "WWI", "nationality": "none"},
                "Climber" : {"name": "WWI", "nationality": "none"},
                "Sprinter": {"name": "WWI", "nationality": "none"}
            },
            "1917":
            {
                "Winner": {"name": "WWI", "nationality": "none"},
                "Climber" : {"name": "WWI", "nationality": "none"},
              "Sprinter": {"name": "WWI", "nationality": "none"}
            },
            "1918":
            {
              "Winner": {"name": "WWI", "nationality": "none"},
              "Climber" : {"name": "WWI", "nationality": "none"},
              "Sprinter": {"name": "WWI", "nationality": "none"}
            },
            "1919":
            {
              "Winner": {"name": "Firmin Lambot", "nationality": "Belgique"},
              "Climber" : {"name": "Honor\u00e9 Barth\u00e9l\u00e9my", "nationality": "France"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1920":
            {
              "Winner": {"name": "Philippe Thys", "nationality": "Belgique"},
              "Climber" : {"name": "Firmin Lambot", "nationality": "Belgique"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1921":
            {
              "Winner": {"name": "L\u00e9on Scieur", "nationality": "Belgique"},
              "Climber" : {"name": "Hector Heusghem", "nationality": "Belgique"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1922":
            {
              "Winner": {"name": "Firmin Lambot", "nationality": "Belgique"},
              "Climber" : {"name": "Jean Alavoine", "nationality": "France"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1923":
            {
              "Winner": {"name": "Henri P\u00e9lissier", "nationality": "France"},
              "Climber" : {"name": "Henri P\u00e9lissier", "nationality": "France"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1924":
            {
              "Winner": {"name": "Ottavio Bottecchia", "nationality": "Italie"},
              "Climber" : {"name": "Ottavio Bottecchia", "nationality": "Italie"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1925":
            {
              "Winner": {"name": "Ottavio Bottecchia", "nationality": "Italie"},
              "Climber" : {"name": "Ottavio Bottecchia", "nationality": "Italie"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1926":
            {
              "Winner": {"name": "Lucien Buysse", "nationality": "Belgique"},
              "Climber" : {"name": "Lucien Buysse", "nationality": "Belgique"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1927":
            {
              "Winner": {"name": "Nicolas Frantz", "nationality": "Luxembourg"},
              "Climber" : {"name": "Michele Gordini", "nationality": "Italie"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1928":
            {
              "Winner": {"name": "Nicolas Frantz", "nationality": "Luxembourg"},
              "Climber" : {"name": "Victor Fontan", "nationality": "France"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1929":
            {
              "Winner": {"name": "Maurice De Waele", "nationality": "Belgique"},
              "Climber" : {"name": "Victor Fontan", "nationality": "France"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1930":
            {
              "Winner": {"name": "Andr\u00e9 Leducq", "nationality": "France"},
              "Climber" : {"name": "Beno\u00eet Faure", "nationality": "France"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1931":
            {
              "Winner": {"name": "Antonin Magne", "nationality": "France"},
              "Climber" : {"name": "Jef Demuysere", "nationality": "Belgique"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1932":
            {
              "Winner": {"name": "Andr\u00e9 Leducq", "nationality": "France"},
              "Climber" : {"name": "Vicente Trueba", "nationality": "Espagne"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1933":
            {
              "Winner": {"name": "Georges Speicher", "nationality": "France"},
              "Climber" : {"name": "Vicente Trueba", "nationality": "Espagne"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1934":
            {
              "Winner": {"name": "Antonin Magne", "nationality": "France"},
              "Climber" : {"name": "Ren\u00e9 Vietto", "nationality": "France"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1935":
            {
              "Winner": {"name": "Romain Maes", "nationality": "Belgique"},
              "Climber" : {"name": "F\u00e9licien Vervaecke", "nationality": "Belgique"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1936":
            {
              "Winner": {"name": "Sylv\u00e8re Maes", "nationality": "Belgique"},
              "Climber" : {"name": "Juli\u00e1n Berrendero", "nationality": "Espagne"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1937":
            {
              "Winner": {"name": "Roger Lap\u00e9bie", "nationality": "France"},
              "Climber" : {"name": "F\u00e9licien Vervaecke", "nationality": "Belgique"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1938":
            {
              "Winner": {"name": "Gino Bartali", "nationality": "Italie"},
              "Climber" : {"name": "Gino Bartali", "nationality": "Italie"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1939":
            {
              "Winner": {"name": "Sylv\u00e8re Maes", "nationality": "Belgique"},
              "Climber" : {"name": "Sylv\u00e8re Maes", "nationality": "Belgique"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1940":
            {
              "Winner": {"name": "WWII", "nationality": "none"},
              "Climber" : {"name": "WWII", "nationality": "none"},
              "Sprinter": {"name": "WWII", "nationality": "none"}
            },
            "1941":
            {
              "Winner": {"name": "WWII", "nationality": "none"},
              "Climber" : {"name": "WWII", "nationality": "none"},
              "Sprinter": {"name": "WWII", "nationality": "none"}
            },
            "1942":
            {
              "Winner": {"name": "WWII", "nationality": "none"},
              "Climber" : {"name": "WWII", "nationality": "none"},
              "Sprinter": {"name": "WWII", "nationality": "none"}
            },
            "1943":
            {
              "Winner": {"name": "WWII", "nationality": "none"},
              "Climber" : {"name": "WWII", "nationality": "none"},
              "Sprinter": {"name": "WWII", "nationality": "none"}
            },
            "1944":
            {
              "Winner": {"name": "WWII", "nationality": "none"},
              "Climber" : {"name": "WWII", "nationality": "none"},
              "Sprinter": {"name": "WWII", "nationality": "none"}
            },
            "1945":
            {
              "Winner": {"name": "WWII", "nationality": "none"},
              "Climber" : {"name": "WWII", "nationality": "none"},
              "Sprinter": {"name": "WWII", "nationality": "none"}
            },
            "1946":
            {
              "Winner": {"name": "WWII", "nationality": "none"},
              "Climber" : {"name": "WWII", "nationality": "none"},
              "Sprinter": {"name": "WWII", "nationality": "none"}
            },
            "1947":
            {
              "Winner": {"name": "Jean Robic", "nationality": "France"},
              "Climber" : {"name": "Pierre Brambilla", "nationality": "Italie"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1948":
            {
              "Winner": {"name": "Gino Bartali", "nationality": "Italie"},
              "Climber" : {"name": "Gino Bartali", "nationality": "Italie"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1949":
            {
              "Winner": {"name": "Fausto Coppi", "nationality": "Italie"},
              "Climber" : {"name": "Fausto Coppi", "nationality": "Italie"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1950":
            {
              "Winner": {"name": "Ferdi K\u00fcbler", "nationality": "Suisse"},
              "Climber" : {"name": "Louison Bobet", "nationality": "France"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1951":
            {
              "Winner": {"name": "Hugo Koblet", "nationality": "Suisse"},
              "Climber" : {"name": "Rapha\u00ebl G\u00e9miniani", "nationality": "France"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1952":
            {
              "Winner": {"name": "Fausto Coppi", "nationality": "Italie"},
              "Climber" : {"name": "Fausto Coppi", "nationality": "Italie"},
              "Sprinter": {"name": "none", "nationality": "none"}
            },
            "1953":
            {
              "Winner": {"name": "Louison Bobet", "nationality": "France"},
              "Climber" : {"name": "Jes\u00fas Loro\u00f1o", "nationality": "Espagne"},
              "Sprinter": {"name": "Fritz Schaer", "nationality": "Suisse"}
            },
            "1954":
            {
              "Winner": {"name": "Louison Bobet", "nationality": "France"},
              "Climber" : {"name": "Federico Bahamontes", "nationality": "Espagne"},
              "Sprinter": {"name": "Ferdi K\u00fcbler", "nationality": "Suisse"}
            },
            "1955":
            {
              "Winner": {"name": "Louison Bobet", "nationality": "France"},
              "Climber" : {"name": "Charly Gaul", "nationality": "Luxembourg"},
              "Sprinter": {"name": "Stan Ockers", "nationality": "Belgique"}
            },
            "1956":
            {
              "Winner": {"name": "Roger Walkowiak", "nationality": "France"},
              "Climber" : {"name": "Charly Gaul", "nationality": "Luxembourg"},
              "Sprinter": {"name": "Stan Ockers", "nationality": "Belgique"}
            },
            "1957":
            {
              "Winner": {"name": "Jacques Anquetil", "nationality": "France"},
              "Climber" : {"name": "Gastone Nencini", "nationality": "Italie"},
              "Sprinter": {"name": "Jean Forestier", "nationality": "France"}
            },
            "1958":
            {
              "Winner": {"name": "Charly Gaul", "nationality": "Luxembourg"},
              "Climber" : {"name": "Federico Bahamontes", "nationality": "Espagne"},
              "Sprinter": {"name": "Jean Graczyk", "nationality": "France"}
            },
            "1959":
            {
              "Winner": {"name": "Federico Bahamontes", "nationality": "Espagne"},
              "Climber" : {"name": "Federico Bahamontes", "nationality": "Espagne"},
              "Sprinter": {"name": "Andr\u00e9 Darrigade", "nationality": "France"}
            },
            "1960":
            {
              "Winner": {"name": "Gastone Nencini", "nationality": "Italie"},
              "Climber" : {"name": "Imerio Massignan", "nationality": "Italie"},
              "Sprinter": {"name": "Jean Graczyk", "nationality": "France"}
            },
            "1961":
            {
              "Winner": {"name": "Jacques Anquetil", "nationality": "France"},
              "Climber" : {"name": "Imerio Massignan", "nationality": "Italie"},
              "Sprinter": {"name": "Andr\u00e9 Darrigade", "nationality": "France"}
            },
            "1962":
            {
              "Winner": {"name": "Jacques Anquetil", "nationality": "France"},
              "Climber" : {"name": "Federico Bahamontes", "nationality": "Espagne"},
              "Sprinter": {"name": "Rudi Altig", "nationality": "Allemagne de l'Ouest"}
            },
            "1963":
            {
              "Winner": {"name": "Jacques Anquetil", "nationality": "France"},
              "Climber" : {"name": "Federico Bahamontes", "nationality": "Espagne"},
              "Sprinter": {"name": "Rik Van Looy", "nationality": "Belgique"}
            },
            "1964":
            {
              "Winner": {"name": "Jacques Anquetil", "nationality": "France"},
              "Climber" : {"name": "Federico Bahamontes", "nationality": "Espagne"},
              "Sprinter": {"name": "Jan Janssen", "nationality": "Pays-Bas"}
            },
            "1965":
            {
              "Winner": {"name": "Felice Gimondi", "nationality": "Italie"},
              "Climber" : {"name": "Julio Jim\u00e9nez", "nationality": "Espagne"},
              "Sprinter": {"name": "Jan Janssen", "nationality": "Pays-Bas"}
            },
            "1966":
            {
              "Winner": {"name": "Lucien Aimar", "nationality": "France"},
              "Climber" : {"name": "Julio Jim\u00e9nez", "nationality": "Espagne"},
              "Sprinter": {"name": "Willy Planckaert", "nationality": "Belgique"}
            },
            "1967":
            {
              "Winner": {"name": "Roger Pingeon", "nationality": "France"},
              "Climber" : {"name": "Julio Jim\u00e9nez", "nationality": "Espagne"},
              "Sprinter": {"name": "Jan Janssen", "nationality": "Pays-Bas"}
            },
            "1968":
            {
              "Winner": {"name": "Jan Janssen", "nationality": "Pays-Bas"},
              "Climber" : {"name": "Aurelio Gonz\u00e1lez", "nationality": "Espagne"},
              "Sprinter": {"name": "Franco Bitossi", "nationality": "Italie"}
            },
            "1969":
            {
              "Winner": {"name": "Eddy Merckx", "nationality": "Belgique"},
              "Climber" : {"name": "Eddy Merckx", "nationality": "Belgique"},
              "Sprinter": {"name": "Eddy Merckx", "nationality": "Belgique"}
            },
            "1970":
            {
              "Winner": {"name": "Eddy Merckx", "nationality": "Belgique"},
              "Climber" : {"name": "Eddy Merckx", "nationality": "Belgique"},
              "Sprinter": {"name": "Walter Godefroot", "nationality": "Belgique"}
            },
            "1971":
            {
              "Winner": {"name": "Eddy Merckx", "nationality": "Belgique"},
              "Climber" : {"name": "Lucien Van Impe", "nationality": "Belgique"},
              "Sprinter": {"name": "Eddy Merckx", "nationality": "Belgique"}
            },
            "1972":
            {
              "Winner": {"name": "Eddy Merckx", "nationality": "Belgique"},
              "Climber" : {"name": "Lucien Van Impe", "nationality": "Belgique"},
              "Sprinter": {"name": "Eddy Merckx", "nationality": "Belgique"}
            },
            "1973":
            {
              "Winner": {"name": "Luis Oca\u00f1a", "nationality": "Espagne"},
              "Climber" : {"name": "Pedro Torres", "nationality": "Espagne"},
              "Sprinter": {"name": "Herman Van Springel", "nationality": "Belgique"}
            },
            "1974":
            {
              "Winner": {"name": "Eddy Merckx", "nationality": "Belgique"},
              "Climber" : {"name": "Domingo Perurena", "nationality": "Espagne"},
              "Sprinter": {"name": "Patrick Sercu", "nationality": "Belgique"}
            },
            "1975":
            {
              "Winner": {"name": "Bernard Th\u00e9venet", "nationality": "France"},
              "Climber" : {"name": "Lucien Van Impe", "nationality": "Belgique"},
              "Sprinter": {"name": "Rik Van Linden", "nationality": "Belgique"}
            },
            "1976":
            {
              "Winner": {"name": "Lucien Van Impe", "nationality": "Belgique"},
              "Climber" : {"name": "Giancarlo Bellini", "nationality": "Italie"},
              "Sprinter": {"name": "Freddy Maertens", "nationality": "Belgique"}
            },
            "1977":
            {
              "Winner": {"name": "Bernard Th\u00e9venet", "nationality": "France"},
              "Climber" : {"name": "Lucien Van Impe", "nationality": "Belgique"},
              "Sprinter": {"name": "Jacques Esclassan", "nationality": "France"}
            },
            "1978":
            {
              "Winner": {"name": "Bernard Hinault", "nationality": "France"},
              "Climber" : {"name": "Mariano Mart\u00ednez", "nationality": "France"},
              "Sprinter": {"name": "Freddy Maertens", "nationality": "Belgique"}
            },
            "1979":
            {
              "Winner": {"name": "Bernard Hinault", "nationality": "France"},
              "Climber" : {"name": "Giovanni Battaglin", "nationality": "Italie"},
              "Sprinter": {"name": "Bernard Hinault", "nationality": "France"}
            },
            "1980":
            {
              "Winner": {"name": "Joop Zoetemelk", "nationality": "Luxembourg"},
              "Climber" : {"name": "Raymond Martin", "nationality": "France"},
              "Sprinter": {"name": "Rudy Pevenage", "nationality": "Belgique"}
            },
            "1981":
            {
              "Winner": {"name": "Bernard Hinault", "nationality": "France"},
              "Climber" : {"name": "Lucien Van Impe", "nationality": "Belgique"},
              "Sprinter": {"name": "Freddy Maertens", "nationality": "Belgique"}
            },
            "1982":
            {
              "Winner": {"name": "Bernard Hinault", "nationality": "France"},
              "Climber" : {"name": "Bernard Vallet", "nationality": "France"},
              "Sprinter": {"name": "Sean Kelly", "nationality": "Irlande"}
            },
            "1983":
            {
              "Winner": {"name": "Laurent Fignon", "nationality": "France"},
              "Climber" : {"name": "Lucien Van Impe", "nationality": "Belgique"},
              "Sprinter": {"name": "Sean Kelly", "nationality": "Irlande"}
            },
            "1984":
            {
              "Winner": {"name": "Laurent Fignon", "nationality": "France"},
              "Climber" : {"name": "Robert Millar", "nationality": "Royaume-Uni"},
              "Sprinter": {"name": "Frank Hoste", "nationality": "Belgique"}
            },
            "1985":
            {
              "Winner": {"name": "Bernard Hinault", "nationality": "France"},
              "Climber" : {"name": "Luis Herrera", "nationality": "Colombie"},
              "Sprinter": {"name": "Sean Kelly", "nationality": "Irlande"}
            },
            "1986":
            {
              "Winner": {"name": "Greg LeMond", "nationality": "Etats-Unis"},
              "Climber" : {"name": "Bernard Hinault", "nationality": "France"},
              "Sprinter": {"name": "Eric Vanderaerden", "nationality": "Belgique"}
            },
            "1987":
            {
              "Winner": {"name": "Stephen Roche", "nationality": "Irlande"},
              "Climber" : {"name": "Luis Herrera", "nationality": "Colombie"},
              "Sprinter": {"name": "Jean-Paul van Poppel", "nationality": "Pays-Bas"}
            },
            "1988":
            {
              "Winner": {"name": "Pedro Delgado", "nationality": "Espagne"},
              "Climber" : {"name": "Steven Rooks", "nationality": "Pays-Bas"},
              "Sprinter": {"name": "Eddy Planckaert", "nationality": "Belgique"}
            },
            "1989":
            {
              "Winner": {"name": "Greg LeMond", "nationality": "Etats-Unis"},
              "Climber" : {"name": "Gert-Jan Theunisse", "nationality": "Pays-Bas"},
              "Sprinter": {"name": "Sean Kelly", "nationality": "Irlande"}
            },
            "1990":
            {
              "Winner": {"name": "Greg LeMond", "nationality": "Etats-Unis"},
              "Climber" : {"name": "Thierry Claveyrolat", "nationality": "France"},
              "Sprinter": {"name": "Olaf Ludwig", "nationality": "Allemagne de l'Est"}
            },
            "1991":
            {
              "Winner": {"name": "Miguel Indurain", "nationality": "Espagne"},
              "Climber" : {"name": "Claudio Chiappucci", "nationality": "Italie"},
              "Sprinter": {"name": "Djamolidine Abdoujaparov", "nationality": "Union sovi\u00e9tique"}
            },
            "1992":
            {
              "Winner": {"name": "Miguel Indurain", "nationality": "Espagne"},
              "Climber" : {"name": "Claudio Chiappucci", "nationality": "Italie"},
              "Sprinter": {"name": "Laurent Jalabert", "nationality": "France"}
            },
            "1993":
            {
              "Winner": {"name": "Miguel Indurain", "nationality": "Espagne"},
              "Climber" : {"name": "Tony Rominger", "nationality": "Suisse"},
              "Sprinter": {"name": "Djamolidine Abdoujaparov", "nationality": "Ouzb\u00e9kistan"}
            },
            "1994":
            {
              "Winner": {"name": "Miguel Indurain", "nationality": "Espagne"},
              "Climber" : {"name": "Richard Virenque", "nationality": "France"},
              "Sprinter": {"name": "Djamolidine Abdoujaparov", "nationality": "Ouzb\u00e9kistan"}
            },
            "1995":
            {
              "Winner": {"name": "Miguel Indurain", "nationality": "Espagne"},
              "Climber" : {"name": "Richard Virenque", "nationality": "France"},
              "Sprinter": {"name": "Laurent Jalabert", "nationality": "France"}
            },
            "1996":
            {
              "Winner": {"name": "Bjarne Riis", "nationality": "Danemark"},
              "Climber" : {"name": "Richard Virenque", "nationality": "France"},
              "Sprinter": {"name": "Erik Zabel", "nationality": "Allemagne"}
            },
            "1997":
            {
              "Winner": {"name": "Jan Ullrich", "nationality": "Allemagne"},
              "Climber" : {"name": "Richard Virenque", "nationality": "France"},
              "Sprinter": {"name": "Erik Zabel", "nationality": "Allemagne"}
            },
            "1998":
            {
              "Winner": {"name": "Marco Pantani", "nationality": "Italie"},
              "Climber" : {"name": "Christophe Rinero", "nationality": "France"},
              "Sprinter": {"name": "Erik Zabel", "nationality": "Allemagne"}
            },
            "1999":
            {
              "Winner": {"name": "d\u00e9sattribu\u00e9", "nationality": "none"},
              "Climber" : {"name": "Richard Virenque", "nationality": "France"},
              "Sprinter": {"name": "Erik Zabel", "nationality": "Allemagne"}
            },
            "2000":
            {
              "Winner": {"name": "d\u00e9sattribu\u00e9", "nationality": "none"},
              "Climber" : {"name": "Santiago Botero", "nationality": "Colombie"},
              "Sprinter": {"name": "Erik Zabel", "nationality": "Allemagne"},
            },
            "2001":
            {
                "Winner": {"name": "d\u00e9sattribu\u00e9", "nationality": "none"},
                "Climber" : {"name": "Laurent Jalabert", "nationality": "France"},
                "Sprinter": {"name": "Erik Zabel", "nationality": "Allemagne"}
            },
            "2002":
            {
                "Winner": {"name": "d\u00e9sattribu\u00e9", "nationality": "none"},
                "Climber" : {"name": "Laurent Jalabert", "nationality": "France"},
                "Sprinter": {"name": "Robbie McEwen", "nationality": "Australie"}
            },
            "2003":
            {
                "Winner": {"name": "d\u00e9sattribu\u00e9", "nationality": "none"},
                "Climber" : {"name": "Richard Virenque", "nationality": "France"},
                "Sprinter": {"name": "Baden Cooke", "nationality": "Australie"}
            },
         "2004":
            {
                "Winner": {"name": "d\u00e9sattribu\u00e9", "nationality": "none"},
              "Climber" : {"name": "Richard Virenque", "nationality": "France"},
              "Sprinter": {"name": "Robbie McEwen", "nationality": "Australie"}
            },
         "2005":
            {
                "Winner": {"name": "d\u00e9sattribu\u00e9", "nationality": "none"},
              "Climber" : {"name": "Michael Rasmussen", "nationality": "Danemark"},
              "Sprinter": {"name": "Thor Hushovd", "nationality": "Norv\u00e8ge"}
            },
         "2006":
            {
                "Winner": {"name": "\u00d3scar Pereiro", "nationality": "Espagne"},
              "Climber" : {"name": "Michael Rasmussen", "nationality": "Danemark"},
              "Sprinter": {"name": "Robbie McEwen", "nationality": "Australie"}
            },
         "2007":
            {
                "Winner": {"name": "Alberto Contador", "nationality": "Espagne"},
              "Climber" : {"name": "Mauricio Soler", "nationality": "Colombie"},
              "Sprinter": {"name": "Tom Boonen", "nationality": "Belgique"}
            },
         "2008":
            {
                "Winner": {"name": "Carlos Sastre", "nationality": "Espagne"},
              "Climber" : {"name": "Carlos Sastre", "nationality": "Espagne"},
              "Sprinter": {"name": "\u00d3scar Freire", "nationality": "Espagne"}
            },
         "2009":
            {
                "Winner": {"name": "Alberto Contador", "nationality": "Espagne"},
              "Climber" : {"name": "Egoi Mart\u00ednez", "nationality": "Espagne"},
              "Sprinter": {"name": "Thor Hushovd", "nationality": "Norv\u00e8ge"}
            },
         "2010":
            {
                "Winner": {"name": "Andy Schleck", "nationality": "Luxembourg"},
              "Climber" : {"name": "Anthony Charteau", "nationality": "France"},
              "Sprinter": {"name": "Alessandro Petacchi", "nationality": "Italie"}
            },
         "2011":
            {
                "Winner": {"name": "Cadel Evans", "nationality": "Australie"},
              "Climber" : {"name": "Samuel S\u00e1nchez", "nationality": "Espagne"},
              "Sprinter": {"name": "Mark Cavendish", "nationality": "Royaume-Uni"}
            },
         "2012":
            {
                "Winner": {"name": "Bradley Wiggins", "nationality": "Royaume-Uni"},
              "Climber" : {"name": "Thomas Voeckler", "nationality": "France"},
              "Sprinter": {"name": "Peter Sagan", "nationality": "Slovaquie"}
            },
         "2013":
            {
                "Winner": {"name": "Christopher Froome", "nationality": "Royaume-Uni"},
              "Climber" : {"name": "Nairo Quintana", "nationality": "Colombie"},
              "Sprinter": {"name": "Peter Sagan", "nationality": "Slovaquie"}
            },
         "2014":
            {
                "Winner": {"name": "Vincenzo Nibali", "nationality": "Italie"},
              "Climber" : {"name": "Rafa\u0142 Majka", "nationality": "Pologne"},
              "Sprinter": {"name": "Peter Sagan", "nationality": "Slovaquie"}
            },
         "2015":
            {
                "Winner": {"name": "Christopher Froome", "nationality": "Royaume-Uni"},
              "Climber" : {"name": "Christopher Froome", "nationality": "Royaume-Uni"},
              "Sprinter": {"name": "Peter Sagan", "nationality": "Slovaquie"}
            },
         "2016":
            {
                "Winner": {"name": "Christopher Froome", "nationality": "Royaume-Uni"},
              "Climber" : {"name": "Rafa\u0142 Majka", "nationality": "Pologne"},
              "Sprinter": {"name": "Peter Sagan", "nationality": "Slovaquie"}
            },
         "2017":
            {
                "Winner": {"name": "Christopher Froome", "nationality": "Royaume-Uni"},
              "Climber" : {"name": "Warren Barguil", "nationality": "France"},
              "Sprinter": {"name": "Michael Matthews", "nationality": "Australie"}
            }
        };
        return(data);
}

        