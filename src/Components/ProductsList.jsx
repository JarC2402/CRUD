const ProductsList = ({products, deletProduct, editProduc}) => {
    
    
    return(
        <ul>
            {
                products?.map((productElment, index) => (                    
            <li key={`product-${index}`}>
            <h4><span>Nombre: </span>{productElment.name}</h4>
            <h4><span>Category: </span>{productElment.category}</h4>
            <h4><span>Precio: </span>{productElment.price}</h4>  
            <h4><span>Disponible: </span>{productElment.isAvalible === true? <span>disponible</span> : <span>Agotado</span>}</h4>             
            <button onClick={() => deletProduct(productElment.id)}>Eliminar</button>
            <button onClick={( ) => editProduc(productElment)}>Actualizar</button>
            </li>
                 
                 )) }
         </ul>
     )
}

export default ProductsList

/* Problema a resolver:
 1- la propiedad isAvalible no imprime el valor que corresponde .

*/