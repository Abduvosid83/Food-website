let div = document.querySelector('.box')
let footer = document.querySelector('.footer')
let search = document.querySelector('.search')


function renderMeals(data) {
  div.innerHTML = ''
  if(!data){
    div.innerHTML ='<p>Natija topilmadi</p>'
  }
  data.meals.map((maxsulot, raqam) => {

    div.innerHTML += `
<div class="row">
  <div class="cols">
    <div class="card">
      <div class="card-image">
        <img src="${maxsulot.strMealThumb}"/>
        <h5>Taom nomi:</h5><span class="text">${maxsulot.strMeal.slice(0, 20)}...</span>
      </div>
      <div class="card-content">
        <p>${maxsulot.strInstructions.slice(0, 100)}...</p>
      </div>
      <div class="card-action">
        <a href="${maxsulot.strYoutube}" target="_blank">Videoni kurish</a>
      </div>
    </div>
  </div>
</div>
`;
  });
}

function getData(data) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${data}`)
    .then(res => res.json())
    .then(data => renderMeals(data))
    .catch(err => console.log(err));
}
window.addEventListener('DOMContentLoaded', () => {
  getData("a")
})

search.addEventListener('input',() => {
  getData(search.value)
})

function getYear() {
  let date = new Date().getFullYear()
  footer.textContent = `© ${date} Copyright Text`
}
getYear()