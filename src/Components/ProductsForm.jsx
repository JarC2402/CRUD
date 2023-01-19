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
             id: null,
             isAvalible: false
         }
         )
    }

    return (
        <div>
            <form onSubmit={ handleSubmit(getFormData) }>
                <div className='input-wrapper'>
                    <div>                    
                    <label htmlFor='product-name'>Nombre</label>
                    <input
                    type='text'
                    id='product-name'
                    { ...register('name', { required: true })}
                    ></input>
                    {errors.name?. type == "required" &&  <span>Este campo es requerido</span>}
                    </div>
                    <div>
                    <label htmlFor='category'>Categoria</label>
                    <input
                    type='text'
                    id='category'
                    { ...register('category', { required: true })}
                    ></input>
                    {errors.category?. type == "required" &&  <span>Este campo es requerido</span>}
                    </div>
                    <div>
                    <label htmlFor='price'>Precio</label>
                    <input
                    type='text'
                    id='price'
                    { ...register('price', { required: true })}
                    ></input>
                    {errors.price?. type == "required" &&  <span>Este campo es requerido</span>}
                    </div>
                    <div>
                    <label htmlFor='available'>Disponible</label>
                    <input
                    type='checkbox'
                    id='available'
                    { ...register('isAvailable' )}
                    ></input>
                    {errors.price?. type == "required" &&  <span>Este campo es requerido</span>}
                    </div>
                </div>
                <button type='submit'>Crear</button>
            </form>
        </div>
    )
}

export default ProductsForm