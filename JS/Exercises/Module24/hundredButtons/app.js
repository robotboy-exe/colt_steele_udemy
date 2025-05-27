const cont = document.querySelector('#container')
for (let i = 0 ; i < 100 ; i++) {
  let btn = document.createElement('button')
  //btn.classList.add(`${i}`)
  btn.innerText = "Click"
  cont.append(btn)
}