# AgnosticRun

AgnosticRun is a lightweight utility for ensuring a DOM element exists before executing a function in vanilla JavaScript.

## Installation

```bash
npm install agnosticrun

## Usage

import { agnosticRun } from 'agnosticrun';

function updateElement(element, text) {
  element.textContent = text;
}

const safeUpdate = agnosticRun(updateElement);
safeUpdate('element-id', 'Hello, World!');
