function searchInJson(year){
      var data = getJSON();
      var msg = getMessages();
      
        $('#winner').html("");
        $('#climber').html("");
        $('#sprinter').html("");
        $('#other-result').html("");

        if ((year >= 1903 && year < 1915) || (year > 1918 && year < 1940) || (year > 1946 && year <= 2017))  {
            if (data[year].Winner.name == 'd\u00e9sattribu\u00e9'){
                $('#winner').html(msg["exceptions"].Armstrong);
            }
            else {
				$('#winner').html('<a> Gagnant du Tour de France : <b>' + data[year].Winner.name + '</b> (' + data[year].Winner.nationality + ')</a>');
				$('#winner').prepend(msg["img"].winner)
            }
            if (year < 1905)
                $('#climber').html(msg["exceptions"].climber);
			else if (data[year].Winner.name != 'none' && data[year].Climber.nationality != "none")
                $('#climber').html(msg["img"].climber + 'Meilleur grimpeur : <b>' + data[year].Climber.name + '</b> (' + data[year].Climber.nationality + ')');
            if (year < 1953)
                $('#sprinter').html(msg["exceptions"].sprinter);
            else
                $('#sprinter').html(msg["img"].sprinter + 'Meilleur sprinteur : <b>' + data[year].Sprinter.name + '</b> (' + data[year].Sprinter.nationality + ')');
        }
        else if (year >= 1915 && year <= 1918) 
            $('#other-result').html(msg["WW"].first);
        else if (year >= 1940 && year <= 1946) 
            $('#other-result').html(msg["WW"].second);
        $('html,body').animate({scrollTop: $("#other-result").offset().top}, 'slow');
}

$( "#generator_button" ).click(function() {
    searchInJson($( "#year" ).val());
});