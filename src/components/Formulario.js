import React, {useState} from 'react';
import Error from './Error';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {
    
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    const [keyGen, updateKey] = useState(0);

    const uuid = () => {
        let newUid = keyGen + 1;
        updateKey(newUid);
        return newUid;
    }


    const agregarGasto = e =>{
        e.preventDefault();

        //Validar
        if(cantidad < 1 || isNaN( cantidad || nombre.trim() === '')){
            guardarError(true);
            return;
        }

        guardarError(false);
        //Construir el gasto
        const gasto = {nombre, cantidad, id: uuid()}

        //Pasar el gasto al componente principal         
        guardarGasto(gasto);
        guardarCrearGasto(true);
        //resetear el form

        guardarNombre('');
        guardarCantidad(0);

    }

    return ( 
        <form onSubmit={agregarGasto}> 
            <h2>Agrega tus gastos aquí</h2>

            {error ? 
            <Error mensaje='Ambos campos son obligatorios'/> 
            : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                    <input type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value) }
                    >
                </input>
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                    <input type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseFloat(e.target.value, 10)) }
                    >
                </input>
            </div>

            <input type="submit" className="button-primary u-full-width" 
            value="Agregar Gasto"></input>

        </form>
     );
}
 
export default Formulario;