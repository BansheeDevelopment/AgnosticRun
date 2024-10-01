// AgnosticRun 0.0.1 by Banshee
// MIT License
// https://www.banshee.pro

export function agnosticRun(fn) {
    return function (elementId, ...args) {
      const element = document.getElementById(elementId);
      if (element) {
        if (!element.dataset.checked) {
          console.log(`AgnosticRun: "${elementId}" exists. Safe to run.`);
          element.dataset.checked = "true";
        }
        return fn(element, ...args);
      }
    };
  }
  