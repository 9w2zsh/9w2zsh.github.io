---
# the default layout is 'page'
icon: fas fa-broadcast-tower
order: 4
---

<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <div style="min-width: 200px; text-align: right; width: 100%;">
    <nav>
      <a href="#" onclick="showTab('radio'); return false;" style="margin-right: 10px;">Radio</a>
      <a href="#" onclick="showTab('allstarlink'); return false;" style="margin-right: 10px;">AllStarLink</a>
      <a href="#" onclick="showTab('dmr'); return false;" style="margin-right: 10px;">DMR</a>
      <a href="#" onclick="showTab('ysf'); return false;" style="margin-right: 10px;">YSF</a>
      <a href="#" onclick="showTab('pistar'); return false;" style="margin-right: 10px;">Pi-Star</a>
      <a href="#" onclick="showTab('hardware'); return false;">Hardware</a>
    </nav>
  </div>
</div>

<div id="radio" class="tab-content">
  <h1>All about radio</h1>
  <p>I first started digital mode on DMR. My first DMR radio is the Anytone AT878UV with no bluetooth.</p>
  <p>My second digital radio is FT70D which I like it very much due to its simplicity to operated. Finally I got FT5D as my primary radio</p>
</div>

<div id="allstarlink" class="tab-content" style="display:none;">
  <h1>AllStarLink</h1>
  <p>AllStarLink is a network of Amateur Radio repeaters, remote base stations and hot spots accessible to each other via Voice over Internet Protocol. AllStarLink runs on a dedicated computer (including the Rasperry Pi) that you host at your home, radio site or computer center. It is based on the open source Asterisk PBX running our app_rpt application. App_rpt makes Asterisk a powerful system capable of controlling one or more radios. It provides linking of these radio "nodes" to other systems of similar construction anywhere in the world via VoIP.</p>
  <p>AllStarLink's primary use is as a dedicated computer node wired to your repeater or radio. Connections from Echolink, other VoIP clients and telephone calls are supported.</p>
  <p>Credit: <a href="https://www.allstarlink.org/">https://www.allstarlink.org/</a></p>

  <p><h4>Documentation</h4><br>
  <a href="https://www.freedmr.uk/wp-content/uploads/2024/02/ASL-to-DMR-Bridge.pdf">ASL to DMR Bridge</a>
  </p>

  <p><h4>Reference</h4><br>
  <ol type=1>
    <li><a href="https://hamradiodx.net/">Ham Radio DX</a></li>
  <li><a href="https://allmon.vk7.com.au/link.php?nodes=1727,1752,1725,1720,55580,59598,59606,59727)">VK Link Network</a></li>
  </ol>
</div>

<div id="dmr" class="tab-content" style="display:none;">
  <h1>DMR</h1>
  <p>DMR stands for Digital Mobile Radio and is an international standard that has been defined for two-way radios. The DMR standard allows equipment developed by different manufacturers to operate together on the same network for all the functions defined within the standard.</p>

<p>The aim of the DMR standard was to create a digital radio system with low complexity and low cost that still allows for equipment from different manufacturers to work together, allowing users to shop around rather than being locked into a proprietary system which would be costly to replace and maintain.</p>

<p>European Telecommunications Standards Institute (ETSI) is responsible for the creation and maintenance of the DMR standard. The standard was first ratified in 2005 and has subsequently been updated and revised several times, most recently in November 2018.</p>

<p>Credit: <a href="https://www.motorolasolutions.com/en_xp/solutions/what-is-dmr.html">https://www.motorolasolutions.com/en_xp/solutions/what-is-dmr.html</a></p>

</div>

<div id="ysf" class="tab-content" style="display:none;">
  <h1>YSF</h1>
  <p>YSF is an abbreviation of Yaesu System Fusion, developed by Yaesu, one of the leading manufacturers of amateur radio equipment. YSF is a digital voice and data protocol that uses FDMA (Frequency-division multiple access).</p>
</div>

<div id="pistar" class="tab-content" style="display:none;">
  <h1>Pi-star configuration and commands</h1>

Here are some pistar command that can be used on CMD CLI to configure the MMDVM running Pi-star

| Command | Function |
| ------- | -------- |
| sudo pistar-ysflink fcs00290 | Connect to AmericaLink    |
| sudo pistar-findmodem        | Show the mmdvm modem type |

  <p>That is so ==funny== :joy:</p>
</div>

<div id="hardware" class="tab-content" style="display:none;">
  <h1>Hardware</h1>
  <p>I first started digital mode on DMR. My first DMR radio is the Anytone AT878UV with no bluetooth.</p>

<p>My second digital radio is FT70D which I like it very much due to its simplicity to operated. Finally I got FT5D as my primary radio</p>
</div>

<script>
function showTab(tabId) {
  var tabs = document.getElementsByClassName('tab-content');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = 'none';
  }
  document.getElementById(tabId).style.display = 'block';
}
</script>

