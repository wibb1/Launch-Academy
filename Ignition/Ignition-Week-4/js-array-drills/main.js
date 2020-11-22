let teachers = ["Arrington", "Kincart", "Alberts", "Pickett"]

let rooms = [
  ["Andy", "Rodolfo", "Lynn", "Talia"],
  ["Al", "Ross", "Jorge", "Dante"],
  ["Nick", "Kim", "Jasmine", "Dorothy"],
  ["Adam", "Grayson", "Aliyah", "Alexa"]
]


//List all the teachers with an even index number (including 0)

let evenIndex = () => {
  let i = 0
  for (i = 0; i < teachers.length; i++) {
    if (i % 2 == 0) {
      console.log(teachers[i])
    }
  }
}

evenIndex()

//List all of the teachers with the letter i in their name

let iInName = () => {
  let i = 0
  let j = 0
  for (i = 0; i < teachers.length; i++) {
    if (teachers[i].includes("i")) {
      console.log(teachers[i])
    }
  }
}

iInName()

//Return the number of teachers

let teacherCount = () => {
  return (teachers.length)
}

console.log(teacherCount())

//Return the number of rooms of students

let roomCount = () => {
  return (rooms.length)
}

console.log(roomCount())

//Return the number of students in all the rooms

let studentCount = () => {
  let i = 0
  let j = 0
  let count = 0
  for (i = 0; i < rooms.length; i++) {
    for (j = 0; j < rooms[i].length; j++) {
      count++
    }
  }
  return count
}

console.log(studentCount())

//Return the students who have an i in their names

let whichStudents = () => {
  let i = 0
  let j = 0
  let count = 0
  let array1 = []
  for (i = 0; i < rooms.length; i++) {
    for (j = 0; j < rooms[i].length; j++) {
      if (rooms[i][j].includes("i")) {
        array1.push(" " + rooms[i][j])
        count++
      }
    }
  }
  return array1
}

console.log(`The students who have an 'i' in their name are${whichStudents()}.`)

//Return the teacher who has the given student in their room

let whichTeacher = (student) => {
  let i = 0
  let j = 0
  for (i = 0; i < rooms.length; i++) {
    for (j = 0; j < rooms[i].length; j++) {
      if (rooms[i][j].includes(student)) {
        return (teachers[i])
      }
    }
  }
}

console.log(`The teacher who has Jorge is ${whichTeacher("Jorge")}.`)
console.log(`The teacher who has Alexa is ${whichTeacher("Alexa")}.`)
