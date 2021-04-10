document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/marked/marked.min.js" ></script>')
async function postData (url = '', data = {}) {
  const loader = document.querySelector('.loader')
  loader.className = 'loader'
  const response = await fetch(url)
  const out = await response.json()
  if (out !== undefined) {
    loader.className += ' hidden'
    return out
  }
}
async function postData3 (url = '', data = {}) {
  const response = await fetch(url)
  return response.json()
}
async function postData5 (url = '', index) {
  const response = await fetch(url)
  return [response.text(), index]
}
postData('data.json')
  .then(data => {
    load(data.data)
  })
function load (mydata) {
  let i
  for (i = 0; i < mydata.length; i++) {
    const a = document.createElement('div')
    a.setAttribute('class', 'eventdetails')
    document.getElementsByClassName('eventlist')[0].appendChild(a)
    const b = document.createElement('div')
    b.setAttribute('class', 'eventdetailsimg')
    document.getElementsByClassName('eventdetails')[i].appendChild(b)
    const c = document.createElement('div')
    c.setAttribute('class', 'eventdetailsdetail')
    document.getElementsByClassName('eventdetails')[i].appendChild(c)
    const d = document.createElement('div')
    d.setAttribute('class', 'eventname')
    d.innerHTML = mydata[i].title
    document.getElementsByClassName('eventdetailsdetail')[i].appendChild(d)
    const cont = document.createElement('div')
    cont.setAttribute('class', 'tagdatecont')
    document.getElementsByClassName('eventdetailsdetail')[i].appendChild(cont)
    const e = document.createElement('div')
    e.setAttribute('class', 'eventtag')
    const ab = document.createElement('IMG')
    ab.setAttribute('src', 'images\\Group.svg')
    e.appendChild(ab)
    e.innerHTML = e.innerHTML + ' ' + mydata[i].tag
    document.getElementsByClassName('tagdatecont')[i].appendChild(e)
    const f = document.createElement('div')
    f.setAttribute('class', 'eventdate')
    const bc = document.createElement('IMG')
    bc.setAttribute('src', 'images\\uil_calender.svg')
    f.appendChild(bc)
    f.innerHTML = f.innerHTML + ' ' + mydata[i].date
    document.getElementsByClassName('tagdatecont')[i].appendChild(f)
    const g = document.createElement('div')
    g.setAttribute('class', 'eventabout')
    g.innerHTML = mydata[i].description
    document.getElementsByClassName('eventdetailsdetail')[i].appendChild(g)
    const y = document.createElement('IMG')
    y.setAttribute('src', mydata[i].image)
    b.appendChild(y)

    g.innerHTML = g.innerHTML + '<br><br><br>' +
    `
    <button style="margin-left:10px" onclick="document.getElementsByClassName('id01')[${i}].style.display='block'" class="continuereading continuereading${i % 3 + 1}">Continue Reading</button><br><br><br>
        <div class="id01 w3-modal" style="margin-top:10px;">
        <div class="w3-modal-content w3-animate-top w3-card-4 margincont" style="border-radius:10px;">
        <header class="w3-container contreading${i % 3 + 1}"> 
            <span onclick="document.getElementsByClassName('id01')[${i}].style.display='none'" 
            class="w3-button w3-display-topright">&times;</span>
            <h2 style="color:#ffffff;margin-right:15px;" class="qwerty">${mydata[i].title.toLowerCase()}</h2>
        </header>
        <div class="w3-container">
            <p class="txtevent"></p>
        </div>
        <footer class="w3-container contreading${i % 3 + 1}">
            <p style="padding-top:5px;padding-bottom:5px;color:#ffffff;" class="datecont">${mydata[i].date}</p>
        </footer>
        </div>
        </div>
    `
    postData5(mydata[i].content, i)
      .then((data) => {
        data[0].then((qwer) => {
          document.querySelectorAll('.txtevent')[data[1]].innerHTML = marked(qwer)
        })
      })
  }
}
const check2 = document.forms.filter.checkbox1
const check3 = document.forms.filter.checkbox2
const check4 = document.forms.filter.checkbox3
const checkbar = document.forms.filter
const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keyup', (e) => {
  check2.checked = true
  check3.checked = true
  check4.checked = true
  postData3('data.json')
    .then(data => {
      const searchString = e.target.value.toLowerCase()

      const filteredCharacters = data.data.filter((character) => {
        return (
          character.title.toLowerCase().includes(searchString) ||
            character.date.toLowerCase().includes(searchString) ||
            character.description.toLowerCase().includes(searchString)
        )
      })
      if (filteredCharacters.length === 0) {
        document.getElementsByClassName('eventlist')[0].innerHTML = 'No Results Found<br><br><br><br><br>'
      } else {
        document.getElementsByClassName('eventlist')[0].innerHTML = ''
        load(filteredCharacters)
      }
    })
})

checkbar.addEventListener('change', function () {
  if (check2.checked === false && check3.checked === false && check4.checked === false) {
    document.getElementsByClassName('eventlist')[0].innerHTML = 'No Results Found'
  } else {
    let car = []
    if (check2.checked) {
    // console.log('Checkbox1 is checked..')
      postData('data.json')
        .then(data => {
          const filteredCharacters1 = data.data.filter((character) => {
            return (
              character.tag === 'Community'
            )
          })
          document.getElementsByClassName('eventlist')[0].innerHTML = ''
          car = car.concat(filteredCharacters1)
          load(car)
        // console.log(car)
        })
    }
    if (check3.checked) {
    // console.log('Checkbox2 is checked..')
      postData('data.json')
        .then(data => {
          const filteredCharacters1 = data.data.filter((character) => {
            return (
              character.tag === 'Event'
            )
          })
          document.getElementsByClassName('eventlist')[0].innerHTML = ''
          car = car.concat(filteredCharacters1)
          load(car)
        // console.log(car)
        })
    }
    if (check4.checked) {
    // console.log('Checkbox3 is checked..')
      postData('data.json')
        .then(data => {
          const filteredCharacters1 = data.data.filter((character) => {
            return (
              character.tag === 'Webinar'
            )
          })
          document.getElementsByClassName('eventlist')[0].innerHTML = ''
          car = car.concat(filteredCharacters1)
          console.log(car)
          load(car)
        })
    }
  // console.log(car)
  }
})

/*
const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
}; */

/* const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
}; */

/* loadCharacters(); */
