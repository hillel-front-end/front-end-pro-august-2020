window.onload = function() {
    const forms = document.querySelectorAll('form');

    const goToNextStep = (function(forms, currentStep) {
        const STEP = 1;
        const FIRST_STEP = 0;
        let nextStep = currentStep + STEP;

        nextStep = forms[nextStep] ? nextStep : FIRST_STEP;

        forms[currentStep].classList.remove('center');
        forms[nextStep].classList.add('center');
    }).bind(null, forms)


    forms.forEach((form, step) => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            ajax({
                url: 'http://localhost:3005/',
                method: 'post',
                success(data, status) {
                    if (status == 200) {
                        goToNextStep(step);
                    }   
                }
            })
        });
    });


};