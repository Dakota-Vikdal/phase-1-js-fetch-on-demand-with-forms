

const init = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", event => {
    event.preventDefault()
    
    const input = document.querySelector("#searchByID")
    console.log(input.value)
    
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(r => r.json())
    .then(data => titleAndSummary(data))

    function titleAndSummary(data) {
      const title = document.querySelector("#movieDetails > h4")
      const summary = document.querySelector("#movieDetails > p")
      title.textContent = data.title
      summary.textContent = data.summary
      console.log(title)
      console.log(summary)
    }
  

    
});
};




document.addEventListener('DOMContentLoaded', init);

