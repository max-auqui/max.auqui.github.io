// Escuchar el movimiento del mouse
document.addEventListener('mousemove', (e) => {
    // Crear un elemento de rastro
    const trail = document.createElement('div');
    trail.classList.add('trail');
    
    // Posicionar el rastro en las coordenadas del cursor
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
    
    // Añadir al cuerpo
    document.body.appendChild(trail);
    
    // Eliminar el rastro después de la animación
    setTimeout(() => {
        trail.remove();
    }, 800); // Coincide con la duración de la animación (0.8s)
});