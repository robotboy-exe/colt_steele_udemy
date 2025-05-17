const validUserNames = username => {
  return username.filter(user => {
    return user.length < 10
  })
}

const arr = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'];

arr.filter((user) => {
  return user.length < 10
})


const person = {
  firstName: 'Viggo',
  lastName: 'Mortensen',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`
},
shoutName: function (){
  setTimeout(() => {
    console.log(this);
    console.log(this.fullName () )
}, 3000)
}
}