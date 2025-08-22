# 📖 DOM Selection Methods

## 🧒 Kid-like Explanation
Think of your **webpage as a big playground 🏞️** full of toys (HTML elements). To play, you need to **point out which toy you want**:
* 🎯 `getElementById()` → Pick **1 special toy** by its **name tag** (ID).
* 📦 `getElementsByClassName()` → Pick a **box of toys** that share the **same sticker** (class).
* 🏷️ `getElementsByTagName()` → Pick toys based on their **type** (tag like `<p>`, `<h1>`).
* 🔍 `querySelector()` → Pick the **first toy** that matches your rule (CSS selector).
* 🌍 `querySelectorAll()` → Pick **all toys** that match your rule (CSS selector).

## 📚 Proper Definitions & Syntax

### 🔹 `getElementById()`
* Finds **one element** by its unique **id**.

```javascript
document.getElementById("myId");
```

### 🔹 `getElementsByClassName()`
* Finds **multiple elements** that have the **same class**.
* Returns a **HTMLCollection** (like an array, but not exactly).

```javascript
document.getElementsByClassName("myClass");
```

### 🔹 `getElementsByTagName()`
* Finds all elements with a **specific tag name**.
* Returns a **HTMLCollection**.

```javascript
document.getElementsByTagName("p");
```

### 🔹 `querySelector()`
* Finds the **first element** that matches a **CSS selector**.

```javascript
document.querySelector("#myId");     // by id
document.querySelector(".myClass");  // by class
document.querySelector("p");         // by tag
```

### 🔹 `querySelectorAll()`
* Finds **all elements** that match a **CSS selector**.
* Returns a **NodeList** (can use forEach).

```javascript
document.querySelectorAll(".myClass");
```
