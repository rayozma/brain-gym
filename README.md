# Brain Gym

A personal 10-minute daily trainer for contest-style math and Python.

## Publish on GitHub Pages
1. Create a repository (for example `brain-gym`).
2. Upload `index.html` and `problems.js` to the root of the repository.
3. Go to **Settings → Pages**. Set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Wait about 1 minute. Open `https://<your-user>.github.io/brain-gym/`.

You can also open `index.html` directly from your computer. Python needs an internet connection the first time (it loads from a CDN).

## Daily use
- **Today** shows one review problem and one new problem. New problems alternate between math and code.
- **Library** lets you open any problem at any time.
- After each problem, choose how it felt. This sets the next review date: Failed → tomorrow, Hard → sooner, OK → later, Easy → much later (1, 3, 7, 16, 35, 75 days).
- **Notebook** keeps your one-sentence notes. Tick "Only hard and failed" to see your mistake notebook.

## Your data
Progress is saved only in your browser (localStorage). Use **Data → Export backup** from time to time. Progress does not move between devices unless you export and import.

## Add problems
Open `problems.js` and add an object to the list. Each `id` must be new and must not change later.

Math problem (answer is a number):
```js
{"id":"m16","track":"math","topic":"Counting","level":2,"title":"Short title",
 "statement":"Question text. Use `code` and **bold**.",
 "hints":["First hint","Second hint"],"solution":"Explanation.","answer":42}
```

Code problem (tests are `[[arguments...], expected]`):
```js
{"id":"c16","track":"code","topic":"Lists","level":2,"title":"Short title","fname":"my_func",
 "statement":"Write `my_func(nums)` ...","starter":"def my_func(nums):\n    pass\n",
 "hints":["..."],"solution":"Explanation.","solutionCode":"def my_func(nums):\n    return sum(nums)",
 "tests":[[[[1,2,3]],6],[[[]],0]]}
```
In `solution`, start with **why** the idea works. Use `\n\n` for a new paragraph and `\n` for a new line.

Keep every number in `tests` below 9007199254740992 (2^53). Bigger numbers lose digits in the browser.

Check every new answer and test before you add it. A wrong test teaches the wrong thing.
