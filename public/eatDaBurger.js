//ajax requests

$(function () {

    //ajax put request to change status to "devoured"
    $("#devour").on(click, (event) => {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourStatus = {
            devoured: newDevour
        };
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: newDevourStatus
        }).then(function () {
            console.log("changed devour status to 'devoured'");
            location.reload();
        });
    })

    //ajax post request
    $(".form-control").on("submit", (event) => {
        event.preventDefault();
        var newBurger = {
            name: $("#burgerInput").val().trim()
        };
        $.ajax(`/api/burgers/${id}`, {
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


