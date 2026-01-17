[📦 GitHub Repository](https://github.com/Rustom-yadav/smart-word-replacer)

---

# 🔁 Smart Word Replacer (JavaScript + Regex)

A logic-driven **Smart Word Replacer** implemented purely in **JavaScript**, leveraging **regular expressions** to accurately find and replace words within strings.

This project focuses on **pattern matching precision**, **controlled replacements**, and **safe string transformation**, without relying on any UI or external libraries.

---

## 🎯 Objective

The objective of this project is to:
- Replace target words using regex-based matching
- Avoid partial or unintended replacements
- Support global and case-insensitive scenarios
- Demonstrate practical regex mastery in JavaScript

Regex first. UI optional.

---

## ✨ Key Features

- Pure JavaScript implementation
- Regex-powered word replacement
- Word-boundary–safe matching
- Optional global and case-insensitive flags
- Reusable, function-based design

---

## 🧱 Tech Stack

- JavaScript (Vanilla)
- Regular Expressions (Regex)

No DOM. No HTML. No CSS.

---

## 📁 Project Structure
script.js - Main logic for word replacement
README.md - Project documentation
LICENSE - Licensing information
.gitignore - Git ignore file


Minimal structure, maximum clarity.

---

## ⚙️ How It Works

1. Accept input string, target word, and replacement word  
2. Construct a regex with word boundaries (`\b`)  
3. Apply appropriate flags (`g`, `i`)  
4. Replace matches safely using `String.replace()`  
5. Return the transformed string  

This mirrors real-world text processing pipelines.

---

## ▶️ Usage Example

```js
replaceWord(
  "JavaScript is great. I love JavaScript.",
  "JavaScript",
  "JS"
);
// JS is great. I love JS.

