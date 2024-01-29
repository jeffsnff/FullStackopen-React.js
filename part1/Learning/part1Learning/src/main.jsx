
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

let counter = 0;

ReactDOM.createRoot(document.getElementById('root')).render(<App counter={counter} />)