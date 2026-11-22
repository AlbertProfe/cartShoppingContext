import { CartProvider } from "./context/CartContext";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Header />
      <Main />
    </CartProvider>
  );
}

export default App;
