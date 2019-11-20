$(function () {
    $("form").submit(function (event) {
        event.preventDefault();

        data = {
            pseudo: $("input[name=pseudo]").val(),
            message: $("#message").val(),
        };

        if (data.message) {
            console.log("data to send: " + JSON.stringify(data));
            $.ajax({
                url: "http://" + $(location).attr('host') + "/api",
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
            })
                .done(function (json) {
                    console.log("comment sent: " + JSON.stringify(data));
                    $("textarea").val("");
                })
                .fail(function( xhr, status, errorThrown ) {
                    console.log( "Sorry, there was a problem!" );
                    console.log( "Error: " + errorThrown );
                    console.log( "Status: " + status );
                })
                // Code to run regardless of success or failure;
                .always(function( xhr, status ) {
                    console.log( "The request is complete!" );
                });
        } else {
            console.log("no text to send.");
        }
    })
});
