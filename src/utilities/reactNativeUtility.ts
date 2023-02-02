import ReactNativeAction from "@/models/ReactNativeAction";

/**
 * React Native
 * @returns boolean
 */
function isReactNative(): boolean {
  return (
    typeof window !== "undefined" &&
    window.ReactNativeWebView &&
    window.ReactNativeWebView !== undefined &&
    window.ReactNativeWebView !== null
  );
}
function postMessage(message: string): void {
  if (!isReactNative()) {
    return;
  }
  window.ReactNativeWebView.postMessage(message);
}

function postAction<Payload>(action: ReactNativeAction<Payload>): void {
  if (!isReactNative()) {
    return;
  }
  window.ReactNativeWebView.postMessage(JSON.stringify(action));
}

const reactNativeUtility = {
  isReactNative,
  postMessage,
  postAction,
};

export default reactNativeUtility;
