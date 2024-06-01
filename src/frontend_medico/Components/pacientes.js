class Pacientes extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const nombre = this.getAttribute('nombre');
    
  
      this.shadowRoot.innerHTML = `
        <style>
          .pacientes {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 5px;
            border-radius: 5px;
          }
          .pacientes h2 {
            margin: 0;
            font-size: 1.2em;
          }
          
        </style>
        <div class="pacientes">
          <h2>${nombre}</h2>
    
        </div>
      `;
  
     ;
    }
  }
  
  customElements.define('mi-paciente', Pacientes);
  