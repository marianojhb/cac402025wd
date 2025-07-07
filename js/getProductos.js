    function getProductos(category) 
    {
      return fetch('./db/productos.json')
        .then(response => {
          if (!response.ok) {
            throw new Error("Error en la respuesta: " + response.status);
          }
          return response.json();
        })
        .then(data => {
              if (category) {
                return data.filter(producto => producto.categoria === category)
              }
              return data;
        })
        .catch(error => {
            console.error("Hubo un error con el fetch:", error);
            return [];
        });
    }   