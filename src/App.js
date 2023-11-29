import Navigation from "./components/navigat/navigation";
import Header from "./components/Header/Header";

import Latest from "./components/Latest/Latest";

import Highly from "./components/Highly/Highly";
import Success from "./components/success/Success";

import Award from "./components/Award/Award";

// import About from "./components/About/About";
import Workhistory from "./components/Work history/Workhistory";
import  College from "./components/College/College";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Navigation/>
    
      <Header/>
      {/* <About/> */}
      <Workhistory className="work"/>
      <College/>
      <Award/>
      <Highly/>
      <Success/>
      <Latest/>
      <Footer/>
      
    </div>
  );
}

export default App;