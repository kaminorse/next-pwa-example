

/**
 * React Native
 * @returns boolean
 */
function isReactNative(): boolean {
  return typeof window !== "undefined" && window.ReactNativeWebView;
}


const reactNativeUtility = {
  isReactNative,
}

export default reactNativeUtility;
