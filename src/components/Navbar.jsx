import { useState } from "react"

const Navbar = () => {
  const [btnName, setBtnName] = useState("Light")
  let themeChange = () => {
  btnName === "Light" ? setBtnName("Dark") : setBtnName("Light")
  }

  return (
    <div className='border-b border-black flex justify-between p-3'>
      <h1>Logo</h1>
      <ul className='flex gap-5'>
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>cart</li>
      </ul>
      <button className="cursor-pointer" onClick={themeChange}>{btnName}</button>
    </div>
  )
}

export default Navbar