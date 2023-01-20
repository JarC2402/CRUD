import { useState, useEffect } from 'react'
import './App.css'
import ProductsForm from './Components/ProductsForm'
import ProductsList from './Components/ProductsList'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])
  const [productUpdate, setProductUpdate] = useState(null)
  
useEffect(() => {
  axios.get("https://products-crud.academlo.tech/products/")
  .then(resp => setProducts(resp.data))
  .catch(error => console.error.log(error))
}, [])

const getApiData = () => {
  axios.get("https://products-crud.academlo.tech/products/")
  .then(resp => setProducts(resp.data))
  .catch(error => console.error.log(error))
}

  const addProduct = (data) => {
    axios
    .post("https://products-crud.academlo.tech/products/", data)
    .then( () => getApiData())
    .catch(error => console.error.log(error))
  }



  const deletProduct = (productId) => {
  axios
  .delete(`https://products-crud.academlo.tech/products/${productId}/`)    
  .then(() => getApiData() )
  .catch(error => console.error.log(error))
  }

  const editProduc = (selecProduc) => {
    setProductUpdate(selecProduc)
  }

  const updateData = (newProducData) => {
   axios
   .put(`https://products-crud.academlo.tech/products/${newProducData.id}/`, newProducData) 
   .then(() => getApiData() )
   .catch((error) => console.error(error));

   setProductUpdate(null)
  }
  

  return (
    <div className="App">
    <ProductsForm
    createProductData={(data) => addProduct(data) }
    selectProducData={productUpdate}
    updateData={updateData}
    />
    <ProductsList
    products={products}
    deletProduct={deletProduct}
    editProduc={editProduc}
    />
    </div>
  )
}

export default App
