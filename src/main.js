export const developed = (number) => {
    const developedNumber = document.querySelector(`.offer__developed${number}`)
    developedNumber.classList[2] ? developedNumber.classList.remove('active') : developedNumber.classList.add('active')
}