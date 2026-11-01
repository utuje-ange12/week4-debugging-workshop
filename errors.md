# Exercise 1: Six Broken Snippets

## Snippet 1: Greeting
- **Error type:** ReferenceError
- **What it means:** JavaScript is case-sensitive. The variable is `studentName` but the code uses `studentname`, which does not exist.
- **Fix:** `console.log("Welcome, " + studentName)`

## Snippet 2: Shouting
- **Error type:** TypeError
- **What it means:** Strings have no method called `toUppercase`. The real method is `toUpperCase` with a capital C.
- **Fix:** `console.log(city.toUpperCase())`

## Snippet 3: Page title
- **Error type:** TypeError
- **What it means:** The selector `#page-titel` is misspelled, so `querySelector` returned `null`. Setting `.textContent` on `null` crashes.
- **Fix:** `const title = document.querySelector("#page-title")`

## Snippet 4: Score counter
- **Error type:** TypeError
- **What it means:** `score` was declared with `const`, which cannot be reassigned, but line 2 changes it.
- **Fix:** `let score = 0`

## Snippet 5: Shopping list
- **Error type:** SyntaxError
- **What it means:** A comma is missing between `"avocado"` and `"banana"`. The browser could not parse the script, so none of it ran.
- **Fix:** `const fruits = ["mango", "avocado", "banana"]`

## Snippet 6: Countdown
- **Error type:** RangeError
- **What it means:** `countdown` calls itself forever with no stopping condition. The Console showed endless negative numbers until the call stack filled up.
- **Fix:**
  ```js
  function countdown(n) {
    if (n < 0) return
    console.log(n)
    countdown(n - 1)
  }
  ```