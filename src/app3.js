async function postData (url = '', data = {}) {
  const response = await fetch(url)
  return response.json()
}
postData('100days.json')
  .then(data => {
    displayCharacters(data.data)
  })

const displayCharacters = (character) => {
  character.sort((a, b) => (a.day < b.day) ? 1 : ((b.day < a.day) ? -1 : 0))
  let i
  let htmlString = ''
  for (i = 0; i < character.length; i++) {
    htmlString = htmlString +
      `
        <div class="speechbub">
                        <div class="speech">${character[i].text}</div>
                        <div class="triangle-down"></div>
                        <div class="speechimgcon">
                            <div class="speechimg"><img src="${character[i].image}" alt="member name"></div>
                            <div class="speechimgtxt"><span class="boldtext">${character[i].name}</span><br>Day ${character[i].day}</div>
                        </div>
        </div>
      `
  }
  document.getElementsByClassName('appbub')[0].innerHTML = htmlString

  let j
  let bub1con = ''
  for (j = 0; j < character.length; j = j + 3) {
    bub1con = bub1con +
      `
        <div class="speechbub">
                        <div class="speech">${character[j].text}</div>
                        <div class="triangle-down"></div>
                        <div class="speechimgcon">
                            <div class="speechimg"><img src="${character[j].image}" alt="member name"></div>
                            <div class="speechimgtxt"><span class="boldtext">${character[j].name}</span><br>Day ${character[j].day}</div>
                        </div>
        </div>
      `
  }
  document.getElementsByClassName('bub1')[0].innerHTML = bub1con
  bub1con = ''
  for (j = 1; j < character.length; j = j + 3) {
    bub1con = bub1con +
      `
        <div class="speechbub1">
                        <div class="speech">${character[j].text}</div>
                        <div class="triangle-down"></div>
                        <div class="speechimgcon">
                            <div class="speechimg"><img src="${character[j].image}" alt="member name"></div>
                            <div class="speechimgtxt"><span class="boldtext">${character[j].name}</span><br>Day ${character[j].day}</div>
                        </div>
        </div>
      `
  }
  document.getElementsByClassName('bub2')[0].innerHTML = bub1con

  bub1con = ''
  for (j = 2; j < character.length; j = j + 3) {
    bub1con = bub1con +
      `
        <div class="speechbub2">
                        <div class="speech">${character[j].text}</div>
                        <div class="triangle-down"></div>
                        <div class="speechimgcon">
                            <div class="speechimg"><img src="${character[j].image}" alt="member name"></div>
                            <div class="speechimgtxt"><span class="boldtext">${character[j].name}</span><br>Day ${character[j].day}</div>
                        </div>
        </div>
      `
  }
  document.getElementsByClassName('bub3')[0].innerHTML = bub1con
}
