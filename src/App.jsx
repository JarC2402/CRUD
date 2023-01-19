import { useState } from 'react'
import './App.css'
import ProductsForm from './Components/ProductsForm'
import ProductsList from './Components/ProductsList'
import productData from './data/productData'

function App() {
  const [products, setProducts] = useState(productData)
  const [productUpdate, setProductUpdate] = useState(null)
  

  const addProduct = (data) => {
    setProducts  ([...products, data])
    console.log("new Prodc", products);
  }

  const deletProduct = (productId) => {
    

    const filterProduct = products.filter( product => product.id != productId)

    setProducts(filterProduct)
  }

  const editProduc = (selecProduc) => {
    setProductUpdate(selecProduc)
  }

  const updateData = (newProducData) => {
   const index = products.findIndex ((findProduct) => findProduct.id == newProducData.id)
   products[index] = newProducData
   setProducts ([...products])
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
