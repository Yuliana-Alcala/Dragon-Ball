function loadPage(page) {
    // Realizar una solicitud HTTP para cargar el contenido de la página
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la carga de la página');
            }
            return response.text();
        })
        .then(html => {
            // Cargar el contenido en el contenedor
            document.getElementById('main-content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}