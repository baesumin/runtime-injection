// import { useEffect, useRef } from "react";
// import { loadScript } from "@repo/ui";

import { MicroComponent } from "@repo/ui";

// export default function MailList() {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!ref.current) return;
//     void loadScript({
//       url: "http://localhost:7001",
//       appName: "app1",
//     }).then((microApp) => {
//       microApp.default["MailList"](ref.current!);
//     });
//   }, []);

//   return <div ref={ref} />;
// }

export default function MailList() {
  return (
    <MicroComponent
      url="http://localhost:7001"
      appName="app1"
      componentName="MailList"
    />
  );
}
