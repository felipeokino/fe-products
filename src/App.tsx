import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/layout";
import Home from "./pages/Home";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Home />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
