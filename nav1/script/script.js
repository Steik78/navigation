var btn = document.querySelector('#btn')
btn.addEventListener('click', function(){
    var showNav = document.querySelector('.nav_list')
        showNav.classList.toggle('show');   
})

const searchInput = document.querySelector('#search input');
 
searchInput.onkeyup = (event) => {
  if (event.code === 'Enter') {
    openSearchPage();
  }
};

function openSearchPage() {
  
  var query = searchInput.value;
  alert(query);
}
