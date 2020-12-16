// ==UserScript==
// @name         Shodan IP Dump
// @namespace    kamikazechaser/shodan-ip-dump
// @version      0.1
// @description  Dump all IPs on a Shodan search page for easier selecting
// @author       kamikazechaser
// @match        https://www.shodan.io/search?query=*
// @grant        none
// ==/UserScript==

const ipLinks = [];

$(document).ready(function() {
    const $textArea = $("<br/><textarea id=ipList></textarea>").appendTo(".span3");
    $(".ip").each(function(i, e) {
        ipLinks.push($(this).find("a").text());
    });
  
    $("#ipList").val(ipLinks.join(" "));
});
