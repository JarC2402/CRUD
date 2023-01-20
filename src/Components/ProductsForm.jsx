import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

const ProductsForm = ({createProductData, selectProducData, updateData}) => {
    const {register, handleSubmit, formState: { errors }, reset} = useForm()
    
    const getFormData = data => {
        if (selectProducData){
            updateData(data)
        }else{
        data.id = Date.now()
        createProductData(data)
        resetForm()
    }}
    useEffect( () => {
        if (selectProducData != null){
            reset(selectProducData)
        }else{
            resetForm()
        }
    }, [selectProducData] )

    const resetForm = () => {
        reset(
            { 
             name: "",
             category: "",
             price: null,
             isAvalible: false
         }
         )
    }

    return (
        <div>
            <div className='input-card-container'>
                <h2>Ingresar Producto</h2>        
            <form onSubmit={ handleSubmit(getFormData) }>
                
                <div className='input-card'>
                    <div className='input-wrapper'>                    
                    <label htmlFor='product-name'>Nombre  </label>
                    <div>
                    <input
                    type='text'
                    id='product-name'
                    { ...register('name', { required: true })}
                    ></input>
                    </div>
                    {errors.name?. type == "required" &&  <span>Este campo es requerido</span>}
                    </div>
                    <div className='input-wrapper'>
                    <label htmlFor='category'>Categoria  </label>
                    <div>
                    <input
                    type='text'
                    id='category'
                    { ...register('category', { required: true })}
                    ></input>
                    </div>
                    {errors.category?. type == "required" &&  <span>Este campo es requerido</span>}
                    </div>
                    <div className='input-wrapper'>
                    <label htmlFor='price'>Precio  </label>
                    <div>
                    <input
                    type='text'
                    id='price'
                    { ...register('price', { required: true })}
                    ></input>
                    </div>
                    {errors.price?. type == "required" &&  <span>Este campo es requerido</span>}
                    </div>
                    <div className='input-wrapper'>
                    <label htmlFor='available'> Disponible </label>
                    <input
                    type='checkbox'
                    id='available'
                    { ...register('isAvailable' )}
                    ></input>
                    {errors.isAvalible?. type == "required" &&  <span>Este campo es requerido</span>}
                    </div>
                </div>
                <br/>
                <button type='submit'>Crear</button>
            </form>
            </div>
        </div>
    
    )
}

export default ProductsForm