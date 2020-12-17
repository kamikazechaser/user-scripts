// ==UserScript==
// @name        Github auto dark mode
// @namespace   kamikazechaser/auto-light-mode
// @match       https://github.com/*
// @grant       none
// @version     1.0
// @author      kamikazechaser
// @description 12/16/2020, 7:09:34 PM
// ==/UserScript==

// loading effect causes a slight blink of dark mode

const now = new Date();
if (now.getHours() < 18) document.documentElement.setAttribute("data-color-mode", "light");
