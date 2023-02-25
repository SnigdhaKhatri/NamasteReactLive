import ReactDOM from "react-dom/client";

// importing a thing which is named export
// import {title} from "./components/Header";

// importing a thing which is default export
// import Header from "./components/Header";

//we can write both the lines at once like this
import Header from "./components/Header"
// since it is a default import, this name can be anything, doest matter, but good practice to to use the same name
// import NewHeader from "./components/Header";

//or we can import like this at once and then use everything which is exported from header
// import * as Obj from './components/Header'
// Obj.title

import Body from "./components/Body"
import Footer from "./components/Footer";


const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
