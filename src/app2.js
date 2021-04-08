document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/marked/marked.min.js" ></script>')
async function postData (url = '', data = {}) {
  const response = await fetch(url)
  return response.json()
}

async function postData1 (url = '', data = {}) {
  const response = await fetch(url)
  return response.text()
}

postData('blogs.json')
  .then(data => {
    displayCharacters(data.data)
  })

const displayCharacters = (character) => {
  let i
  let htmlString = ''
  for (i = 0; i < character.length; i++) {
    htmlString = htmlString + `
        <div class="blog">
        <strong>${character[i].title}</strong><br>
        ${character[i].date}<br><br>
        ${character[i].description}<br><br>
        
        <button onclick="document.getElementsByClassName('id01')[${i}].style.display='block'" class="continuereading continuereading${i%3+1}">Continue Reading</button><br><br><br>
        <div class="id01 w3-modal" style="margin-top:10px;">
        <div class="w3-modal-content w3-animate-top w3-card-4" style="border-radius:10px;">
        <header class="w3-container contreading${i%3+1}"> 
            <span onclick="document.getElementsByClassName('id01')[${i}].style.display='none'" 
            class="w3-button w3-display-topright">&times;</span>
            <h2 style="color:#ffffff;margin-right:15px;" class="qwerty">${character[i].title.toLowerCase()}</h2>
        </header>
        <div class="w3-container">
            <p class="txtevent"></p>
        </div>
        <footer class="w3-container contreading${i%3+1}">
            <p style="padding-top:5px;padding-bottom:5px;color:#ffffff;" class="datecont">${character[i].date}</p>
        </footer>
        </div>
        </div>
        </div>
    `
  }
  document.getElementsByClassName('fromourblog')[0].innerHTML = document.getElementsByClassName('fromourblog')[0].innerHTML + htmlString
  postData1(character[0].content)
    .then(data => {
      document.querySelectorAll('.txtevent')[0].innerHTML = marked(data)
    })
  postData1(character[1].content)
    .then(data => {
      document.querySelectorAll('.txtevent')[1].innerHTML = marked(data)
    })
  postData1(character[2].content)
    .then(data => {
      document.querySelectorAll('.txtevent')[2].innerHTML = marked(data)
    })
}
