import { ModalContextProvider } from "./context/ModalContext";
import Home from "./pages/Home";

function App() {
  return (
    <ModalContextProvider>
      <div className="App">
        <Home />
      </div>
    </ModalContextProvider>
  );
}

export default App;
