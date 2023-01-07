import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return (
    <div className="navBar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
      ></img>
      <input type="text" placeholder="Search.." />
      <img
        className="user"
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
      ></img>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
