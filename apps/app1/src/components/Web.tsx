// import { loadScript } from "@repo/ui";
// import { useEffect, useRef } from "react";

import { MicroComponent } from "@repo/ui";

// export default function Web() {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!ref.current) return;
//     void loadScript({
//       url: "http://localhost:7002",
//       appName: "app2",
//     }).then((microApp) => {
//       microApp.default["App"](ref.current!, { basename: "/web" });
//     });
//   }, []);

//   return <div ref={ref} />;
// }

export default function Web() {
  return (
    <MicroComponent
      url="http://localhost:7002"
      appName="app2"
      componentName="App"
      props={{ basename: "web" }}
    />
  );
}
