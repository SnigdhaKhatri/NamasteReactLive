import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return (
    <div className="navBar">
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"></img>
      <input type="text" placeholder="Search.." />
      <img className="user" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"></img>
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
