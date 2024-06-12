function sortear() {
    const quantity = parseInt(document.getElementById('quantityInput').value);
    const min = parseInt(document.getElementById('minInput').value);
    const max = parseInt(document.getElementById('maxInput').value);
    const resultDiv = document.getElementById('result');

    if (min >= max) {
        resultDiv.textContent = 'O valor mínimo deve ser menor que o valor máximo.';
        resultDiv.style.display = 'block';
        return;
    }

    const numbers = [];
    for (let i = 0; i < quantity; i++) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.push(num);
    }

    resultDiv.textContent = `Número sorteado: ${numbers.join(', ')}`;
    
    // Aplica a animação ao resultado
    resultDiv.style.display = 'block';
    resultDiv.style.animation = 'none'; // Reinicia a animação
    resultDiv.offsetHeight; // Força o reflow
    resultDiv.style.animation = 'fadeInScale 0.5s ease-in-out';
}
