import React from 'react';
import { Loading } from './Loading';

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      error: false,
      loading: false,
    };
  }

  componentDidUpdate() {
    // se ejecuta cada vez que actualizamos un estado de nuestra aplicacion

    if (!!this.state.loading) {
      setTimeout(() => {  
        let error = false;
        if (SECURITY_CODE !== this.state.value) {
          error = true
        } 
        this.setState({ error, loading: false });
        
      }, 3000);
    }
  }
  
  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        
        <p>Por favor, escribe el código de seguridad.</p>

        {(this.state.error && !this.state.loading) && (
          <p>Error: el código es incorrecto</p>
        )}

        {this.state.loading && (
          <Loading />
        )}

        <input
          placeholder="Código de seguridad"
          value={this.state.value}
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
        />
        <button
          onClick={() => this.setState({ loading: true })}
        >Comprobar</button>
      </div>
    );
  }
}

export { ClassState };


  // componentWillMount() { // SE EJECUTA DESPUES DE RENDERIZAR LA APLICACION
  // UNSAFE_componentWillMount() {
  //   console.log("componentWillMount")
  // }
  
  // componentDidMount() { //  SE EJECUTA ANTES DE RENDERIZAR LA APLICACION
  //   console.log("componentDidMount")
  // }