import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Blogs</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
