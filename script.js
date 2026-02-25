const words = [
    "ABAJO","ABONO","ABRIL","ABRIR","ABUSO","ACASO","ACERA","ACERO","ACIDO","ACOSO",
    "ACTOR","ACTOS","ACUDE","ACUDO","ADIOS","ADOBE","ADORA","ADULT","AFORO","AGUDO",
    "AGUJA","AHORA","AIRES","AJENO","AJUAR","ALADO","ALAMO","ALBUM","ALDEA","ALEGA",
    "ALEJA","ALERO","ALETA","ALFIL","ALIAS","ALMAS","ALTAR","ALTOS","ALZAR","AMADA",
    "AMADO","AMIGA","AMIGO","ANCHO","ANDAR","ANGEL","ANIMA","ANIMO","ANUAL","APAGA",
    "APEGO","APILA","APODO","APOYA","APOYO","ARADO","ARANA","ARBOL","ARDER","ARDOR",
    "ARENA","ARMAR","AROMA","ARROZ","ASADO","ASEAR","ASILO","ASOMA","ATAJO","ATOMO",
    "AUTOR","AVARO","AVENA","AVIDO","AVION","AVISA","AVISO","AYUDA","AZOTE","BAJAR",
    "BALON","BANCO","BANDA","BARCO","BARRA","BARRO","BASAR","BEBER","BECAS","BESAR",
    "BESOS","BICHO","BINGO","BLUSA","BOMBA","BORDE","BORRA","BOTAR","BRAVO","BRAZO",
    "BREVE","BRISA","BRUJA","BUENA","BUENO","BURLA","BUSCA","CABRA","CACAO","CAIDA",
    "CAJAS","CALMA","CALOR","CAMPO","CANAL","CANTO","CAPAZ","CARAS","CARGO","CARNE",
    "CARRO","CARTA","CASAR","CASCO","CASOS","CAZAR","CEDER","CELDA","CENAR","CENSO",
    "CERCA","CERDO","CESTO","CHICA","CHICO","CHINA","CHINO","CIELO","CIFRA","CINCO",
    "CIRCO","CITAR","CLARO","CLASE","CLAVE","CLIMA","COBRE","COLOR","COMER","CONDE",
    "CORAL","CORRE","CORTA","CORTE","COSTO","CREAR","CRECE","CREER","CREMA","CRIAR",
    "CRUCE","CUEVA","CULPA","CULTO","CURAR","CURSO","DANZA","DATOS","DEBER","DECIR",
    "DEDAL","DEJAR","DELTA","DENSO","DESEO","DESDE","DIETA","DIGNO","DOLOR","DONAR",
    "DONDE","DOSIS","DRAMA","DUELO","DULCE","DUPLA","ECHAR","EDEMA","EDITA","EDUCA",
    "ELITE","ELLOS","EMITE","ENOJO","ENTRA","ENVIO","EPOCA","ERROR","ESPIA","ESTAR",
    "EVADE","EXIGE","EXITO","FALLA","FALSO","FALTA","FANGO","FAVOR","FELIZ","FERIA",
    "FEROZ","FICHA","FIEBRE","FIJAR","FILAS","FILME","FINAL","FINCA","FIRMA","FLACO",
    "FLORA","FLOTA","FLUJO","FONDO","FORMA","FORRO","FOTOS","FRASE","FREIR","FRENO",
    "FRUTA","FUEGO","FUERA","FUMAR","FUNCA","FURIA","GAFAS","GANAR","GASTO","GEMIR",
    "GENIO","GENTE","GESTO","GIRAR","GLOBO","GOLPE","GORDO","GORRA","GRANO","GRAVE",
    "GRITO","GRUPO","GUAPO","GUION","GUSTA","HABER","HABLA","HABRA","HACER","HACIA",
    "HALLA","HARAN","HASTA","HECHO","HERIR","HEROE","HIELO","HIJOS","HILAR","HOBBY",
    "HOGAR","HOJAS","HONDO","HONOR","HORAS","HOTEL","HUECO","HUMOR","IDEAL","IGUAL",
    "ILESO","IMPAR","IMPON","IMPRO","INDIO","INERT","INFLA","INMUNE","IRRIA","JABON",
    "JAMAS","JAPON","JARRA","JAULA","JEFES","JERGA","JOVEN","JUEGO","JUGAR","JUNTA",
    "JUNTO","JUSTO","LABIO","LADOS","LAGOS","LANZA","LARGO","LASER","LATIR","LECHE",
    "LEGAL","LEJOS","LENTO","LETRA","LIBRA","LIBRO","LICOR","LIDER","LIMON","LIMPO",
    "LINDA","LINDO","LINEA","LISTA","LLAMA","LLAVE","LLEGA","LLENO","LLEVA","LLORA",
    "LOBBY","LOCAL","LOGRA","LUCHA","LUGAR","LUJOS","LUNAR","LUNES","MADRE","MAGIA",
    "MANGO","MANTA","MARCA","MARCO","MAREA","MATAR","MAYOR","MEDIA","MEDIO","MEJOR",
    "MENOR","MENOS","MENTE","MERCA","METAL","METER","METRO","MIEDO","MIELES","MILAG",
    "MIMAR","MINAS","MIRAR","MISIL","MISMO","MITAD","MODOS","MOLER","MONTE","MORAL",
    "MORIR","MOVER","MOVIL","MUCHO","MUJER","MULTA","MUNDO","MUSGO","NACER","NADAR",
    "NARIZ","NAVAL","NEGAR","NEGRO","NIEVE","NIVEL","NOBLE","NOCHE","NORMA","NORTE",
    "NOTAR","NOVIO","NUBES","NUNCA","OBRAS","OBVIO","OCASO","OCEANO","OCUPA","ODIAR",
    "OESTE","OIDOS","OJALA","OLEOS","OLIVA","ONDAS","OPERA","OPINA","ORDEN","OREJA",
    "ORINA","OROZO","OSADO","OSTRA","OTONO","PACTO","PADRE","PAGAR","PALMA","PANEL",
    "PAPEL","PARAR","PARCO","PARED","PARTE","PASAR","PASEO","PASOS","PAUTA","PECAR",
    "PECHO","PEDAL","PEDIR","PEGAR","PELAR","PELOS","PENAL","PERLA","PERRO","PESAR",
    "PESCA","PEZON","PICAR","PIDEN","PIEZA","PILAR","PINTO","PISAR","PLACER","PLAGA",
    "PLANO","PLATA","PLAYA","PLENO","POBRE","POCOS","PODER","PODIO","PONER","PORRA",
    "PORTA","POSTE","PRADO","PRESA","PRIMO","PRIOR","PROSA","PULIR","PUNTO","QUEDA",
    "QUEJA","QUESO","QUIEN","QUISO","RAMOS","RANGO","RAPAZ","RAPTO","RASGO","RATON",
    "REBEL","RECIO","RECTA","REGLA","REINO","REIRN","RELAX","RELOJ","REMAR","RENTA",
    "RESTO","REVES","REZAR","RICAS","RICOS","RIFLE","RIGOR","RIMAR","RIVAL","ROBAR"
    ];
    
    let selectedWord = words[Math.floor(Math.random() * words.length)];
    let currentRow = 0;
    let currentCol = 0;
    let gameOver = false;
    let adminMode = false;
    
    const grid = document.getElementById("grid");
    const modal = document.getElementById("modal");
    const content = document.querySelector(".modal-content");
    
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
    
    document.addEventListener("keydown", e => {

        // 🔥 Se estiver digitando em um input, NÃO controlar o jogo
        if (document.activeElement.tagName === "INPUT") return;
    
        let key = e.key.toUpperCase();
    
        if (key === "BACKSPACE") handleInput("BACKSPACE");
        else if (key === "ENTER") handleInput("ENTER");
        else if (/^[A-ZÑ]$/.test(key)) handleInput(key);
    });
    
    function checkWord() {
        const rows = document.querySelectorAll(".row");
        const cells = rows[currentRow].children;
        let guess = "";
    
        for (let i = 0; i < 5; i++) guess += cells[i].textContent;
    
        if (guess === "HIGOR") {
            adminMode = true;
        
            // limpar a linha digitada
            for (let i = 0; i < 5; i++) {
                cells[i].textContent = "";
            }
        
            currentCol = 0;
        
            showAdminPanel();
            return;
        }
    
        if (!words.includes(guess)) {
            rows[currentRow].classList.add("shake");
            setTimeout(()=>rows[currentRow].classList.remove("shake"),400);
        
            // 🔥 limpar linha
            for (let i = 0; i < 5; i++) {
                cells[i].textContent = "";
                cells[i].classList.remove("green","yellow","gray");
            }
        
            currentCol = 0;
            return;
        }
    
        let temp = selectedWord.split("");
        let guessArr = guess.split("");
    
        for (let i = 0; i < 5; i++) {
            if (guessArr[i] === temp[i]) {
                cells[i].classList.add("green");
                temp[i] = null;
                guessArr[i] = null;
            }
        }
    
        for (let i = 0; i < 5; i++) {
            if (guessArr[i] && temp.includes(guessArr[i])) {
                cells[i].classList.add("yellow");
                temp[temp.indexOf(guessArr[i])] = null;
            } else if (guessArr[i]) {
                cells[i].classList.add("gray");
            }
        }
    
        if (guess === selectedWord) {
            gameOver = true;
            document.getElementById("restartBtn").style.display = "inline-block";
            showModal("¡Correcto!", "Has adivinado la palabra.");
            return;
        }
    
        currentRow++;
        currentCol = 0;
    
        if (currentRow === 6) {
            gameOver = true;
            document.getElementById("restartBtn").style.display = "inline-block";
            showModal("Has perdido", "La palabra era: " + selectedWord);
        }
    }
    
    function showModal(title, message) {
        content.innerHTML = `
            <h2>${title}</h2>
            <p>${message}</p>
            <button onclick="closeModal()">Cerrar</button>
        `;
        modal.style.display = "flex";
    }
    
    function showInstructions() {
        showModal(
            "Cómo jugar",
            `
            <p>Debes adivinar una palabra en español de 5 letras.</p>
            <p>Tienes 6 intentos para descubrir la palabra secreta.</p>
            <p>Después de cada intento, las letras cambiarán de color:</p>
            <p><strong>Verde:</strong> La letra es correcta y está en la posición correcta.</p>
            <p><strong>Amarillo:</strong> La letra está en la palabra, pero en otra posición.</p>
            <p><strong>Gris:</strong> La letra no está en la palabra.</p>
            <p>Escribe una palabra y presiona ENTER para confirmar.</p>
            `
        );
    }
    
    function showAdminPanel() {

        let wordListHTML = words
            .map(w => `<span class="admin-word" onclick="selectAdminWord('${w}')">${w}</span>`)
            .join(" ");
    
        content.innerHTML = `
            <h2>Painel Admin</h2>
            <p>Palabra actual: <strong>${selectedWord}</strong></p>
    
            <h3>Seleccionar palabra:</h3>
            <div class="admin-list">
                ${wordListHTML}
            </div>
    
            <hr>
    
            <h3>Agregar nueva palabra:</h3>
            <input type="text" id="newWord" maxlength="5" placeholder="Nueva palabra">
            <button onclick="addNewWord()">Agregar</button>
    
            <br><br>
            <button onclick="closeModal()">Cerrar</button>
        `;
    
        modal.style.display = "flex";
    }

    function selectAdminWord(word) {
        selectedWord = word;
        resetGame();
        closeModal();
    }
    
    function addNewWord() {
        const input = document.getElementById("newWord");
        let newWord = input.value.toUpperCase().trim();
    
        if (!/^[A-ZÑ]{5}$/.test(newWord)) {
            alert("Debe tener 5 letras válidas.");
            return;
        }
    
        if (!words.includes(newWord)) {
            words.push(newWord);
        }
    
        selectedWord = newWord;
    
        resetGame();
        closeModal();
    }
    
    function setNewWord() {
        const newWord = document.getElementById("newWord").value.toUpperCase();
    
        if (!/^[A-ZÑ]{5}$/.test(newWord)) {
            alert("Ingrese una palabra válida de 5 letras.");
            return;
        }
    
        selectedWord = newWord;
    
        resetGame();
        closeModal();
    }
    
    function closeModal() {
        modal.style.display = "none";
    
        if (adminMode) {
            adminMode = false;
        }
    }
    
    const helpBtn = document.getElementById("helpBtn");
    if (helpBtn) {
        helpBtn.onclick = showInstructions;
    }
    const hintBtn = document.getElementById("hintBtn");
    if (hintBtn) {
        hintBtn.onclick = () => 
            showModal("Pista", "Comienza con: " + selectedWord[0]);
    }
    
    document.getElementById("restartBtn").onclick = () => location.reload();
    // Criar teclado virtual
    const keyboardLayout = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const keyboard = document.getElementById("keyboard");
    const keyElements = {};

    keyboardLayout.split("").forEach(letter => {
        const key = document.createElement("div");
        key.textContent = letter;
        key.classList.add("key");
        key.onclick = () => handleInput(letter);
        keyboard.appendChild(key);
        keyElements[letter] = key;
    });

    // Enter e Backspace
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

    function resetGame() {
        currentRow = 0;
        currentCol = 0;
        gameOver = false;
    
        const rows = document.querySelectorAll(".row");
    
        rows.forEach(row => {
            Array.from(row.children).forEach(cell => {
                cell.textContent = "";
                cell.classList.remove("green","yellow","gray");
            });
        });
    
        document.getElementById("restartBtn").style.display = "none";
    }
    window.onload = showInstructions;