const title = (
  <a href="/">
    <img
      className="logo"
      src="https://graphicriver.img.customer.envatousercontent.com/files/108993892/Preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1e2963d89741c8472bf471555549a04d"
      alt="logo"
    ></img>
  </a>
);
 
const Header = () => {
  return (
    <div className="header">
      {title}
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header