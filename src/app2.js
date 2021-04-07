async function postData (url = '', data = {}) {
    const response = await fetch(url)
    return response.json()
  }
  
  postData('blogs.json')
    .then(data => {
      displayCharacters(data.data)
    })

const displayCharacters = (characters) => {
        const htmlString = characters
            .map((character) => {
                return `
                <div class="blog">
                <strong>${character.title}</strong><br>
                ${character.date}<br><br>
                ${character.content}<br><br>
                <button class="continuereading continuereading3">Continue Reading</button><br><br><br>
                </div>
            `;
            })
            .join('');
        document.getElementsByClassName('fromourblog')[0].innerHTML = document.getElementsByClassName('fromourblog')[0].innerHTML + htmlString
};