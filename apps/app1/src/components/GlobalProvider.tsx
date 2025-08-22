import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import { createCache, StyleProvider } from "@ant-design/cssinjs";
import { useShadowDOM } from "./ShadowDOM";

const chace = createCache();

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const shadowRoot = useShadowDOM();
  return (
    <Provider store={store}>
      <StyleProvider
        cache={chace}
        container={shadowRoot as unknown as HTMLElement}
      >
        {children}
      </StyleProvider>
    </Provider>
  );
}
