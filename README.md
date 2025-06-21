# React Password Generator

A modern password generator built with React and Tailwind CSS. It lets users generate secure passwords with customizable length, and the option to include numbers and special characters. The password is automatically regenerated when settings change and can be copied to the clipboard with one click.

## Features

- Adjustable password length (8–50 characters)
- Option to include numbers
- Option to include special characters
- One-click copy to clipboard
- Automatically regenerates password on setting change
- Clean and responsive UI using Tailwind CSS
- Built entirely with React hooks (useState, useEffect, useRef, useCallback)

## Folder Structure

src/  
├── App.js — main logic for password generation and UI  
├── App.css — optional custom styling  
└── index.js — React entry point

## How It Works

- Password generation logic uses a base string of letters.  
- If the "Include numbers" option is checked, it appends digits (0–9).  
- If the "Include special characters" option is checked, it appends symbols like !@#$%^&.  
- A loop runs for the selected length and randomly picks characters from the allowed set.  
- The password is stored in React state and shown in a read-only input field.  
- A button allows copying the password using the Clipboard API.

## Getting Started

1. Clone the repository:

git clone https://github.com/hanoon-07/react-password-generator.git  
cd react-password-generator

2. Install dependencies:

npm install

3. Start the development server:

npm start

Now open http://localhost:3000 in your browser.

## Code Notes

- useState manages password, length, and toggles for number/symbols
- useEffect triggers regeneration whenever options change
- useCallback is used to memoize the password generator function
- useRef allows programmatically selecting and copying the password input

## Usage

- Move the range slider to choose your desired password length
- Use the checkboxes to include numbers or special characters
- The password updates instantly
- Click the Copy button to copy it to your clipboard

## Example Passwords

- 9ksHGzAw
- mB3z@q19
- 5yT!o^L0gQz

## License

This project is open source and available under the MIT License.

---

Made with ❤️ using React and Tailwind CSS.
