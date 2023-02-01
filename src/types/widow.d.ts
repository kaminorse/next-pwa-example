interface Window {
  ReactNativeWebView: {
    postMessage(message: string): void;
  };
}

declare var window: Window;
