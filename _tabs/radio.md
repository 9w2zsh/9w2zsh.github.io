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
  <h4>Reference</h4>
  <ol>
    <li><a href="https://www.wm7d.net/fcc_uls/" target="_blank">WM7D US Callsing search</a></li>
  </ol>
</div>

<div id="allstarlink" class="tab-content" style="display:none;">
  <h1>AllStarLink</h1>
  <p>AllStarLink is a network of Amateur Radio repeaters, remote base stations and hot spots accessible to each other via Voice over Internet Protocol. AllStarLink runs on a dedicated computer (including the Rasperry Pi) that you host at your home, radio site or computer center. It is based on the open source Asterisk PBX running our app_rpt application. App_rpt makes Asterisk a powerful system capable of controlling one or more radios. It provides linking of these radio "nodes" to other systems of similar construction anywhere in the world via VoIP.</p>
  <p>AllStarLink's primary use is as a dedicated computer node wired to your repeater or radio. Connections from Echolink, other VoIP clients and telephone calls are supported.</p>
  <p>Credit: <a href="https://www.allstarlink.org/">https://www.allstarlink.org/</a></p>

  <h4>Documentation</h4>
  <a href="https://www.freedmr.uk/wp-content/uploads/2024/02/ASL-to-DMR-Bridge.pdf" target="_blank">ASL to DMR Bridge</a><br>
  <a href="https://docs.google.com/document/d/1eN50Csr29eAprBu7eKA0Bfa2XUcsXw5iktY1Ey-Qjkg/edit?tab=t.0" target="_blank">Allstar to DMR bridge how to</a><br>
  <a href="https://rvradionetwork.com/documents/SHARI%20Allstar%20Node%20Setup%20Procedure-Version%201.4.pdf?fbclid=IwY2xjawPpSGVleHRuA2FlbQIxMABicmlkETE0UEhUN3VQa0xob1FDSUVkc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiE9WcDNK-_7tYMARUaxyDs-eu8fkrNVR1CNyu1t9ojOlh5ecl7vph2Ym4Hx_aem_doooaM9V6ImKLmFJTY9N_w" target="_blank">SHARI Allstar node setup</a>
  <h4>Reference</h4>
  <ol type=1>
    <li><a href="https://hamradiodx.net/" target="_blank">Ham Radio DX</a></li>
    <li><a href="https://allmon.vk7.com.au/link.php?nodes=1727,1752,1725,1720,55580,59598,59606,59727)" target="_blank">VK Link Network</a></li>
  </ol>

  <table>
    <tr>
      <th>File</th>
      <th>Previous</th>
      <th>Change to</th>
    </tr>
    <tr>
      <td>/etc/asterisk/rpt.conf</td>
      <td>idrecording=|iDE 9W2ZSH/L<br>-announce callsign in CW</td>
      <td>idrecording=/etc/asterisk/local/node-id<br>-announce callsign using voice</td>
    </tr>
    <tr>
      <td>/opt/Analog_Bridge/Analog_Bridge.ini</td>
      <td>usrpAudio = AUDIO_UNITY</td>
      <td>usrpAudio = AUDIO_USE_GAIN</td>
    </tr>
    <tr>
      <td></td>
      <td>repeaterID = 9</td>
      <td>repeaterID = 502015112</td>
    </tr>
    <tr>
      <td>/opt/MMDVM_Bridge/DVSwitch.ini</td>
      <td>fallbackID = 1234567</td>
      <td>fallbackID = 5020151</td>
    </tr>
    <tr>
      <td>/opt/MMDVM_Bridge/MMDVM_Bridge.ini</td>
      <td>[General] Id=502015111</td>
      <td>Id=5020151</td>
    </tr>
    <tr>
      <td></td>
      <td>[P25] Enable=1</td>
      <td>Enable=0</td>
    </tr>
    <tr>
      <td></td>
      <td>[NXDN] Enable=1</td>
      <td>Enable=0</td>
    </tr>
    <tr>
      <td></td>
      <td>[P25 Network] Enable=1</td>
      <td>Enable=0</td>
    </tr>
    <tr>
      <td></td>
      <td>[NXDN Network] Enable=1</td>
      <td>Enable=0</td>
    </tr>
  </table>
  <h4>File location</h4>
  /var/lib/mmdvm/DMRIds.dat<br>
</div>

<div id="dmr" class="tab-content" style="display:none;">
  <h1>DMR</h1>
  <p>DMR stands for Digital Mobile Radio and is an international standard that has been defined for two-way radios. The DMR standard allows equipment developed by different manufacturers to operate together on the same network for all the functions defined within the standard.</p>

  <p>The aim of the DMR standard was to create a digital radio system with low complexity and low cost that still allows for equipment from different manufacturers to work together, allowing users to shop around rather than being locked into a proprietary system which would be costly to replace and maintain.</p>

  <p>European Telecommunications Standards Institute (ETSI) is responsible for the creation and maintenance of the DMR standard. The standard was first ratified in 2005 and has subsequently been updated and revised several times, most recently in November 2018.</p>

  <p>Credit: <a href="https://www.motorolasolutions.com/en_xp/solutions/what-is-dmr.html" target="_blank">https://www.motorolasolutions.com/en_xp/solutions/what-is-dmr.html</a></p>
</div>

<div id="ysf" class="tab-content" style="display:none;">
  <h1>YSF</h1>
  <p>YSF is an abbreviation of Yaesu System Fusion, developed by Yaesu, one of the leading manufacturers of amateur radio equipment. YSF is a digital voice and data protocol that uses FDMA (Frequency-division multiple access).</p>
  ##### Links  
  - [America-link](http://americalinkysf.radiotechnology.xyz/?fbclid=IwY2xjawPxPb5leHRuA2FlbQIxMABicmlkETFFNWVCbkJSZFBOUWtJcXFvc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHibBFEr7ysieXatcWoWgWnqxM__vhTc-OuFDwAD9ovfEsELo1llBQVMB3lg6_aem_fjSICDoF4aywrIPlLUBRbA)
</div>

<div id="pistar" class="tab-content" style="display:none;">
  <h1>Pi-star configuration and commands</h1>

  Here are some pistar command that can be used on CMD CLI to configure the MMDVM running Pi-star
  <table>
    <tr>
      <th>Command</th>
      <th>Function</th>
    </tr>
    <tr>
      <td>sudo pistar-ysflink fcs00290</td>
      <td>Connect to AmericaLink</td>
    </tr>
    <tr>
      <td>sudo pistar-findmodem</td>
      <td>Show the mmdvm modem type</td>
    </tr>
  </table>
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

