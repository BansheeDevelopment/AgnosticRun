export function agnosticRun(options?: { debugLog?: boolean; debugWarn?: boolean }): (fn: (element: HTMLElement, ...args: any[]) => any) => (elementId: string, ...args: any[]) => void;
