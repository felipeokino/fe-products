import { ComponentProps } from "react";

type LayoutProps = ComponentProps<"div">;
const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="w-screen h-screen bg-zinc-900 text-white p-6">
      {children}
    </main>
  );
};

export default Layout;
