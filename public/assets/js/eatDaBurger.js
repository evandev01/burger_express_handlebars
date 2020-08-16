$(function () {
    //ajax put request to change status to "devoured" ==========
    $(".change-devour").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        // var id = $(this).data("data-id");
        console.log("I just clicked id number " + id);

        var newDevour = $(this).data("newdevour");
        var newDevourState = {
            devoured: newDevour
        };

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: newDevourState
        }).then(function () {
            location.reload();
        });
    });

    //ajax post request to add a new burger ===================
    $(".create-form").on("submit", () => {
        event.preventDefault();
        var newBurger = {
            name: $("#burgerInput").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            // console.log(`added new burger: ${newBurger}`);
            location.reload();
        });
    });

    //ajax delete request to remove a burger ==================
    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax(`/api/burgers/${id}`, {
            type: "DELETE"
        }).then(function () {
            console.log("deleted burger with id ", id);
            location.reload();
        });
    });
});


