import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e)=> {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // evita que se actualize la página

        if( inputValue.trim().length > 2){
            setCategories(cats => [ inputValue, ...cats ]); // solo con la referencia a setCategories, es posible obtener "las categorías anteriores"
            setInputValue('');
        }
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input
                type="text"
                value= { inputValue }
                onChange = { handleInputChange }
                />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}