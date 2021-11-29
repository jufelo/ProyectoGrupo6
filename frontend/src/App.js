import Navbar from "./components/Navbar";
import AppRouter from "./routers/Router";
import './App.css';

function App() {
  return (
    <div className="App">
        <div>
        <Navbar />

        </div>
        <AppRouter />
    </div>
  );
}

export default App;

