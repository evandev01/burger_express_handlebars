//ajax requests

$(function () {

    //ajax put request to change status to "devoured"
    $("#devour").on("click", (event) => {
        var id = $(this).data("id");
        console.log("I just clicked " + id)
        // $.ajax(`/api/burgers/${id}`, {
        //     type: "PUT"
        // }).then(function () {
        //     location.reload();
        // });
    })

    //ajax post request
    $(".form-control").on("submit", (event) => {
        event.preventDefault();
        var newBurger = {
            name: $("burgerInput").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log(`added new burger: ${newBurger}`);
            location.reload();
        });
    });

    //ajax delete request
    $("#delete").on("click", (event) => {
        var id = $(this).data("id");

        $.ajax(`/api/burgers/${id}`, {
            type: "DELETE"
        }).then(function () {
            console.log("deleted burger", id);
            location.reload();
        });
    });
});


