import React from 'react'

export default function ConfirmationDelete({onDelete, onReset}) {
    return (
        <>
            <p>Pedimos confirmación. ¿Tas segur@?</p>
            <button
                onClick={() => {
                    onDelete();
                }}
            >
                Sí, eliminar
            </button>
            <button
                onClick={() => {
                    onReset();
                }}
            >
                Nop, me arrepentí
            </button>
        </>
    )
}
