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
          <Route path="/" element={<Home/>}/> 
          <Route path="/jeans" element={<Jeans/>}/> 
          <Route path="/mylist" element={<Mylist/>}/>
          <Route path="/tshirts" element={<Tshirts/>}/>
          <Route path="/shoeses" element={<Shoeses/>}/>
          <Route path="/hats" element={<Hats/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contactus/>} />  
          <Route path="/create" element={<CreateAccount/>} />  
          <Route path="/login" element={<Login/>} />  
      </Routes>      
    </Container>
    <Footer/>
    </Router>
    </div>
  )
}

export default App
