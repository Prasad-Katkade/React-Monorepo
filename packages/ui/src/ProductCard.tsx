import React from "react";

interface ProductInterface {
  id: number;
  product_name: string;
  image: string;
  price: number;
  isAdmin?:boolean;
  handleReadMore?:(id:number)=>void
  handleDelete?:(id:number)=>void
}

export function ProductCard({
  id,
  // eslint-disable-next-line camelcase
  product_name,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  image,
  price,
  isAdmin,
  handleReadMore,
  handleDelete
}: ProductInterface): JSX.Element {
  // eslint-disable-next-line camelcase
  const productName = product_name;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* <a href="https://google.com">
          <img
            alt=""
            className="rounded-t-lg w-full h-64"
            src={image}
          />
        </a> */}
      <div className="p-5 h-full flex flex-col justify-between">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {productName} - {`${price} $`}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard
          </p>
        </div>
        <div className="flex justify-between">
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={(): void => {
              handleReadMore ? handleReadMore(id):null;
            }}
            type="button"
          >
            Read more
            <svg
              aria-hidden="true"
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              fill="none"
              viewBox="0 0 14 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5h12m0 0L9 1m4 4L9 9"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>
          {isAdmin ? <button
            className="text-white inline-flex items-center bg-red-700  hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm  px-3 py-2  text-center  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            type="button"
            onClick={():void=>{handleDelete? handleDelete(id):null}}
          >
            Delete
            <svg
              className="w-3.5 h-4.5 ms-2"
              viewBox="0,0,256,256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="#f6f6f6"
                fill-rule="nonzero"
                font-family="none"
                font-size="none"
                font-weight="none"
                stroke="none"
                stroke-dasharray=""
                stroke-dashoffset="0"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-width="1"
                text-anchor="none"
              >
                <g transform="scale(8.53333,8.53333)">
                  <path d="M14.98438,2.48633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v0.5h-5.5c-0.26757,-0.00363 -0.52543,0.10012 -0.71593,0.28805c-0.1905,0.18793 -0.29774,0.44436 -0.29774,0.71195h-1.48633c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h18c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587h-1.48633c0,-0.26759 -0.10724,-0.52403 -0.29774,-0.71195c-0.1905,-0.18793 -0.44836,-0.29168 -0.71593,-0.28805h-5.5v-0.5c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212zM6,9l1.79297,15.23438c0.118,1.007 0.97037,1.76563 1.98438,1.76563h10.44531c1.014,0 1.86538,-0.75862 1.98438,-1.76562l1.79297,-15.23437z" />
                </g>
              </g>
            </svg>
          </button> : null}
          
        </div>
      </div>
    </div>
  );
}
