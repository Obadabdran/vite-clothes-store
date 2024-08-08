import {Container} from "./components/index"
import {Home,Mylist,About,Contactus,CreateAccount,Login} from "./pages/index"
import {Header,Footer, Jeans,Tshirts, Shoeses, Hats} from "./secionts/index"

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'



function App() {
 

  return (
    <div className="bg-fuchsia-50 bg-opacity-50">
    <Router >
    <Header/>
    <Container>
      <Routes>
          <Route path="/vite-clothes-store/" element={<Home/>}/> 
          <Route path="/vite-clothes-store/jeans" element={<Jeans/>}/> 
          <Route path="/vite-clothes-store/mylist" element={<Mylist/>}/>
          <Route path="/vite-clothes-store/tshirts" element={<Tshirts/>}/>
          <Route path="/vite-clothes-store/shoeses" element={<Shoeses/>}/>
          <Route path="/vite-clothes-store/hats" element={<Hats/>}/>
          <Route path="/vite-clothes-store/about" element={<About/>}/>
          <Route path="/vite-clothes-store/contact" element={<Contactus/>} />  
          <Route path="/vite-clothes-store/create" element={<CreateAccount/>} />  
          <Route path="/vite-clothes-store/login" element={<Login/>} />  
      </Routes>      
    </Container>
    <Footer/>
    </Router>
    </div>
  )
}

export default App
