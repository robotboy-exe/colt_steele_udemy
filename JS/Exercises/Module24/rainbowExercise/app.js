const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

for (let i=0; i < 7; i++) {
  const letters = document.querySelectorAll('span')[i]
  letters.style.color = rainbow[i];
}
