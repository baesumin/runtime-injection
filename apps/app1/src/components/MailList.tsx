import { useShaDOM } from "./ShadowDOM";

export default function MailList() {
  const shadowRoot = useShaDOM();
  console.log(shadowRoot);
  return <></>;
}
