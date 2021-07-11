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
postData('100days.json')
  .then(data => {
    displayCharacters(data.data)
  })

const displayCharacters = (character) => {
  let i
  let htmlString = ''
  for (i = 0; i < character.length; i++) {
    htmlString = htmlString +
      `
        <div class="speechbub">
                        <div class="speechimgcon">
                            <div class="speechimg"><img src="${character[i].image}" alt="member name"></div>
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
        <div class="speechbub" style="margin-bottom:30px;">
                        <div class="speechimgcon">
                            <div class="speechimg"><img src="${character[j].image}" alt="member name" style="border:5px solid #00c3f7;"></div>
                        </div>
        </div>
      `
  }
  document.getElementsByClassName('bub1')[0].innerHTML = bub1con
  bub1con = ''
  for (j = 1; j < character.length; j = j + 3) {
    bub1con = bub1con +
      `
        <div class="speechbub1" style="margin-bottom:30px;">
                        <div class="speechimgcon">
                            <div class="speechimg"><img src="${character[j].image}" alt="member name" style="border:5px solid #f41971;"></div>
                        </div>
        </div>
      `
  }
  document.getElementsByClassName('bub2')[0].innerHTML = bub1con

  bub1con = ''
  for (j = 2; j < character.length; j = j + 3) {
    bub1con = bub1con +
      `
        <div class="speechbub2" style="margin-bottom:30px;">
                        
                        <div class="speechimgcon">
                            <div class="speechimg"><img src="${character[j].image}" alt="member name" style="border:5px solid #98d800;"></div>
                        </div>
        </div>
      `
  }
  document.getElementsByClassName('bub3')[0].innerHTML = bub1con
}
