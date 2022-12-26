var tema = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
if (tema == "light") {
   alert("Questa pagina non supporta il tema chiaro, verrà usato il tema scuro");
}
