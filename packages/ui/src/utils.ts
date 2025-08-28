/* eslint-disable @typescript-eslint/no-explicit-any */
export interface MicroAppProps {
  url: string;
  appName: string;
  componentName: string;
  props?: Record<string, any>;
  mainJsName?: string;
}

export interface MicroApp {
  default: Record<
    string,
    (container: HTMLElement, props?: Record<string, any>) => () => void
  >;
}

export const loadScript = async ({
  url,
  appName,
  mainJsName = "main.js",
}: Omit<MicroAppProps, "componentName" | "props">): Promise<MicroApp> => {
  const microApp = window[`${appName}`];
  if (microApp) {
    return Promise.resolve(microApp);
  }

  return new Promise((resolve, reject) => {
    try {
      const script = document.createElement("script");
      script.src = `${url}/${mainJsName}`;
      script.onload = () => {
        const microApp = window[`${appName}`];
        if (microApp) {
          resolve(microApp);
        } else {
          reject(new Error(`${appName} loading 오류`));
        }
      };
      script.onerror = () => {
        reject(new Error(`${appName} loading 오류`));
      };

      document.head.append(script);
    } catch (error) {
      reject(new Error(`${appName} loading 오류: ${error}`));
    }
  });
};

declare global {
  interface Window {
    [key: string]: MicroApp | undefined;
  }
}
