import React, { Fragment, useState } from 'react';
import Error from './Error'

const Pregunta = ({guardarPresupuesto, guardarRestante}) => {

    const [cantidad, updateCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    

    const setPresupuesto = e =>{
        updateCantidad(parseInt(e.target.value, 10));
    }
    
    //Submit
    const agregarPresupuesto = e => {
        e.preventDefault();
        //Validar form
        if(cantidad < 1 || isNaN( cantidad )){
            guardarError(true);
            return;
        }
        //luego
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);

    }


    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? 
             <Error mensaje="El Presupuesto es Incorrecto"/>
             : null}

            <form onSubmit={agregarPresupuesto}>
                <input type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={setPresupuesto}                    
                    >
                </input>
                <input type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto">
                </input>
                
            </form>
        </Fragment>        
     );
}
 
export default Pregunta;