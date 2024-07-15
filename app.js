let input = document.getElementById("InputBox");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        let buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            // Evaluate the current expression in 'string'
            try {
                string = eval(string); // Note: eval is not recommended for security reasons
                input.value = string;
            } catch (error) {
                // Handle any errors from eval()
                console.error('Error in evaluation:', error);
                string = "";
                input.value = "Error";
            }
        } else if (buttonText === 'AC') {
            // Clear the string
            string = "";
            input.value = string;
        } else if (buttonText === 'DEL') {
            // Delete the last character from 'string'
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            // For other buttons, append their text to 'string'
            string += buttonText;
            input.value = string;
        }

        // Blur the input to remove focus and cursor
        input.blur();
    });
});

