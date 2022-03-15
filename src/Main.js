const Main = (props) => {
  console.log(props.nombre)
  console.log(props.edad)
    return (
    <main>
    <h2>Bienvenido {props.nombre}!</h2>
    </main>
  )
}

export default Main;