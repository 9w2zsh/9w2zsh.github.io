<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <div style="min-width: 200px; text-align: right; width: 100%;">
    <nav>
      <a href="#" onclick="showTab('links'); return false;" style="margin-right: 10px;">Links</a>
      <a href="#" onclick="showTab('programming'); return false;" style="margin-right: 10px;">Programming</a>
      <a href="#" onclick="showTab('aistuff'); return false;" style="margin-right: 10px;">AI Stuff</a>
      <a href="#" onclick="showTab('youtube'); return false;" style="margin-right: 10px;">Youtube</a>
      <a href="#" onclick="showTab('pistar'); return false;" style="margin-right: 10px;">Pi-Star</a>
      <a href="#" onclick="showTab('hardware'); return false;">Hardware</a>
    </nav>
  </div>
</div>

<div id="links" class="tab-content">
  <h3>Links</h3>
  <ol>
    <li><a href="https://www.wm7d.net/fcc_uls/">WM7D US Callsign search</a></li>
  </ol>
</div>

<div id="programming" class="tab-content" style="display:none;">
  <h3>Programming stuff</h3>
  <ol>
    <li><a href="https://devdocs.io/">docs for developer:</a></li>
  </ol>
</div>

<div id="aistuff" class="tab-content" style="display:none;">
  <h3>AI Stuff</h3>
  <ol>
    <li><a href="https://www.facebook.com/share/r/19YHzr82FP/">fix resume with chatgpt</a></li>
    <li><a href="https://mcpmarket.com/tools/skills">MCP and skills</a></li>
  </ol>
</div>

<div id="youtube" class="tab-content" style="display:none;">
  <h3>Youtube</h3>
  <ol>
    <li><a href="https://youtube.com/shorts/NePNu1RCF5g?si=fdyumb-XFPTRYDb0">Hotel california chord</a></li>
    <li>Youtube no add: https://www.youtube.com/watch?v=oXkjQz99PRI --> https://www.yout-ube.com/watch?v=oXkjQz99PRI</li>
    <li>Download Youtube:<br>
1) https://www.youtube.com/watch?v=oXkjQz99PRI --> https://www.yout.com/watch?v=oXkjQz99PRI<br>
2) https://www.youtube.com/watch?v=oXkjQz99PRI --> https://www.9xyoutube.com/watch?v=oXkjQz99PRI<br>
3) https://www.youtube.com/watch?v=oXkjQz99PRI --> https://www.000tube.com/watch?v=oXkjQz99PRI<br>
</li>
<li><a href="https://www.youtube.com/watch?v=hjNnsAY-ijc">house of the raising sun</a>    </li>
  </ol>
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