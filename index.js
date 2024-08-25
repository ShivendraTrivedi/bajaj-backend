const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// POST /bfhl
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            message: 'Invalid input data',
        });
    }

    const user_id = 'shivendra_trivedi_14062003';  // Replace with dynamic user_id based on actual name and DOB
    const email = 'shivendra.trivedi2021@vitstudent.ac.in';  // Replace with actual email
    const roll_number = '21BIT0183';  // Replace with actual roll number

    let numbers = [];
    let alphabets = [];
    let highest_lowercase_alphabet = [];

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string' && /^[a-zA-Z]$/.test(item)) {
            alphabets.push(item);
            if (/[a-z]/.test(item) && (highest_lowercase_alphabet.length === 0 || item > highest_lowercase_alphabet[0])) {
                highest_lowercase_alphabet = [item];
            }
        }
    });

    res.json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_lowercase_alphabet,
    });
});

// GET /bfhl
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
