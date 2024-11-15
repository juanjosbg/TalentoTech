const display = document.getElementById("operaciones");
const buttons = document.querySelectorAll("#calculadora ul li");
const clearButton = document.getElementById("borrar");

let currentInput = "";
let currentOperation = "";

function updateDisplay(value) {
    display.textContent = value || "0";
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "=") {
            try {
                currentInput = eval(currentInput.replace(/x/g, "*"));
                updateDisplay(currentInput);
            } catch {
                updateDisplay("Error");
            }
        } else if (value === "+" || value === "-" || value === "x" || value === "/") {
            // Evitar múltiples operadores seguidos
            if (["+", "-", "x", "/"].includes(currentInput.slice(-1))) return;
            currentInput += value;
            updateDisplay(currentInput);
        } else {
            // Concatenar números y puntos decimales
            currentInput += value;
            updateDisplay(currentInput);
        }
    });
});


clearButton.addEventListener("click", () => {
    currentInput = "";
    updateDisplay("0");
});
