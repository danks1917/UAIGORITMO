
window.sr = ScrollReveal({ reset: true });

//3 imagens dos produtos
sr.reveal('.product-image', {
    rotate: {x: 0, y: 120, z: 0},
    duration: 2000
});

//img central do site 
sr.reveal('img', {
    duration: 2000
});

//botoes
sr.reveal('.btn', {
    rotate: {x: 0, y: 80, z: 0},
    duration: 2000
});

//titulos grandes
sr.reveal('.tituloEfeito1', {
    duration: 2000
});

sr.reveal('.tituloEfeito2', {
    rotate: {x: 0, y: 80, z: 0},
    duration: 2000
});

sr.reveal('.tituloEfeito3', {
    rotate: {x: 100, y: 100, z: 0},
    duration: 2000
});

//subtitulos
sr.reveal('.subTituloEfeito', {
    rotate: {x: 0, y: 30, z: 0},
    duration: 2000
});