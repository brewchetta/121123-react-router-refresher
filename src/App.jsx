import {NavLink, Outlet} from 'react-router-dom'

function App() {

  const navLinkStyle = ({isActive}) => { return isActive ? { color: "red" } : { color: "white" } }

  return (
    <>

      <nav>
        <NavLink style={ navLinkStyle } to='/'>Home</NavLink>
        <NavLink style={ navLinkStyle } to='/sandwiches'>Sandwiches</NavLink>
        <NavLink style={ navLinkStyle } to='/sandwiches/burgers'>Burgers</NavLink>
      </nav>
      
      
      <h1>React Router Workshop</h1>

      <Outlet />

    </>
  )
}

export default App
