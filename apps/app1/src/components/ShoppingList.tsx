import { useEffect, useRef } from "react";
import { loadScript } from "../utils";

export default function ShoppingList() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    void loadScript({
      url: "http://localhost:7002",
      appName: "app2",
    }).then((microApp) => {
      microApp.default["ShoppingList"](ref.current!);
    });
  }, []);

  return <div ref={ref} />;
}
