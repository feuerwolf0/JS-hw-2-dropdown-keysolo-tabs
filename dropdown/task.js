const dropdownValue = document.querySelector('.dropdown__value')
const dropdownList = document.querySelector('.dropdown__list')
const dropdownLinks = document.querySelectorAll('.dropdown__link')

function toggleDropdown() {
    if (dropdownList.classList.contains('dropdown__list_active')) {
        dropdownList.classList.remove('dropdown__list_active')
    } else {
        dropdownList.classList.add('dropdown__list_active')
    }
}

dropdownValue.addEventListener('click', toggleDropdown)

dropdownLinks.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        e.preventDefault()
        dropdownValue.textContent = elem.textContent
        toggleDropdown()
    });
})