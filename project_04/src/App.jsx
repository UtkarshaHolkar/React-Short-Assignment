import { useState, useCallback , useEffect, useRef} from 'react'


// useCallback hook is used to optimize the code.
// Basically this hook will store the function in (cache/memory) and jitna use lgra h krlo baaki k nhi



function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberallowed] =useState(false);
  const [characterAllowed, setCharacterallowed] =useState(false);
  const [password, setPassword] =useState("");

  // kisi bhi chiz k jb reference lena ho toh useref hook use hga

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
    //  with the help of this string we are gonna create our password
     if (numberAllowed) str += "0123456789"
     if( characterAllowed) str += "!@#$%^&*_-+=[]{}~`"

     for (let i = 1; i <=  length; i++) {
      let char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char);
     }

     setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword])
  //setPassword yaha pr optimization k liye use kiya h memoization k concept 

const copyPasswordToClipboard = useCallback(()=>{

  // useref hook is used here, this is going to select the text whatever we have copied.

  passwordRef.current?.select
  

  // This below line is used to copy that password we are generating
     window.navigator.clipboard.writeText(password)
},[password]);

  useEffect(()=>{passwordGenerator()},[length,  numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-red-400 bg-gray-700'>
      <h1 className=' text-white text-center my-3'>Password generator</h1><div className='flex shadow rounded-lg overflow-hidden mb-4'>
         <input 
         type='text'
         value={password}
         className='outline-none w-full py-1 px-3'
         placeholder='password'
         readOnly
         ref={passwordRef}
         />
         <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberallowed((prev)=>!prev);
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={characterAllowed}
            id='characterInput'
            onChange={()=>{
              setCharacterallowed((prev)=>!prev);
            }}
          />
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
