      export function crearElementoHTML (objetoJSON)
      {
        let precioFormateado = '$ ' + objetoJSON.precio.toLocaleString('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
        });   

        return `
        <div class="card">
          <img src="${objetoJSON.imagen}" alt="${objetoJSON.producto}"/>
          <h3>${objetoJSON.producto}</h3>
          <div class="product-text">
            <small>Cód: ${objetoJSON.codigo}</small><br>
            <p class="precio">${precioFormateado}</span></p>
            <p>Stock: ${objetoJSON.stock}</p>
            <div style="display: flex; flex-flow: row wrap">
              <label for="${objetoJSON.codigo}" class="lblCantidad">Cantidad: </label>
              <input id="${objetoJSON.codigo}" style="font-size: 1.2em" type="number" class="cantidad" min="0" max="${objetoJSON.stock}" step="1" value="1" data-id="${objetoJSON.codigo}" placeholder="ingrese cantidad"/>
              </div>
            <div class="card-footer">
              <button 
                data-categoria = "${objetoJSON.categoria}"
                data-producto  = "${objetoJSON.producto}"
                data-codigo  = "${objetoJSON.codigo}"
                data-stock  = "${objetoJSON.stock}"
                data-precio = "${objetoJSON.precio}"
                data-imagen = "${objetoJSON.imagen}"
                class="btnAgregar">Comprar</button>
            </div>
          </div>
        </div>`;
      }