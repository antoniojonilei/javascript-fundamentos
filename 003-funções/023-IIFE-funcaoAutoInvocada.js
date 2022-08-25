// IIFE => Immediately Invoked Function Expression

// Função auto invocada - mesmo sem nome
// Na hora da declaração, já é invocada
// Uma das vantagens é fugir do escopo global

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})()