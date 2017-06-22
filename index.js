const arr = [
  [{
    surname: 'Gusyatin',
    name: 'Kirill'
  },
  {
    fullname: 'Gusyatin Kirill'
  }],
  [{
    surname: 'Gusyatin',
    name: 'Kirill'
  },
  {
    firstName: 'Gusyatin',
    lastName: 'Kirill',
    prefix: 'Dmitrievich'
  }]
]

const doubleMetaphone = require('double-metaphone')
const dice = require('dice-coefficient')
const Combinatorics = require('js-combinatorics')

function calculateSeverityFromObjects (element1, element2) {
  let combinations1 = Combinatorics.permutation(Object.values(element1)).toArray().map(combination => combination.join(' '))
  let combinations2 = Combinatorics.permutation(Object.values(element2)).toArray().map(combination => combination.join(' '))
  let length1 = combinations1.length
  let length2 = combinations2.length
  let maxMatch = 0
  for (let i = 0; i < length1; i++) {
    for (let j = 0; j < length2; j++) {
      let value = dice(doubleMetaphone(combinations1[i]), doubleMetaphone(combinations2[j]))
      if (value > maxMatch) {
        maxMatch = value
      }
    }
  }
  return maxMatch
}

arr.forEach(element => {
  let value = calculateSeverityFromObjects(element[0], element[1]) - 0.6
  if (value > 0) {
    console.log(element[0], '|', element[1], ':', value * 2.5)
  } else {
    console.log(element[0], '|', element[1], 'Too small')
  }
})
