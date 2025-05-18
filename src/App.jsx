import { useEffect, useState, useRef, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  let passRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let LETTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let NUMBERS = "0123456789";
    let SPECIAL_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    let pass = ""

    if (numberAllowed) {
      LETTERS += NUMBERS
    }

    if (charAllowed) {
      LETTERS += SPECIAL_CHARS
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * LETTERS.length)
      pass += LETTERS.charAt(char)
    }

    setPassword(pass)
  }
    , [length, numberAllowed, charAllowed, setPassword])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed])



  function passwordCopy() {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 shadow-lg mb-10">
        <h1 className="text-3xl font-bold text-white text-center">
          Password Generator
        </h1>
      </div>
      <div className="flex gap-2 w-96 m-auto mt-2">
        <input
          type="text"
          className="px-3 py-2  rounded-md flex-1 border-2 border-gray-300 focus:outline-none"
          readOnly
          value={password}
          ref={passRef}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={passwordCopy}
        >
          Copy
        </button>
      </div>
      <br />
      <div className="flex gap-2 w-96 m-auto">
        <input
          className='cursor-pointer'
          type="range"
          min="8"
          max="50"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label >Length:{length}</label>


        <label >Numbers</label>
        <input
          type="checkbox"
          className="rounded"
          onChange={() => setNumberAllowed((prev) => !prev)}
        />

        <label >Character</label>
        <input
          type="checkbox"
          className="rounded"
          onChange={() => setCharAllowed((prev) => !prev)}
        />


      </div>



    </>
  )
}

export default App
