import { useSelector } from "react-redux";
import { useShaDOM } from "./ShadowDOM";
import { emailSelector } from "../store/store";

export default function MailList() {
  const shadowRoot = useShaDOM();
  console.log(shadowRoot);
  const emails = useSelector(emailSelector);
  return <>hi</>;
}
