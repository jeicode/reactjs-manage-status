import React from 'react'

export default function Delete({onReset}) {
    return (
        <>
            <p>Eliminado con éxito</p>

            <button
                onClick={() => {
                    onReset();
                }}
            >
                Resetear, volver atrás
            </button>
        </>
    )
}
