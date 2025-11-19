import { createRoot } from 'react-dom/client';
import './index.scss'

function App() {
  return <div className="app">React Webpack Typescript Starter</div>
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);