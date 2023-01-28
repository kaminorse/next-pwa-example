

/**
 * React Native
 * @returns boolean
 */
function isDisplayModeStandalone(): boolean {
  return typeof window !== "undefined" && window.matchMedia('(display-mode: standalone)').matches;
}


const powerWebAppUtility = {
  isDisplayModeStandalone,
}

export default powerWebAppUtility;
