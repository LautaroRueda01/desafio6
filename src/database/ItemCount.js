import { useState } from "react"

const ItemCount = () => {

const inicial = 1
const stock = 5

let [estado, setEstado] = useState(inicial)

const handleSumar = () => {
    if(estado < stock){
    setEstado(estado + 1)
    }
}
    
    const handleRestar = () => {
        if(estado > 1)
      setEstado(estado - 1)
    }
    
    const onAdd= () => {
    setEstado(1)
    console.log(estado + "artículos han sido comprados")
    }

return (
    <div id="articulo">
    <h3>Artículo</h3>
    <button onClick={handleSumar}>+</button>
    <p>Cantidad: {estado}</p>
    <button onClick={handleRestar}>-</button>
    <button onClick={onAdd}>Agregar al carrito</button>
    </div>
)
}

export default ItemCount;