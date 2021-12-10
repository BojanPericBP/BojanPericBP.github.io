//Object.assign(Datepicker.locales, fr);
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();

(function () {
    Datepicker.locales.en = {
     
            days: ["Nedelja", "Ponedeljak", "Utorak", "Srijeda", "Četvratak", "Petak", "Subota"],
            daysShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
            daysMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
            months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
            today: "Danas",
            clear: "Clear",
            titleFormat: "MM y",
            format: "mm/dd/yyyy",
            weekStart: 0

    }
}) ();

const getDatePickerTitle = elem => {
    // From the label or the aria-label
    const label = elem.nextElementSibling;
    let titleText = '';
    if (label && label.tagName === 'LABEL') {
        titleText = label.textContent;
    } else {
        titleText = elem.getAttribute('aria-label') || '';
    }
    return titleText;
}

const elems = document.querySelectorAll('.datepicker_input');
for (const elem of elems) {
    const datepicker = new Datepicker(elem, {
        'format': 'dd/mm/yyyy', // UK format
        title: getDatePickerTitle(elem)
    });
}


function objaviPraksu() {
    // TODO implement
}v