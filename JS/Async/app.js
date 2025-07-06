const fakeRequest = (url) => {
  return new Promise ( (resolve, reject) => {
    const delay = Math.floor (Math.random () * (4500)) + 500;
    setTimeout ( () => {
      if (delay > 4000) {
        reject ( ' Connection Timeout :(')
      } else {
        resolve ( ` Here is your fake data from ${url}`)
      }
    }, delay)
  })
}

async function makeTwoRequests() {
  let data1 =  fakeRequest('/pagel');
  console.log(data1)
}