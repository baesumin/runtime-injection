// import { loadScript } from "@repo/ui";
// import { useEffect, useRef } from "react";

import { MicroComponent } from "@repo/ui";

// export default function ShoppingList() {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!ref.current) return;
//     void loadScript({
//       url: "http://localhost:7002",
//       appName: "app2",
//     }).then((microApp) => {
//       microApp.default["ShoppingList"](ref.current!);
//     });
//   }, []);

//   return <div ref={ref} />;
// }

export default function ShoppingList() {
  return (
    <MicroComponent
      url="http://localhost:7002"
      appName="app2"
      componentName="ShoppingList"
    />
  );
}
