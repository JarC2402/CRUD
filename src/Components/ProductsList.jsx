const ProductsList = ({products, deletProduct, editProduc}) => {
    
    
    return(
        
        <div className="content-produc-cards">
             <ul >
              {
                  products?.map((productElment, index) => (  
                <div className="product-card-container">                  
               <ul className="info-produc-card" key={`product-${index}`}>
                
                <h4><span>Nombre: </span>{productElment.name}</h4>
                <h4><span>Category: </span>{productElment.category}</h4>
                <h4><span>Precio: </span>{productElment.price}</h4>  
                <h4>{productElment.isAvalible != true? <button>Disponible</button>: <button>Agotado</button>}</h4> 
                </ul>    
                <div className="button2-produc-card">           
                <button onClick={() => deletProduct(productElment.id)}>Eliminar</button>
                <button onClick={( ) => editProduc(productElment)}>Actualizar</button>
                </div>
                
                </div>
                    
                    )) }
         </ul>
         
        </div>
     )
}

export default ProductsList

/* Problema a resolver:
 1- la propiedad isAvalible no imprime el valor que corresponde .

*/