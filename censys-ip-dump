// ==UserScript==
// @name         Censys IPv4 Dump
// @namespace    kamikazechaser/censys-ip-dump
// @version      0.1
// @description  Dump all IPs on a Censys search page for easier selecting
// @author       kamikazechaser
// @match        https://censys.io/ipv4
// ==/UserScript==

const ipLinks = [];

$(document).ready(function() {
    const $textArea = $("<br/><textarea id=ipList></textarea>").appendTo("#leftbar");
    $(".SearchResult__title-text").each(function(i, e) {
        ipLinks.push($(this).find("span").attr("id"));
    });
  
    $("#ipList").val(ipLinks.join(" "));
});
