class Pacientes extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const nombre = this.getAttribute('nombre');
    
  
      this.shadowRoot.innerHTML = `
        <style>
          .paciente {
            width: 700px; 
          height: 45px;
          border: 1px solid #ccc;
          padding: 10px;
          margin: 5px;
          border-radius: 5px;
          background-color: #f4f4f5;
          border: 1px solid #04BF8A;
          border-radius: 10px;
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;
          margin-left: 100px; 

      }
          }
          .paciente h2 {
            margin: 0;
            font-family: Satoshi;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 45px;
            text-align: left;
            background-color: transparent;
            color: #001b26;
          }
          .filtro{
            display: none;
          }
        
       
        </style>
        <div class="paciente">
          <h2>${nombre}</h2>
         
    
        </div>
      `;
  
     ;
    }
  }
  
  customElements.define('mi-paciente', Pacientes);
  