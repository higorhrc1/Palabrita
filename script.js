const words = [
    "AMIGO","LIBRO","PERRO","GATOS","CIELO","PLAYA","DULCE","SALUD","FELIZ","RELOJ",
    "NOCHE","TARDE","LUNES","MARZO","ABRIL","JUNIO","JULIO","VERDE","NEGRO","BLUSA",
    "COCHE","AVION","BARCO","HOTEL","CAMPO","CALLE","FRUTA","LECHE","QUESO","ARROZ",
    "SILLA","MESA","PLAZA","PAPEL","LAPIZ","BOLSA","RADIO","RATON","TECLA","LLAVE",
    "CARTA","RUMBO","MUNDO","VIDAS","SUELO","RISAS","PADRE","MADRE","HERMN","HIJOS",
    "JOVEN","VIEJO","NUEVO","CALOR","FRIOO","LLENO","VACIO","CORTO","LARGO","SABOR",
    "LIMON","MELON","FRESA","PANES","CARNE","HUEVO","CAJON","BANCO","PLATA","ROJOS",
    "AZULX","BLANX","GRISE","MARRN","ANDAR","COMER","BEBER","VIVIR","MIRAR","TENER",
    "HACER","DECIR","VENIR","SABER","CREER","PODER","SALIR","TOMAR","CANTAR","DOLOR"
    ];
    
    let selectedWord = words[Math.floor(Math.random() * words.length)];
    let currentRow = 0;
    let currentCol = 0;
    let gameOver = false;
    
    const grid = document.getElementById("grid");
    
    // Criar grade
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
    
    // INPUT
    function handleInput(letter) {
        if (gameOver) return;
    
        const rows = document.querySelectorAll(".row");
        const cells = rows[currentRow].children;
    
        if (letter === "BACKSPACE" && currentCol > 0) {
            currentCol--;
            cells[currentCol].textContent = "";
            return;
        }
    
        if (letter === "ENTER") {
            if (currentCol === 5) checkWord();
            return;
        }
    
        if (/^[A-ZÑ]$/.test(letter) && currentCol < 5) {
            cells[currentCol].textContent = letter;
            currentCol++;
        }
    }
    
    // Teclado físico
    document.addEventListener("keydown", (e) => {
        if (gameOver) return;
    
        let key = e.key.toUpperCase();
    
        if (key === "BACKSPACE") handleInput("BACKSPACE");
        else if (key === "ENTER") handleInput("ENTER");
        else if (/^[A-ZÑ]$/.test(key)) handleInput(key);
    });
    
    // Atualizar teclado virtual
    const keyboardLayout = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const keyboard = document.getElementById("keyboard");
    const keyElements = {};

    keyboardLayout.split("").forEach(letter => {
        const key = document.createElement("div");
        key.textContent = letter;
        key.classList.add("key");
        key.onclick = () => handleInput(letter);

        keyboard.appendChild(key);
        keyElements[letter] = key; // salva referência
    });

    [
        { label: "↵", value: "ENTER" },
        { label: "←", value: "BACKSPACE" }
    ].forEach(keyObj => {
        const key = document.createElement("div");
        key.textContent = keyObj.label;
        key.classList.add("key");
        key.onclick = () => handleInput(keyObj.value);
        keyboard.appendChild(key);
    });

    function updateKeyboardGreen(letter) {
        const key = keyElements[letter];
        if (!key) return;
    
        key.classList.add("green"); 
    }
    
    
    function updateKeyboard(letter, color) {
        const key = keyElements[letter];
        if (!key) return;
    
        if (color === "green") {
            key.classList.remove("yellow", "gray");
            key.classList.add("green");
        } 
        else if (color === "yellow") {
            if (!key.classList.contains("green")) {
                key.classList.remove("gray");
                key.classList.add("yellow");
            }
        } 
        else if (color === "gray") {
            if (!key.classList.contains("green") && !key.classList.contains("yellow")) {
                key.classList.add("gray");
            }
        }
    }
    
    // Verificar palavra
    function checkWord() {
        const rows = document.querySelectorAll(".row");
        const currentRowElement = rows[currentRow];
        const cells = currentRowElement.children;
        let guess = "";
    
        for (let i = 0; i < 5; i++) {
            guess += cells[i].textContent;
        }
    
        if (!words.includes(guess)) {
            shakeRow(currentRowElement);
            clearRow(currentRowElement);
            currentCol = 0;
            return;
        }
    
        let tempWord = selectedWord.split("");
        let guessLetters = guess.split("");
    
        // Verdes
        // Primeira passada → verdes
        for (let i = 0; i < 5; i++) {
            if (guessLetters[i] === tempWord[i]) {
                cells[i].classList.add("green");
                updateKeyboardGreen(guess[i]); // 🔥 só aqui

                tempWord[i] = null;
                guessLetters[i] = null;
            }
        }

    
        // Amarelos e cinzas
        for (let i = 0; i < 5; i++) {
            if (guessLetters[i] && tempWord.includes(guessLetters[i])) {
                cells[i].classList.add("yellow");
                updateKeyboard(guess[i], "yellow");
                tempWord[tempWord.indexOf(guessLetters[i])] = null;
            } 
            else if (guessLetters[i]) {
                cells[i].classList.add("gray");
                updateKeyboard(guess[i], "gray");
            }
        }
    
        if (guess === selectedWord) {
            gameOver = true;
            showResultModal("¡Correcto!", "Has adivinado la palabra.");
            return;
        }
    
        currentRow++;
        currentCol = 0;
    
        if (currentRow === 6) {
            showResultModal("Has perdido", "La palabra correcta era: " + selectedWord);
            gameOver = true;
        }
    }
    
    // Modal resultado
    function showResultModal(title, message) {
        const modal = document.getElementById("modal");
        const content = modal.querySelector(".modal-content");
    
        content.innerHTML = `
            <h2>${title}</h2>
            <p>${message}</p>
            <button onclick="closeModal()">Cerrar</button>
        `;
    
        modal.style.display = "flex";
    }
    
    function closeModal() {
        document.getElementById("modal").style.display = "none";
    }
    
    // Dica
    function showHint() {
        const modal = document.getElementById("modal");
        const content = modal.querySelector(".modal-content");
    
        content.innerHTML = `
            <h2>Pista</h2>
            <p>La palabra comienza con la letra: <strong>${selectedWord[0]}</strong></p>
            <p>La palabra tiene 5 letras.</p>
            <button onclick="closeModal()">Cerrar</button>
        `;
    
        modal.style.display = "flex";
    }
    
    document.getElementById("hintBtn").onclick = showHint;
    document.getElementById("restartBtn").onclick = () => location.reload();
    
    function shakeRow(rowElement) {
        rowElement.classList.add("shake");
        setTimeout(() => {
            rowElement.classList.remove("shake");
        }, 400);
    }
    
    function clearRow(rowElement) {
        const cells = rowElement.children;
        for (let i = 0; i < 5; i++) {
            cells[i].textContent = "";
            cells[i].classList.remove("green", "yellow", "gray");
        }
    }
    