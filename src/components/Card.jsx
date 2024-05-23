import CardStyle from "../Styles/Card.module.css"

export const Card = ({ estudiante }) => {
  const { nombre, direccion, email } = estudiante;

  return (
    <div className={CardStyle.cardContainer}>
      <h4>Hola {nombre}, tu registro fue exitoso</h4>
      <h5>Te enviamos comprobante a tu mail: {email} y  a tu domicilio {direccion}</h5>
    </div>
  )
}
