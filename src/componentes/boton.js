import React from "react";


function Boton({texto, esBotonDeClick, eventClick}) {
    return(
        <button className={esBotonDeClick ? "boton-clip":"boton-reiniciar"} onClick={eventClick}>
            {texto}
        </button>
    )
}
export default Boton;