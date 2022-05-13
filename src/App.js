import './App.css';
import { Button } from './components/res_button';

function App() {
  return (
    <div className="App">
      <Button onClick={()=>{console.log("Cliked me!")}}
      type="button"
      buttonStyle="btn--primary--outline"
      buttonSize="btn--small"
      > Buy Now  </Button>
    </div>
  );
}

export default App;
