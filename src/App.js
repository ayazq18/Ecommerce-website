import { useState } from 'react';
import NavBar from './NavBar'
import About from './About'
function App() {
  const [count, setCount] = useState(0);

  const increaseCount = ()=>{
    setCount(count+1);
  }

  return (
    <div>
      <NavBar count={count}/>
      <About setCount={increaseCount}/>
    </div>
  );
}

export default App;
