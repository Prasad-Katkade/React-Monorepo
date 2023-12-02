import React, { useEffect, useState } from "react";
import { ProductCard,Pagination } from "ui";
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

interface DeleteResp {
  success: boolean;
  data: {
    temp: ProductInterface;
  };
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

      if (data?.success) {
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
  const createProduct = async (data: FormData): Promise<void> => {
    const url = "http://localhost:8000/products";
    const payload = new URLSearchParams();
    payload.append("product_name", data.get("product_name") as string);
    payload.append("image", data.get("image") as string);
    payload.append("price", data.get("price") as string);
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

  const deleteProduct = async (id: number): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:8000/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data: DeleteResp = await response.json();

      if (data.success) {
        void getProducts();
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product", error);
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
        {filteredProducts.map((prod) => {
          return (
            <ProductCard
              key={prod.id}
              {...prod}
              handleDelete={(id: number): void => {
                void deleteProduct(id)
              }}
              isAdmin
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
