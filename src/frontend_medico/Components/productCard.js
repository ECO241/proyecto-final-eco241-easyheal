class CardComponent {
    constructor(nombre, descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    render() {
        const card = document.createElement('div');
        card.classList.add('productCard');

        const cardNombre = document.createElement('h2');
        cardNombre.innerText = this.nombre;

        const cardDescripcion = document.createElement('p');
        cardDescripcion.innerText = this.descripcion;

        card.appendChild(cardNombre);
        card.appendChild(cardDescripcion);

        return card;
    }
}