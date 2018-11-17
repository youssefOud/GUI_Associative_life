

$(document).ready(function () {

  $("#caseAnim").on('click', function() {
        cocherAssos();
  });
  $("#test1").on('click', function() {
        changerSensChevron();
        ajouterAssos();
  });
  $("#test2").on('click', function() {
        ajouterAssos2();
  });
});

function changerSensChevron() {
  if ($('#chevron1').attr("class") === "fa fa-chevron-up") {
    $('#chevron1').toggleClass('fa-chevron-up', false).toggleClass('fa-chevron-down', true);
  } else {
    $('#chevron1').toggleClass('fa-chevron-down', false).toggleClass('fa-chevron-up', true);
  }
}

function cocherAssos() {
  console.log($('.radioAsso').length !== 0);
  console.log($('#caseAnim:not(:checked)').length);
    if ($('.radioAsso').length !== 0) {
      $('.radioAsso').prop('checked',($('#caseAnim:not(:checked)').length == 0));
    }
}

function ajouterAssos () {
  if ($('.assos').length == 0) {
      $("#parentTest1").after('<li id = "assoArgil" class="list-group-item assos">ARGIL'
        + '<span class="badge">'
        +  '<div class="checkbox gros">'
        +  '<input class="radioAsso" id="argil" type="checkbox" checked="false"/>'
        + '<label for="argil"></label>'
        + '</div></span></li>'
        + '<li class="list-group-item assos">BDE'
        + '<span class="badge">'
        +  '<div class="checkbox gros">'
        +  '<input class="radioAsso" id="bde" type="checkbox" checked="false" />'
        + '<label for="bde"></label>'
        + '</div></span></li>'
        + '<li id="assoKleson" class="list-group-item assos">K-le Son'
        + '<span class="badge">'
        +  '<div class="checkbox gros">'
        +  '<input class="radioAsso" id="kleson" type="checkbox" checked="false" />'
        + '<label for="kleson"></label>'
        + '</div></span></li>');
        activerCss();
        $('.radioAsso').attr('checked',($('#caseAnim:not(:checked)').length == 0));
        $(".radioAsso").on('click', function() {
              cocherCentreInteret();
        });
    } else {
        $('.assos').remove();
    }
}

function ajouterAssos2 () {
  $("#parentTest2").after('<li id = "assoBandas" class="list-group-item assos2">Band\'As'
    + '<span class="badge">'
    +  '<div class="checkbox">'
    +   '<label><input class="radioAsso2" type="checkbox" value="bandas"></label>'
    +  '</div></span></li>'
    + '<li class="list-group-item assos2">Ensemble vocal INSA'
    + '<span class="badge">'
    +  '<div class="checkbox">'
    +   '<label><input class="radioAsso2" type="checkbox" value="evi"></label>'
    +  '</div></span></li>'
    + '<li id="cgr" class="list-group-item assos2">CGR'
    + '<span class="badge">'
    +  '<div class="checkbox">'
    +    '<label><input class="radioAsso2" type="checkbox" value="cgr"></label>'
    +  '</div></span></li>');
    activerCss2();
    $(".radioAsso2").on('click', function() {
          cocherCentreInteret2();
    });
    $("#test2").on('click', function() {
          retirerAssos2();
    });
}

function cocherCentreInteret() {
    $('.radioAsso').click(function() {
      $('#caseAnim').prop('checked',($('.radioAsso:not(:checked)').length == 0));
    });
}

function cocherCentreInteret2() {
    $('.radioAsso2').click(function() {
      $('#caseArts').prop('checked',($('.radioAsso2:not(:checked)').length == 0));
    });
}
//TODO : Couleur, intégrer navbar, changer couleur checkbox, si possible intégrer icone de la fleche

function retirerAssos() {
    $('.assos').remove();
    $("#caseAnim").on('click', function() {
      cocherAssos();
    });
    $("#test1").on('click', function() {
          ajouterAssos()
    });
}

function retirerAssos2() {
    $('.assos2').remove();
    $("#test2").on('click', function() {
          ajouterAssos2()
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

function activerCss2() {
  $('.assos2').css('text-align', 'left');
  $('.assos2').css('height', '40px');
  $('.assos2').css('padding-left', '2.375rem');
  $('.assos2').css('padding-bottom', '1rem');
  $('.assos2').css('padding-top', '0.5rem');
  $('.assos2').css('margin-top', '0.175rem');
  $('.assos2').css('margin-bottom', '0.175rem');
  $('#assoBandas').css('margin-top', '0rem');
  $('#parentTest2').css('margin-bottom', '0rem');
  $('#cgr').css('margin-bottom', '0.450rem');
}
