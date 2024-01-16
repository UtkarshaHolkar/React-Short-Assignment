import './App.css'
import Card from './components/Card'

function App() {
 
  let myobj1 = {
    name: "hi ",
    age : 29
  }
  let myArr = [1,2,3];

  return (
    <>
<h1 className='bg-slate-400 text-black p-4 rounded-xl mb-4'>Tailwind css test</h1>
<Card username = "utk" newone = {myobj1} />
<Card username = "sha" newone = {myArr} />
    </>
  )
}

export default App
