import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/Home'>Home</Link>
        </li>
        <li>
          <Link to='/News'>Noticias</Link>
        </li>
        <li>
          <Link to='/Cart'>Carrito</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
