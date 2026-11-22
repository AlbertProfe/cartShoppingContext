import { Product } from "../Product/Product";

export function ProductList() {
  return (
    <ul>
      <Product id="keyboard" name="Keyboard" price={49} />
      <Product id="mouse" name="Mouse" price={25} />
    </ul>
  );
}
