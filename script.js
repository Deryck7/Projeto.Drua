const form = document.getElementById("contactForm");

if (form) {

```
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const button = form.querySelector("button");

    if (!button) {
        return;
    }

    button.textContent = "MENSAGEM ENVIADA ✓";
    button.style.backgroundColor = "#e21d43";

    form.reset();

    setTimeout(function () {

        button.textContent = "ENVIAR MENSAGEM →";
        button.style.backgroundColor = "#111";

    }, 3000);

});
```

}
