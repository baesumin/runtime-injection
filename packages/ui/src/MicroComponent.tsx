import { Component, createRef, ReactNode, RefObject } from "react";
import { loadScript, MicroAppProps } from "./utils";

class MicroComponent extends Component<MicroAppProps> {
  ref: RefObject<HTMLDivElement | null>;
  unmount?: () => void;
  constructor(props: MicroAppProps) {
    super(props);
    this.ref = createRef<HTMLDivElement>();
    void this.init();
  }

  async init() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.unmount && this.unmount();
    this.unmount = undefined;
    const {
      url,
      appName,
      componentName,
      mainJsName = "main.js",
      props,
    } = this.props;
    const microApp = await loadScript({ url, appName, mainJsName });
    if (!microApp) return;
    const render = microApp.default[`${componentName}`];
    if (!render) return;
    if (!this.ref.current) return;
    this.unmount = render(this.ref.current, props);
  }

  componentDidUpdate(): void {
    void this.init();
  }

  componentWillUnmount(): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.unmount && this.unmount();
    this.unmount = undefined;
  }

  render(): ReactNode {
    return <div ref={this.ref}></div>;
  }
}

export { MicroComponent };
