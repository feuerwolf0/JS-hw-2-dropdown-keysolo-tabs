const tabs = document.querySelectorAll('.tab')
const tabsContent = document.querySelectorAll('.tab__content')

function clearTabActive() {
    tabs.forEach((elem) => {
        elem.classList.remove('tab_active')
    })

    tabsContent.forEach((elem) => {
        elem.classList.remove('tab__content_active')
    })
}

tabs.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        clearTabActive()
        elem.classList.add('tab_active')
        tabsContent[index].classList.add('tab__content_active')
    })
   
})