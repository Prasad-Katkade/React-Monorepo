import React, { useEffect, useState } from "react";
import { ProductCard } from "ui";
import "./App.css";
import { ProductForm } from "./Components/ProductForm";

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
  const createProduct = async (data: FormData): Promise<void> => {
    const url = "http://localhost:8000/products";
    const payload = new URLSearchParams();
    payload.append("product_name", data.get("product_name") as string);
    payload.append("image", data.get("image") as string);
    payload.append("price", data.get("price") as string);
    console.log("data", payload, url);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload.toString(),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const responseData = await response.json();
      console.log("Product created successfully:", responseData);
      void getProducts();
    } catch (error) {
      console.error("Error creating product", error);
    }
  };
  useEffect(() => {
    void getProducts();
  }, []);
  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  w-full pb-8 ">
      <div className="flex flex-col items-center">
        <div className="Turborepo">Admin-Products</div>
        <div className="Turborepo">Turborepo Example</div>
      </div>
      <div className="container mx-auto mt-5">
        <ProductForm
          handleSubmit={(formData: FormData): void => {
            void createProduct(formData);
          }}
        />
      </div>
      <div className="container mx-auto grid grid-cols-4 gap-8 mt-5">
        {products.map((prod) => {
          return <ProductCard key={prod.id} {...prod} isAdmin/>;
        })}
      </div>
    </div>
  );
}

export default App;
