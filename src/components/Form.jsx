import { useState } from "react";
import { Card } from "./Card";
import ErrorMessage from "./ErrorMessage";
import FormStyle from "../Styles/Form.module.css"

export const Form = () => {

    const [estudiante, setEstudiante] = useState({
        nombre: "",
        direccion: "",
        email: "",
    });

    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (estudiante.nombre.length > 3 && !/^\s/.test(estudiante.nombre) && estudiante.direccion.length > 6 && regex.test(estudiante.email)) {
            setShow(true);
            setError(false);
        } else {
            setError(true);
            setShow(false);
        }
    };

    return (
        <div >
            <form className={FormStyle.formContainer} onSubmit={handleSubmit}>
                <label>Nombre del estudiante: </label>
                <input className={FormStyle.inputContainer} type="text" value={estudiante.nombre}
                    onChange={(event) => setEstudiante({
                        ...estudiante, nombre: event.target.value
                    })} />

                <label>Dirección: </label>
                <input className={FormStyle.inputContainer} type="text" value={estudiante.direccion}
                    onChange={(event) => setEstudiante({
                        ...estudiante, direccion: event.target.value
                    })} />

                <label>Email: </label>
                <input className={FormStyle.inputContainer} type="email" value={estudiante.email}
                    onChange={(event) => setEstudiante({
                        ...estudiante, email: event.target.value
                    })}
                />

                <button className={FormStyle.btn}>Registrarse</button>
            </form>

            {show ? <Card estudiante={estudiante} /> : null}
            {error && <ErrorMessage />}
        </div>
    )
}

