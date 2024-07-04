import React, {useState, useRef, useCallback} from "react";

export default function Cronometro () {
    const Cronometro = () => {

        const [segundos, setSegundos] = useState(0);
        const[isActive, setIsActive] = useState(false);
        const intervalRef = useRef(null);
    
        const iniciarCronometro = () => {
            setIsActive(true);
            intervalRef.current = setInterval(() => {
                setSegundos(segundos => segundos + 1);
                }, 1000);
    
    
    
        };
        const pausarCronometro = () => {
            clearInterval(intervalRef.current);
            setIsActive(false);
        };
        const zerarCronometro = () => {
            clearInterval(intervalRef.current);
            setIsActive(false);
            setSegundos(0);
    
    
        };
        return(
            <div className="cronometro">
                <h1>{segundos}s</h1>
                <div className="botoes">
                    {!isActive? (
                        <button onClick={iniciarCronometro}>Iniciar</button>
                    )
                    : (<button onClick={pausarCronometro}>Iniciar</button>
                    )}
                    <button onClick={zerarCronometro}>Zerar</button>
                </div>
                
            </div>
        );
    
    }
}
