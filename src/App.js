import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  //Use effect para actualizar el restante
  useEffect(() => {
      if(crearGasto){
        guardarGastos([
          ...gastos,
          gasto
        ]);

        //Resta del presupuesto actual        
        guardarRestante(restante - gasto.cantidad);

        //Resetear a false
        guardarCrearGasto(false);
      }
  }, [gasto, crearGasto, gastos, restante]);

  return (
    <div className="container">
        <header>
          <h1>Gasto Semanal</h1>

          <div className="contenido-principal contenido">
            
            {presupuesto > 0 ? (
                  <div className="row">
                    <div className="one-half column">
                      <Formulario  
                      guardarGasto={guardarGasto}
                      guardarCrearGasto = {guardarCrearGasto}
                      />
                    </div>
                    <div className="one-half column">
                      <Listado gastos={gastos} />

                      <ControlPresupuesto 
                        presupuesto={presupuesto} 
                        restante={restante}/>                      
                    </div>                   
                  </div>
            ) :
                (
                  <Pregunta 
                    guardarPresupuesto={guardarPresupuesto}
                    guardarRestante={guardarRestante}
                  />
                )
             }
          </div>          
        </header>
    </div>
  );
}

export default App;
