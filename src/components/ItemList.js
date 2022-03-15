import Item from "./Item"

function ItemList({items}) {
  return (
    <section>
        {items.map(item => {
            return (
            <div id="items-layout">
              <Item key={item.id} item={item}/>
            </div>
          )
       })}
    </section>
  )
}

export default ItemList;