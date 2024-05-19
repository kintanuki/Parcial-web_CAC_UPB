import routes from "./view/IndexView.js"

function router(): void {
    const path: string = window.location.hash.slice(1) || '/';
    const app: HTMLElement | null = document.getElementById('app')
    console.log(path);

    if (app) {
        app.innerHTML = routes[path] || '<h1>La pagina no se encontro<h1>';
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router)