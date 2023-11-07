let first_idx = -1;
let last_idx = -1;
let shiftKeyPressed = false;

function onCheckboxChange() {

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    if (last_idx != -1 && last_idx != checkboxes.length) {
        checkboxes[last_idx].checked = true;
    }


    checkboxes.forEach((checkbox, index) => {
        const paragraph = document.querySelectorAll('.strike')[index];
        if (checkbox.checked) {
            if (first_idx === -1 || index < first_idx) {
                first_idx = index;
            }
            last_idx = index;
            paragraph.classList.add('checked');
        } else {

            paragraph.classList.remove('checked');
        }
    });

    for (let i = first_idx; i <= last_idx; i++) {
        document.querySelectorAll('input')[i].checked = true;
        document.querySelectorAll('.strike')[i].classList.add('checked');
    }
}



document.addEventListener('keydown', function (event) {
    if (event.key === 'Shift') {
        // shiftKeyPressed = true;
        last_idx = last_idx + 1;
        if (first_idx === -1) first_idx++;


        onCheckboxChange();

    }
});



const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    if (checkbox.checked === false)
        checkbox.addEventListener('change', onCheckboxChange);
});
