import { useEffect, useRef } from "react";

export default function ShoppingList() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    //@ts-ignore
    window.app2.default.ShoppingList(ref.current);
  }, []);

  return <div ref={ref} />;
}
