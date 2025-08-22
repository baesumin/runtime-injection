import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import indexStyle from "./index.css";
import ShadowDOM from "./components/ShadowDOM";

const App = lazy(() => import("./App"));

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
  App: (container: HTMLElement) => {
    render(container, <App />);
  },
};
