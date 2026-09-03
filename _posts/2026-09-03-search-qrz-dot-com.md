---
title: "Search QRZ.com snippet"
categories: [html,qrz]
tags: [snippet,search]
---
## QRZ.com search snippet
<script>
function searchQRZ() {
    var cs = document.getElementById('call').value;
    window.open('https://www.qrz.com/lookup/' + cs,'','height=300,width=400',true);
    document.getElementById('call').value = '';

}
</script>
<table cellpadding="9" border="0" cellspacing="0" style="border:solid 1px #000">
    <tr><td valign="center">
    <b>QRZ callsign lookup:</b>
    <input type="text" id="call" size="8" />
    <button onClick="searchQRZ();">Search</button>
    <div style="font-size:0.7em">
	Callsign lookups provided by <a href="https://www.qrz.com">qrz.com</a>
    </div>
    </td></tr>
</table>
