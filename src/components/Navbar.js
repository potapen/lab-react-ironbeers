import {
    Routes,
    Route,
  } from "react-router-dom"

const Navbar = () => {
    return(
        <Routes>
            <Route path='*' element={<p>navbar</p>}/>
            <Route path='/' element={<></>}/>
        </Routes>
    )
}

export default Navbar