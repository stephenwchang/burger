const input = document.getElementById('input');
const button = document.getElementById('button');
const burgerList = document.getElementById('burger-list');
const devourButton = document.getElementsByClassName('devour-button');

button.addEventListener('click', function() {
  event.preventDefault();
  $.post("/api/new", {burgerName: input.value})
    // on success, run this callback
    .then(function(data) {
      console.log(data);
      location.reload();
    });
});

// adding event listener to dynmaically created devour buttons
for (var i = 0; i < devourButton.length; i++) {
  devourButton[i].addEventListener('click', function() {
    let id = this.getAttribute('data-id');
    $.ajax({
      url: `/api/devour/${id}`,
      method: 'PUT',
      success: function(result) {
        location.reload();
      }
    })
  });
}
