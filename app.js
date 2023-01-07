import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return (
    <div>
      
    </div>
  );
}

/*
*To use react element inside component --- add it inside curly braces {}
*To use react component inside componet --- add it as a tag or call it using curly braces 
*
* When you are using JSX -- add  curly braces and add any piece of JS code in it 
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
