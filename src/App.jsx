import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/overview'
import Hero2 from './components/Hero2'
import './App.css'
import Body from './components/Body'
import Wrapper from './components/Wrapper'
import Lastsection from './components/lastsectionbody'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
      <div className='App'>
        <Navbar/>
        <Hero />
        <Overview/>
        <Hero2/>
        <Body/>
        <Wrapper/>
        <Lastsection/>
        <Footer/>
      </div>
     
    </>
  )
}

export default App
