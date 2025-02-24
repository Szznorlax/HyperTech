export function navbarComponent(){
    return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand mx-lg-5" href="/index.html">
            <img src="/src/imgs/logo.png" alt="logo" class="navbar-logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarContent">
            <div class="d-flex align-items-center mx-auto">
                <form class="d-flex me-2" id="container">
                    <i class="bi bi-search" id="icon"></i>
                    <input class="form-control ms-2" id="search-box" placeholder="Buscar">
                </form>
                <button type="button" class="btn rounded-pill me-2" id="buscar">
                    Buscar
                </button>
                <a href="/../src/pages/carrinho.html" class="nav-link">
                    <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.09973 23.2C6.61479 23.2 5.41333 24.505 5.41333 26.1C5.41333 27.695 6.61479 29 8.09973 29C9.58469 29 10.7996 27.695 10.7996 26.1C10.7996 24.505 9.58469 23.2 8.09973 23.2ZM0 0V2.9H2.69991L7.55975 13.9055L5.73731 17.458C5.52132 17.864 5.39983 18.3425 5.39983 18.85C5.39983 20.445 6.61479 21.75 8.09973 21.75H24.2993V18.85H8.66672C8.47772 18.85 8.32923 18.6905 8.32923 18.4875L8.36972 18.3135L9.58469 15.95H19.6419C20.6544 15.95 21.5452 15.3555 22.0042 14.4565L26.8371 5.046C26.9485 4.82471 27.0045 4.57618 26.9997 4.32467C26.995 4.07316 26.9295 3.82729 26.8098 3.61107C26.6901 3.39484 26.5203 3.21566 26.3168 3.09103C26.1134 2.9664 26.8834 2.90058 25.6491 2.9H5.68332L4.41436 0H0ZM21.5992 23.2C20.1144 23.2 18.9129 24.505 18.9129 26.1C18.9129 27.695 20.1144 29 21.5992 29C23.0843 29 24.2993 27.695 24.2993 26.1C24.2993 24.505 23.0843 23.2 21.5992 23.2Z" fill="#EEEEEE"/>
                    </svg>
                </a>
            </div>
            <div class="d-flex align-items-center ms-lg-auto">
                <button type="button" class="btn btn-outline-secondary rounded-pill me-2">
                    <a href="/../src/pages/cadastro.html" class="text-decoration-none text-reset">Cadastre-se</a>
                </button>
                <button type="button" class="btn btn-outline-light rounded-pill me-2">
                    <a href="/../src/pages/login.html" class="text-decoration-none text-reset">Login</a>
                </button>
                <a href="#" class="link-light text-decoration-none">Sobre Nós</a>
            </div>
        </div>
    </div>
    </nav>
    `
};

