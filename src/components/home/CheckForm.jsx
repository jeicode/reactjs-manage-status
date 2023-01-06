import React from 'react'

export default function CheckForm({state, onCheck, onWrite}) {
    
    return (
        <div>
            <h2>Manejo del estado</h2>

            <p>Por favor, escribe el código de seguridad.</p>

            { state.loading && <p>Cargando...</p> }

            {(state.error && !state.loading) && (
                <p>Error: el código es incorrecto</p>
            )}
            <form onSubmit={(e) => {
                e.preventDefault()
                onCheck()
            }}>
                <input
                    placeholder="Código de seguridad"
                    value={state.value}
                    onChange={(event) => onWrite(event.target.value)
                    }
                />
                <button type='submit'>Comprobar</button>
            </form>
        </div>
    )
}
