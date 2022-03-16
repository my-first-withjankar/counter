let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
// console.log(btns);
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        }
    })
})