import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import ItemListContainer from "./components/ItemListContainer"

const App = () => {
  return (
    <>
    <Header/>
<Main nombre="Lautaro" edad="19"/>
<ItemListContainer proximamente="Nuestro catálogo"/>
<Footer/>
</>
  )
}

export default App;