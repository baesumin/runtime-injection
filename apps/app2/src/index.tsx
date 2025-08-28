import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import indexStyle from "./index.css";
import ShadowDOM from "./components/ShadowDOM";

const App = lazy(() => import("./App"));
const ShoppingList = lazy(() => import("./components/ShoppingList"));

const render = (container: HTMLElement, component: React.ReactNode) => {
  const root = ReactDOM.createRoot(container);
  const tree = (
    <React.StrictMode>
      <ShadowDOM>
        <style>{indexStyle}</style>
        <Suspense fallback="loading...">{component}</Suspense>
      </ShadowDOM>
    </React.StrictMode>
  );
  root.render(tree);
};

export default {
  App: (container: HTMLElement, props?: Record<string, any>) => {
    const { basename = "" } = props ?? {};
    render(container, <App basename={basename} />);
  },
  ShoppingList: (container: HTMLElement) => {
    render(container, <ShoppingList />);
  },
};
