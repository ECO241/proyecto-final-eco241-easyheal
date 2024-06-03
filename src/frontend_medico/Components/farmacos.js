class Medicamento extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const nombre = this.getAttribute('nombre');
      
  
      this.shadowRoot.innerHTML = `
      <style>
      .medicamento {
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
      .medicamento h2 {
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
      .medicamento button {
        margin-top: 10px;
        background-color: #f4f4f5;
        margin-left: 190px; 
      }

      #add-to-cart{
        border-color: transparent;
      }
      .filtro{
        display: none;
      }

      img{
        width: 24px;
        height: 24px;
      }
    </style>
    <div class="medicamento">
      <h2>${nombre}</h2>          
      <button id="add-to-cart"><img src="../img/Vector.png" alt=""></button>
    </div>

      `;
  
      this.shadowRoot.querySelector('#add-to-cart').addEventListener('click', () => {
        const event = new CustomEvent('add-to-cart', {
          detail: {
            nombre,            
          }
        });
        this.dispatchEvent(event);
      });
    }
  }
  
  customElements.define('mi-medicamento', Medicamento);
  