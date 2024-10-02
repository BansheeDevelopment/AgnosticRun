/**
 * AgnosticRun 0.2.5 by Banshee Development
 * MIT License
 * https://www.banshee.pro
 *
 * A utility function that safely runs a given function
 * on a DOM element if the element exists. It logs or warns
 * based on customizable debug flags.
 *
 * Copyright (c) 2024 Banshee
 */

export function agnosticRun({ debugLog = false, debugWarn = false } = {}) {
  function fn(element, ...args) {
    return element;
  }

  return function (elementId, ...args) {
    if (typeof elementId !== "string" || !elementId.trim()) {
      if (debugWarn) {
        console.error(`AgnosticRun: Invalid elementId "${elementId}". It must be a non-empty string.`);
      }
      return;
    }
    const element = document.getElementById(elementId);
    if (element) {
      if (!element.dataset.checked) {
        if (debugLog) {
          console.log(`AgnosticRun: "${elementId}" exists. Safe to run.`);
        }
        element.dataset.checked = "true";
      }
      return fn(element, ...args);
    } else {
      if (debugWarn) {
        console.warn(`AgnosticRun: Element with ID "${elementId}" does not exist, have you removed it?`);
      }
    }
  };
}
