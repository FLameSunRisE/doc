const button1 = document.querySelector('button')
const input1 = document.querySelector('input')
const list1 = document.querySelector('ul')

function addPlanItem() {
    console.log("HAHA")
    const item = document.createElement('li')
    item.textContent = input1.value
    list1.appendChild(item)
    input1.value=''
}

button1.addEventListener('click', addPlanItem)