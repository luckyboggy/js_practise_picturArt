const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function (event) {
            if (event.key.match(/[^а-яЁ 0-9]/ig)) {
                event.preventDefault();
            }
        });
    });

};

export default checkTextInputs;