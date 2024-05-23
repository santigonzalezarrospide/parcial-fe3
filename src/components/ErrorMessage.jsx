import ErrorStyle from "../Styles/Error.module.css"

const ErrorMessage = () => {
    return (
        <div className={ErrorStyle.errorContainer}>
            <h4>
                Por favor chequea que la información sea correcta
            </h4>
        </div>
    );
};

export default ErrorMessage;