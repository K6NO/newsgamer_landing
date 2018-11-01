$(document).ready(function(){
  $('#pictureModalCenter').on('show.bs.modal', function (event) {
    var img = $(event.relatedTarget) // Button that triggered the modal
    var url = img.data('bigpicture') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-image').attr('src', url);
  });

  $('#mc-embedded-subscribe').attr('disabled', 'disabled');
  $('#consent').change(function(){
    if(this.checked) {
      $('#mc-embedded-subscribe').removeAttr('disabled');
    } else {
      $('#mc-embedded-subscribe').attr('disabled', 'disabled');
    }
  });
});


