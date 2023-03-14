import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Logo from "./components/Logo"
import Main from "./components/Main"
import DataContextProvider from "./context/DataContext"

function App() {
  return (
    <DataContextProvider>
      <div className="App">
        <Header />
        <Logo />
        <Main />
        <Footer />
      </div>
    </DataContextProvider>
  )
}

export default App
