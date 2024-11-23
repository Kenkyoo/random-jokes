$(document).ready(function() {
    $("#btn").click(function getJokes() {
        $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/jokes',
        headers: { 'X-Api-Key': '47TbcbBJKlCP92xRufCnOg==PTkLKDxbwTowUKbb'},
        contentType: 'application/json',
        success: function(result) {
        const results = result[0];
        $('#joke').html(results.joke);
        $( ".card" ).effect( "slide" );
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
        }
    });
    });
    getJokes()
});
