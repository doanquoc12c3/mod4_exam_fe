function loadData() {
    printLayout();
    showAll()
}


function printLayout() {
    document.getElementById('layout').innerHTML = `
<div class="card">
  <h5 class="card-header" id="top"></h5>
  <div class="card-body">
  <div id ="addCityButton"></div>
    <div id="notification"></div>
        <div class="col-12" id="content"></div>    
    </div>
    
  </div>
</div>
`;
}


