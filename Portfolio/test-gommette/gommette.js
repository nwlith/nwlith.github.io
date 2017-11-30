(function ($) {

  Drupal.behaviors.evenementList = {
    attach: function(context, settings) {
      if (!$('#liste-evenements', context).length) {
        return;
      }

      $('#liste-evenements', context).on('click', 'tbody tr', function(event) {
        // Si cliquer sur une ligne, fais comme si c'est cliquer sur un lien
        // pour rendre la ligne "cliquable".
        location = $(this).find('a:eq(0)').attr('href');
      });

      var table = $('#liste-evenements', context)
        .dataTable({
          iDisplayLength: -1,
          oLanguage: {
            sZeroRecords: 'Aucun événement correspond à votre recherche.'
          }
        })
        .yadcf([
          {
            column_number: 1,
            filter_type: 'select',
            text_data_delimiter: ',',
            filter_default_label: 'mois',
            sort_as: 'none'
          },
          {
            column_number: 2,
            filter_type: 'select',
            filter_default_label: 'villes'
          },
          {
            column_number: 3,
            filter_type: 'select',
            filter_default_label: 'événements'
          }
        ]);
      $('.yadcf-filter-wrapper')
        .appendTo('#liste-evenements-filter');

      // Remplace le contrôle par défaut.
      $('#yadcf-filter--liste-evenements-1')
        .children().remove()
        .end().append('<option value="-1">mois</option><option value="- en cours -">- en cours -</option><option value="janvier">janvier</option><option value="février">février</option><option value="mars">mars</option><option value="avril">avril</option><option value="mai">mai</option><option value="juin">juin</option><option value="juillet">juillet</option><option value="août">août</option><option value="septembre">septembre</option><option value="octobre">octobre</option><option value="novembre">novembre</option><option value="décembre">décembre</option>');
      yadcf.exFilterColumn(table, 1, '- en cours -');
      $('.yadcf-filter').select2({dropdownAutoWidth: true});
    }
  }

})(jQuery);
;
(function ($) {

  Drupal.behaviors.gefFonds = {

    attach: function(context, settings) {

      var maxFond = 5;

      $('body', context).once('gefFonds', function() {
        var n = Math.floor(Math.random() * maxFond) + 1;
        this.style.backgroundImage = 'url(' + Drupal.settings.basePath + 'sites/all/themes/gef/images/fonds/bg-' + n + '.png)';
      });
    }
  }

})(jQuery);
;
(function ($) {

  Drupal.gefMakeDraggable = function(image) {
    var offX, offY;

    var dragme = function(e) {
      image.css({
        left: (e.clientX - offX) + 'px',
        top: (e.clientY - offY) + 'px'
      });
    }

    image
      .on('mousedown', function(e) {
        offX = e.clientX - parseInt(image.css('left'));
        offY = e.clientY - parseInt(image.css('top'));
        $(this).on('mousemove', dragme);
        e.preventDefault();
      })
      .on('mouseup', function() {
        $(this).off('mousemove');
      });
  }

  Drupal.behaviors.gefSigles = {

    attach: function(context, settings) {
      // Distances minimales par apport à la page.
      var maxSigle = 15,
        minX = 50,
        minY = 50;

      $('body', context).once('gefSigles', function() {
        var n = Math.floor(Math.random() * maxSigle) + 1;
        var deg = Math.floor(Math.random() * 360);// roration
        var url = Drupal.settings.basePath + 'sites/all/themes/gef/images/sigles/sigle-' + n + '.svg';
        var image = $('<img src="' + url + '" class="sigle-draggable" width="197px" height="143px" />');
        image
          .css({
            position: 'fixed',
            left: minX + Math.floor(Math.random() * ($(window).width() - image.width() - minX * 2)),
            top: minY + Math.floor(Math.random() * ($(window).height() - image.height() - minY * 2)),
            '-webkit-transform': 'rotate(' + deg + 'deg)',
            '-ms-transform': 'rotate(' + deg + 'deg)',
            transform: 'rotate(' + deg + 'deg)',
          })
          .appendTo('body');
        Drupal.gefMakeDraggable(image);
      });
    }
  }

})(jQuery);
;
