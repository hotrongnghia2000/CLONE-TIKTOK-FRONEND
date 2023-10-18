import 'tippy.js/dist/tippy.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers/Routers';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routers />
      </div>
    </BrowserRouter>
  );
}

export default App;
