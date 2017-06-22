const arr = [

]

const doubleMetaphone = require('double-metaphone')
const dice = require('dice-coefficient')

arr.forEach(element => {
  let value = dice(doubleMetaphone(element[0]), doubleMetaphone(element[1])) - 0.6
  if (value > 0) {
    console.log(element[0], '|', element[1], ':', value * 2.5)
  } else {
    console.log(element[0], '|', element[1], 'Too small')
  }
})
