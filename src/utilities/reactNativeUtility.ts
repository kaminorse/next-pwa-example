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

const reactNativeUtility = {
  isReactNative,
};

export default reactNativeUtility;
