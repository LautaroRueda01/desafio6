function Item ({item}) {
  return (
    <div>
      <h1>{item.titulo}</h1>
      <img src={item.imageUrl}/>
      <p>{item.descripcion}</p>
      <h3>${item.precio}</h3>
    </div>
  )
}

export default Item;