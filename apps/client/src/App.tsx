import React, { useEffect, useState } from "react";
import { ProductCard } from "ui";
import "./App.css";

interface ProductInterface {
  id: number;
  product_name: string;
  image: string;
  price: number;
}

interface Response {
  success: boolean;
  data: ProductInterface[];
}

function App(): JSX.Element {
  const [products, setProducts] = useState<ProductInterface[]>([]);

  async function getProducts(): Promise<void> {
    try {
      const response = await fetch("http://localhost:8000/products");
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data: Response = await response.json();

      if (data.success) {
        setProducts(data.data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products", error);
    }
  }

  useEffect(() => {
    void getProducts();
  }, []);

  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-full pb-8">
      <div className="flex flex-col items-center">
        <div className="Turborepo">Client-Products</div>
        <div className="Turborepo">Turborepo Example</div>
      </div>
      <div className="container mx-auto grid grid-cols-4 gap-8 mt-5">
        {products.map((prod) => {
          return <ProductCard key={prod.id} {...prod} />;
        })}
      </div>
    </div>
  );
}

export default App;
