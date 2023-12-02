import React, { useEffect, useState } from "react";
import { ProductCard, Pagination } from "ui";
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
  const [totalPages, setTotalPages] = useState<number>(0);
  const [filteredProducts, setFilteredProduct] = useState<ProductInterface[]>(
    []
  );

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
        const total = Math.ceil(data.data.length / 10);
        setTotalPages(total);
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
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-full min-h-screen pb-8">
      <div className="flex flex-col items-center">
        <div className="Turborepo">Client-Products</div>
        <div className="Turborepo text-center">Turborepo Example</div>
      </div>
      <div className="container mx-auto grid grid-cols-1 p-1 md:grid-cols-4 gap-8 mt-5">
        {filteredProducts.map((prod) => {
          return (
            <ProductCard
              key={prod.id}
              {...prod}
              handleReadMore={(id: number): void => {
                alert(`ID - ${id}`)
              }}
            />
          );
        })}
      </div>
      {products.length > 0 && (
        <Pagination
          handlePageChange={(
            indexOfLastItem: number,
            indexOfFirstItem: number
          ): void => {
            const temps: ProductInterface[] = products;
            const filtered = temps.slice(indexOfFirstItem, indexOfLastItem);
            setFilteredProduct(filtered);
          }}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}

export default App;
