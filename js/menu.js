// Definir un arreglo de enlaces
let enlaces = [
    { texto: 'Bio', url: 'biography.html' },
    { texto: 'Bucles', url: 'bucles.html' },
    { texto: 'Cadenas', url: 'cadenas.html' },
    { texto: 'imc', url: 'condicionales.html' },
    { texto: 'Index', url: 'index.html' },
    { texto: 'iva', url: 'iva.html' },
    { texto: 'js1', url: 'js1.html' },
    { texto: 'operadores', url: 'operadores.html' },
    { texto: 'declarante', url: 'declarante.html' },
];

// Obtener el elemento ul del menú
  let menuUl = document.getElementById('menu');
  
  // Bucle for para recorrer el arreglo y generar los enlaces
  for (let i = 0; i < enlaces.length; i++) {
    let enlace = enlaces[i];
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = enlace.url;
    a.textContent = enlace.texto.toUpperCase();
    li.appendChild(a);
    menuUl.appendChild(li);
  }