import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import QrCode from "./assets/images/image-qr-code.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-full w-full justify-center items-center bg-[#d6e2f0] font-[outfit]">

      <div className='flex flex-col justify-center items-center w-[262px] bg-white p-3 rounded-2xl'>
        <img src={QrCode} alt="qrcode" className='rounded-2xl ' />
        <div className='text-center mt-6'>
          <h1 className='text-lg mb-4'> <strong>Improve your front-end skills by building projects</strong></h1>
          <p className='text-sm mb-4'>Scan the QR code to visit Frontend Mentor and take your coding to the next level</p>
        </div>
      </div>

    </div>
  )
}

export default App
