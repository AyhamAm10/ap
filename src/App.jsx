import Hero from "./componant/Hero"
import Navbar from "./componant/Navbar"
import Hieghlight from "./componant/Hieghlight"
import Model from "./componant/Model"
import Features from "./componant/Features"
import HowItWork from "./componant/HowItWork"
import Footer from "./componant/Footer"



function App() {


  return (
   <main className="bg-black"> 
      <Navbar />
      <Hero />
      <Hieghlight />
      <Model />
      <Features />
      <HowItWork />
      <Footer />
   </main>
  )
}

export default App
