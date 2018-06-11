function showExplanations(){
  if (('img' in window || (window.DocumentTouch && document instanceof DocumentTouch))) {
             $('div').bind('touchstart', function(){
                 if (this.id == "maillot_jaune")
                    $('#explanations').html(msg["explanations"].jaune);
                else if (this.id == "maillot_pois")
                     $('#explanations').html(msg["explanations"].pois);
                else if (this.id == "maillot_vert")
                     $('#explanations').html(msg["explanations"].vert);
        });
              };
        $('div').bind('touchend', function(){
            $('#explanations').html("");
        });

        $(document).ready(function(){
            $("img").hover(function(){
                if (this.id == "maillot_jaune")
                    $('#explanations').html(msg["explanations"].jaune);
                else if (this.id == "maillot_pois")
                     $('#explanations').html(msg["explanations"].pois);
                else if (this.id == "maillot_vert")
                     $('#explanations').html(msg["explanations"].vert);
            });
            $("img").mouseleave(function(){
                $('#explanations').html("");
            });
        });   
}  