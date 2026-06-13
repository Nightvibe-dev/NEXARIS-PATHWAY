const buttons = document.querySelectorAll("button");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "NEXARIS está analizando tus intereses..."
        );

    });

});