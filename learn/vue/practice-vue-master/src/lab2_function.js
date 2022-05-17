function displayCourseName(name) {
    console.log(`course name=${name}`)
}

const displayCourseName2 = (name) => {
    console.log(`course name=${name}`)
}

const displayCourseName3 = name => {
    console.log(`course name=${name}`)
}
const displayCourseName4 = () => {
    console.log('course name=...')
}

const earning = (attendee) => {
    return attendee * 8000
}

const earning2 = attendee => attendee * 8000
displayCourseName("vue")
displayCourseName2("react and spring boot")
displayCourseName3('vue with reset')
displayCourseName4()
console.log(`earning1 = ${earning(10)}`)
console.log(`earning2 = ${earning2(20)}`)