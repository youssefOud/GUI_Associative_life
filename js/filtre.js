

$(document).ready(function () {
  $("#test1").on('click', function() {
        ajouterAssos();
  });
});

function ajouterAssos () {
  $("#parentTest1").after('<li id = "assoArgil" class="list-group-item assos">ARGIL'
    + '<span class="badge">'
    +  '<div class="checkbox">'
    +   '<label><input class="radioAsso" type="checkbox" value="argil"></label>'
    +  '</div></span></li>'
    + '<li class="list-group-item assos">BDE'
    + '<span class="badge">'
    +  '<div class="checkbox">'
    +   '<label><input class="radioAsso" type="checkbox" value="bde"></label>'
    +  '</div></span></li>'
    + '<li id="assoKleson" class="list-group-item assos">K-le Son'
    + '<span class="badge">'
    +  '<div class="checkbox">'
    +    '<label><input class="radioAsso" type="checkbox" value="kleson"></label>'
    +  '</div></span></li>');
    activerCss();
    $(".radioAsso").on('click', function() {
          cocherCentreInteret();
    });
    $("#test1").on('click', function() {
          retirerAssos();
    });
}

function cocherCentreInteret() {
    $('.radioAsso').click(function() {
      $('#caseAnim').attr('checked',($('.radioAsso:not(:checked)').length == 0));
    });
}

//TODO : Couleur, intégrer navbar, changer couleur checkbox, si possible intégrer icone de la fleche 

function retirerAssos() {
    $('.assos').remove();
    $("#test1").on('click', function() {
          ajouterAssos()
    });
}

function activerCss() {
  $('.assos').css('text-align', 'left');
  $('.assos').css('height', '40px');
  $('.assos').css('padding-left', '2.375rem');
  $('.assos').css('padding-bottom', '1rem');
  $('.assos').css('padding-top', '0.5rem');
  $('.assos').css('margin-top', '0.175rem');
  $('.assos').css('margin-bottom', '0.175rem');
  $('#assoArgil').css('margin-top', '0rem');
  $('#parentTest1').css('margin-bottom', '0rem');
  $('#assoKleson').css('margin-bottom', '0.450rem');
}
