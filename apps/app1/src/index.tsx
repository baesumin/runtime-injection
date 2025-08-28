import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import indexStyle from "./index.css";
import ShadowDOM from "./components/ShadowDOM";
import GlobalProvider from "./components/GlobalProvider";

const App = lazy(() => import("./App"));
const MailList = lazy(() => import("./components/MailList"));

const render = (container: HTMLElement, component: React.ReactNode) => {
  const root = ReactDOM.createRoot(container);
  const tree = (
    <React.StrictMode>
      <ShadowDOM>
        <style>{indexStyle}</style>
        <Suspense fallback="loading...">
          <GlobalProvider>{component}</GlobalProvider>
        </Suspense>
      </ShadowDOM>
    </React.StrictMode>
  );
  root.render(tree);

  return () => {
    root.unmount();
  };
};

export default {
  App: (container: HTMLElement, props?: Record<string, any>) => {
    const { basename = "" } = props ?? {};
    return render(container, <App basename={basename} />);
  },
  MailList: (container: HTMLElement) => {
    return render(container, <MailList />);
  },
};
