import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

export default {
  App: (container: HTMLElement) => {
    const root = ReactDOM.createRoot(container);

    const tree = (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    root.render(tree);

    // 언마운트 함수를 반환하면 외부에서 cleanup 가능
    // return () => root.unmount();
  },
};
