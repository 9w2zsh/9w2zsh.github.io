---
# the default layout is 'page'
icon: fas fa-info-circle
order: 4
---

<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <div style="min-width: 200px; text-align: right; width: 100%;">
    <nav>
      <a href="#" onclick="showTab('radio'); return false;" style="margin-right: 10px;">Radio</a>
      <a href="#" onclick="showTab('allstarlink'); return false;" style="margin-right: 10px;">AllStarLink</a>
      <a href="#" onclick="showTab('dmr'); return false;" style="margin-right: 10px;">DMR</a>
      <a href="#" onclick="showTab('ysf'); return false;" style="margin-right: 10px;">YSF</a>
      <a href="#" onclick="showTab('hardware'); return false;">Hardware</a>
    </nav>
  </div>
</div>

<div id="radio" class="tab-content">
  <h1>Radio</h1>
  <p>Welcome to the radio section. Here you can find information and resources about various radio technologies and hardware.</p>
</div>

<div id="allstarlink" class="tab-content" style="display:none;">
  <h1>AllStarLink</h1>
  <p>This is the AllStarLink content. Add your AllStarLink information here.</p>
</div>

<div id="dmr" class="tab-content" style="display:none;">
  <h1>DMR</h1>
  <p>This is the DMR content. Add your DMR information here.</p>
</div>

<div id="ysf" class="tab-content" style="display:none;">
  <h1>YSF</h1>
  <p>This is the YSF content. Add your YSF information here.</p>
</div>

<div id="hardware" class="tab-content" style="display:none;">
  <h1>Hardware</h1>
  <p>This is the Hardware content. Add your hardware information here.</p>
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

