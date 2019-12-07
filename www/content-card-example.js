class ContentCardExample extends HTMLElement{
    set hass(hass){
        if (!this.content){
            const card = document.createElement('ha-card');
            card.header = ' ha card';
            this.content = document.createElement('div');
            this.content.style.padding = '0 16px 16px';
            card.appendChild(this.content);
            this.appendChild(card);
        }
        const entityId = this.config.entity;
        const state = hass.states[entityId];
        const stateStr = state ? state.state : 'unavailable';

         this.content.innerHTML = `
         <!DOCTYPE html>
         <html>
         <head>
         <meta name="viewport" content="width=device-width, initial-scale=1">
         <style>
         .card {
           box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
           transition: 0.3s;
           width: 40%;
         }
         
         .card:hover {
           box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
         }
         
         .container {
           padding: 2px 16px;
         }
         </style>
         </head>
         <body>
         
         <h2>Card</h2>
         
         <div class="card">
           <img src="img_avatar.png" alt="Avatar" style="width:100%">
           <div class="container">
             <h4><b>John Doe</b></h4> 
             <p>Architect & Engineer</p> 
           </div>
         </div>
         
         </body>
         </html> 
         
           `;
    }
    
  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    this.config = config;
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
    return 3;
  }
}
customElements.define('content-card-example', ContentCardExample);