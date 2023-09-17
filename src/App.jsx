import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/Navbar";

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a todoSport"}/>
    </>
  )
}

export default App
