const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const generateBtn = document.getElementById('generateBtn');
const lottoNumbersContainer = document.getElementById('lotto-numbers');

// Dark Mode
darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode', darkModeToggle.checked);
    body.classList.toggle('light-mode', !darkModeToggle.checked);
});

// Set initial theme
body.classList.add('light-mode');


// Lottery Number Generation
generateBtn.addEventListener('click', () => {
    lottoNumbersContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const set = generateLottoSet();
        displayLottoSet(set);
    }
});

function generateLottoSet() {
    const set = new Set();
    while (set.size < 6) {
        set.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(set).sort((a, b) => a - b);
}

function displayLottoSet(set) {
    const setContainer = document.createElement('div');
    setContainer.classList.add('lotto-set');
    set.forEach(number => {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('lotto-number');
        numberDiv.textContent = number;
        setContainer.appendChild(numberDiv);
    });
    lottoNumbersContainer.appendChild(setContainer);
}
