/**
 * AgnosticRun 0.2.11 by Banshee Development
 * MIT License
 * https://www.banshee.pro
 *
 * A utility function that safely runs a given function
 * on a DOM element if the element exists. It logs or warns
 * based on customizable debug flags set globally.
 *
 * Copyright (c) 2024 Banshee
 */

let globalDebugLog = false;
let globalDebugWarn = false;

export function agnosticRun({ debugLog = false, debugWarn = false } = {}) {
  globalDebugLog = debugLog;
  globalDebugWarn = debugWarn;

  return function (fn) {
    return function (elementId, ...args) {
      if (typeof elementId !== "string" || !elementId.trim()) {
        if (globalDebugWarn) {
          console.error(`AgnosticRun: Invalid elementId "${elementId}". It must be a non-empty string.`);
        }
        return;
      }

      const element = document.getElementById(elementId);
      if (element) {
        if (!element.dataset.checked) {
          if (globalDebugLog) {
            console.log(`AgnosticRun: "${elementId}" exists. Safe to run.`);
          }
          element.dataset.checked = "true";
        }
        return fn(element, ...args);
      } else {
        if (globalDebugWarn) {
          console.warn(`AgnosticRun: Element with ID "${elementId}" does not exist, have you removed it?`);
        }
      }
    };
  };
}
