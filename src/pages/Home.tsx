import { ProductsTable } from "./ProductsTable";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-4xl font-bold">Products</h1>
      <ProductsTable />
    </div>
  );
};

export default Home;
