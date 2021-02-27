function load () {
  const mydata = JSON.parse(data)
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
    g.innerHTML = mydata[i].content
    document.getElementsByClassName('eventdetailsdetail')[i].appendChild(g)
    const y = document.createElement('IMG')
    y.setAttribute('src', mydata[i].image)
    b.appendChild(y)
  }
}
load()
