import './App.css';
import Products from './components/Products';
import { ProductsProvider } from './contexts/ProductsContext';

const App = () => {


  return (
    <div>

      <ProductsProvider>
        <Products />
      </ProductsProvider>

    </div>
  );
}

export default App;
