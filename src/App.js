import logo from './logo.svg';
import './App.css';
import { createContext, useEffect, useState, useContext, useRef, useMemo, useCallback } from 'react';
//usecontext
const globalcontex = createContext()
function App() {
  //var color = 'red'
  //usestate
  const [color, setcolor] = useState('red')
  const [count, setcount] = useState(0)
  const clickhandle = () => setcolor(color == "green" ? "red" : "green");
  //useEffect
  useEffect(() => {
    setTimeout(() => {
      setcount((count) => count + 1);
    }, 100);
  }, [color])
  return (
    <globalcontex.Provider value={color}>
      <div><p>The color is {color}</p>
        <p>the count is {count}</p>
        <button onClick={clickhandle}>Click to change color</button>
        <Home />
      </div></globalcontex.Provider>
  );
}
function Home() {
  //usestate
  const [count1, setcount1] = useState(0)
  const [input, setinput] = useState("")
  var [txt, settxt] = useState("hari")
  //usecontext
  const color = useContext(globalcontex);
  //useRef
  const previousvalue = useRef("")
  //function for usecallback and usecallback
  const txt1 = useCallback(() => { callback() }, [])
  function callback() {
    settxt(txt + "i")
    console.log(txt)
    return txt
  }
  //function for usememo and usememo

  const letter = useMemo(tst, [txt])
  function tst() {
    setcount1(count1 + 1)
    return txt[2]
  }
  //useeffect for useRef
  useEffect(() => { previousvalue.current = input }, [input])
  return (
    <div>
      <p>the color is {color}</p>
      <input
        value={input}
        type='text'
        onChange={(e) => setinput(e.target.value)}
      ></input>
      <h3>Current value {input}</h3>
      <h3>Previous value {previousvalue.current}</h3>
      <h4>usememo {letter}</h4>
      <h4>usememo called {count1} times</h4>
      <button onClick={txt1}>useCallbacks</button>
      <h4>Text is {txt}</h4>
    </div>
  );
}

export default App;
