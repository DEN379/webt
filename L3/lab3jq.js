alert($("#elem").html());

 $( document ).ready(function() {
      $('#list-header').css({ 'font-weight': 'bolder' }); 
$('#list-header').append("<strong> 10</strong>");

	   $('#color').css({ 'color': '#555' });
      var replacement = $("#name").html().replace('Peter','Dennis');
	  $("#name").html(replacement);
    });