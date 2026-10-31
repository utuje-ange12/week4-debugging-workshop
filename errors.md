# Exercise 1: Six Broken Snippets

## Snippet 1: Greeting
- **Error type:** ReferenceError
- **What it means (my own words):** (explain in one sentence why `studentname` doesn't exist)
- **Fix:** (the corrected console.log line)

## Snippet 2: Shouting
- **Error type:** TypeError
- **What it means (my own words):** (explain why `toUppercase` can't be called)
- **Fix:** `console.log(city.toUpperCase())`
- # Exercise 1: Six Broken Snippets

## Snippet 3: Page title
- **Error type:** TypeError
- **What it means (my own words):** (what did querySelector return, and why can't you set .textContent on it?)
- **Fix:** `const title = document.querySelector("#page-title")`

## Snippet 4: Score counter
- **Error type:** TypeError
- **What it means (my own words):** (what does const promise, and which line breaks it?)
- **Fix:** `let score = 0`

## Snippet 5: Shopping list
- **Error type:** SyntaxError
- **What it means (my own words):** (why did the browser fail before running anything?)
- **Fix:** `const fruits = ["mango", "avocado", "banana"]`

## Snippet 6: Countdown
- **Error type:** RangeError
- **What it means (my own words):** (what did the endless negative numbers show?)
- **Fix:**
  ```js
  function countdown(n) {
    if (n < 0) return
    console.log(n)
    countdown(n - 1)
  }
  ``` 