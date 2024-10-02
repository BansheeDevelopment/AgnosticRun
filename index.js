// AgnosticRun 0.1.3 by Banshee
// MIT License
// https://www.banshee.pro

export function agnosticRun(fn) {
  return function (elementId, ...args) {
    if (typeof elementId !== "string" || !elementId.trim()) {
      console.error(`AgnosticRun: Invalid elementId "${elementId}". It must be a non-empty string.`);
      return;
    }
    const element = document.getElementById(elementId);
    if (element) {
      if (!element.dataset.checked) {
        console.log(`AgnosticRun: "${elementId}" exists. Safe to run.`);
        element.dataset.checked = "true";
      }
      return fn(element, ...args);
    } else {
      console.warn(`AgnosticRun: Element with ID "${elementId}" does not exist, have you removed it?`);
    }
  };
}
