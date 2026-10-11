window.PROBLEMS = [
 {
  "id": "m01",
  "track": "math",
  "topic": "Counting",
  "level": 1,
  "title": "Multiples of 3",
  "statement": "How many integers from 1 to 100 are divisible by 3?",
  "hints": [
   "The multiples are 3, 6, 9, ... Which is the last one that is 100 or less?",
   "Divide: 100 ÷ 3, and keep only the whole part."
  ],
  "solution": "**Why multiply by 3?** \"Divisible by 3\" means the number is 3 × something. So every number we want can be written as 3 × 1, 3 × 2, 3 × 3, ... This turns the hard question \"how many numbers?\" into an easy one: \"how many multipliers?\"\n\nList them: 3 × 1 = 3, 3 × 2 = 6, ..., 3 × 33 = 99. The next one, 3 × 34 = 102, is bigger than 100, so we stop.\n\nThe multipliers are 1, 2, 3, ..., 33. That is **33** numbers.\n\n**Shortcut:** 100 ÷ 3 = 33.3... Keep only the whole part: ⌊100/3⌋ = 33. In general, from 1 to N there are ⌊N/k⌋ multiples of k.",
  "answer": 33
 },
 {
  "id": "c01",
  "track": "code",
  "topic": "Basics",
  "level": 1,
  "title": "Add two numbers",
  "fname": "add",
  "statement": "Write `add(a, b)` that returns the sum of `a` and `b`.",
  "starter": "def add(a, b):\n    # write your code here\n    pass\n",
  "hints": [
   "Use the `+` operator.",
   "Use `return`, not `print`. The tests read the returned value."
  ],
  "solution": "**Why `return`?** A function is like a small machine: inputs go in, one result comes out. `return` is how the result comes out, so the tests can read it.\n\nWe want the sum, so `return a + b`.\n\n**Common mistake:** `print(a + b)`. It shows the number on the screen, but the function still returns `None`, so the tests fail.",
  "solutionCode": "def add(a, b):\n    return a + b",
  "tests": [
   [
    [
     2,
     3
    ],
    5
   ],
   [
    [
     -4,
     4
    ],
    0
   ],
   [
    [
     100,
     250
    ],
    350
   ],
   [
    [
     0,
     0
    ],
    0
   ]
  ]
 },
 {
  "id": "m02",
  "track": "math",
  "topic": "Algebra",
  "level": 1,
  "title": "Gauss's sum",
  "statement": "What is 1 + 2 + 3 + ... + 100?",
  "hints": [
   "Write the sum forwards and backwards, one above the other.",
   "Each column adds to 101. How many columns are there?"
  ],
  "solution": "**Why make pairs?** Adding 100 numbers one by one is slow. If we can group them so every group has the same sum, we only need one multiplication.\n\nThe smallest and the largest go well together: 1 + 100 = 101. Move one step in from each end: 2 + 99 = 101, 3 + 98 = 101, ... The left number goes up by 1 and the right number goes down by 1, so the sum stays 101.\n\n100 numbers make 50 pairs. So the sum is 50 × 101 = **5050**.\n\n**In general:** 1 + 2 + ... + n = n(n + 1)/2. There are n/2 pairs, and each pair adds to n + 1.",
  "answer": 5050
 },
 {
  "id": "c02",
  "track": "code",
  "topic": "Basics",
  "level": 1,
  "title": "Even or odd",
  "fname": "is_even",
  "statement": "Write `is_even(n)`. Return `True` if `n` is even. Return `False` if `n` is odd.",
  "starter": "def is_even(n):\n    # write your code here\n    pass\n",
  "hints": [
   "The `%` operator gives the remainder of a division.",
   "A number is even when `n % 2 == 0`."
  ],
  "solution": "**Why `%`?** Even means \"divides by 2 with nothing left over\". The `%` operator gives exactly the part left over: `7 % 2` is 1, `4 % 2` is 0.\n\nSo n is even when `n % 2 == 0`. This comparison is already `True` or `False`, so return it directly. You do not need `if ... return True else return False`.\n\nIt also works for negative numbers: in Python `-3 % 2` is 1.",
  "solutionCode": "def is_even(n):\n    return n % 2 == 0",
  "tests": [
   [
    [
     4
    ],
    true
   ],
   [
    [
     7
    ],
    false
   ],
   [
    [
     0
    ],
    true
   ],
   [
    [
     -3
    ],
    false
   ],
   [
    [
     1000001
    ],
    false
   ]
  ]
 },
 {
  "id": "m03",
  "track": "math",
  "topic": "Algebra",
  "level": 1,
  "title": "Odd numbers",
  "statement": "What is 1 + 3 + 5 + ... + 99 (all odd numbers up to 99)?",
  "hints": [
   "Try small cases: 1, 1+3, 1+3+5. Do you see a pattern?",
   "The sum of the first k odd numbers is k². How many odd numbers are from 1 to 99?"
  ],
  "solution": "**Why try small cases?** We do not know a formula for this sum. When you do not know where to start, calculate the first few cases and look for a pattern.\n\n1 = 1\n1 + 3 = 4\n1 + 3 + 5 = 9\n1 + 3 + 5 + 7 = 16\nThese are 1², 2², 3², 4². So the sum of the first k odd numbers looks like k².\n\n**Why is it true?** Draw a k × k square of dots. To make it (k + 1) × (k + 1), you add one row and one column: 2k + 1 dots. That is exactly the next odd number.\n\nHow many odd numbers are from 1 to 99? The k-th odd number is 2k − 1, and 2k − 1 = 99 gives k = 50. So the sum is 50² = **2500**.",
  "answer": 2500
 },
 {
  "id": "c03",
  "track": "code",
  "topic": "Loops",
  "level": 1,
  "title": "Largest number",
  "fname": "largest",
  "statement": "Write `largest(nums)`. It gets a list of numbers (at least one number). Return the largest number. Do not use the built-in `max`.",
  "starter": "def largest(nums):\n    # write your code here\n    pass\n",
  "hints": [
   "Keep a variable `best`. Start it with the first number.",
   "Loop over the list. If a number is bigger than `best`, change `best`."
  ],
  "solution": "**Why keep a \"best so far\"?** The code reads the list one number at a time. So remember the largest number seen so far, and update it when a bigger one comes. At the end, \"largest so far\" is the largest of all.\n\nStart with `best = nums[0]`, not 0. If all numbers are negative, 0 would be a wrong answer.\n\nThis pattern (keep the best so far) appears in many problems: smallest, longest, most common, ...",
  "solutionCode": "def largest(nums):\n    best = nums[0]\n    for x in nums:\n        if x > best:\n            best = x\n    return best",
  "tests": [
   [
    [
     [
      3,
      9,
      2
     ]
    ],
    9
   ],
   [
    [
     [
      -5,
      -2,
      -8
     ]
    ],
    -2
   ],
   [
    [
     [
      7
     ]
    ],
    7
   ],
   [
    [
     [
      1,
      1,
      1,
      0
     ]
    ],
    1
   ]
  ]
 },
 {
  "id": "m04",
  "track": "math",
  "topic": "Counting",
  "level": 1,
  "title": "Handshakes",
  "statement": "There are 10 people at a meeting. Each person shakes hands with each other person one time. How many handshakes are there?",
  "hints": [
   "Each person shakes 9 hands. But 10 × 9 counts each handshake two times.",
   "This is the number of ways to choose 2 people from 10."
  ],
  "solution": "**Why start with 10 × 9?** It is easier to count from one person's view. Each person shakes hands with the 9 other people. 10 people × 9 handshakes = 90.\n\nBut look at one handshake between person A and person B. A counts it, and B counts it too. So 90 counts every handshake exactly two times.\n\nFix the double count: 90 ÷ 2 = **45**.\n\n**The idea:** count in an easy way, then divide by how many times each thing was counted. A handshake is just a choice of 2 people from 10, so the answer is also C(10, 2) = (10 × 9)/2.",
  "answer": 45
 },
 {
  "id": "c04",
  "track": "code",
  "topic": "Strings",
  "level": 1,
  "title": "Count vowels",
  "fname": "count_vowels",
  "statement": "Write `count_vowels(s)`. Return how many vowels (a, e, i, o, u) are in the string `s`. Count uppercase and lowercase.",
  "starter": "def count_vowels(s):\n    # write your code here\n    pass\n",
  "hints": [
   "Loop over each character: `for ch in s:`",
   "Use `ch.lower() in 'aeiou'` to test a character."
  ],
  "solution": "**Why loop over characters?** We must look at every letter, so we visit them one by one and keep a counter.\n\nFor each `ch`, make it lowercase with `ch.lower()`. Then 'A' and 'a' are the same, and one test is enough: `ch.lower() in 'aeiou'`. If it is true, add 1.\n\nPattern: counter = 0, loop, test, add 1. Short version: `sum(1 for ch in s if ch.lower() in 'aeiou')`.",
  "solutionCode": "def count_vowels(s):\n    n = 0\n    for ch in s:\n        if ch.lower() in 'aeiou':\n            n += 1\n    return n",
  "tests": [
   [
    [
     "hello"
    ],
    2
   ],
   [
    [
     "PYTHON"
    ],
    1
   ],
   [
    [
     "Brain Gym"
    ],
    2
   ],
   [
    [
     ""
    ],
    0
   ],
   [
    [
     "AEIOUaeiou"
    ],
    10
   ]
  ]
 },
 {
  "id": "m05",
  "track": "math",
  "topic": "Geometry",
  "level": 1,
  "title": "Hexagon angles",
  "statement": "What is the sum of the interior angles of a hexagon (6 sides), in degrees?",
  "hints": [
   "Cut the hexagon into triangles from one corner.",
   "An n-sided polygon makes n − 2 triangles. Each triangle has 180°."
  ],
  "solution": "**Why triangles?** We know one angle fact very well: the angles of a triangle add to 180°. So we try to cut the hexagon into triangles.\n\nPick one corner. Draw a line from it to every corner that is not its neighbour. A hexagon has 6 corners. You cannot draw to the corner itself or to its 2 neighbours, so you draw 3 lines. These 3 lines cut the hexagon into 4 triangles.\n\nThe angles of the 4 triangles together make exactly the angles of the hexagon. So the sum is 4 × 180° = **720°**.\n\n**In general:** an n-sided polygon cuts into n − 2 triangles, so its angles add to (n − 2) × 180°.",
  "answer": 720
 },
 {
  "id": "c05",
  "track": "code",
  "topic": "Strings",
  "level": 1,
  "title": "Reverse a string",
  "fname": "reverse",
  "statement": "Write `reverse(s)`. Return the string `s` in reverse order.",
  "starter": "def reverse(s):\n    # write your code here\n    pass\n",
  "hints": [
   "Python can slice strings: `s[start:stop:step]`.",
   "A step of `-1` reads the string backwards."
  ],
  "solution": "**Why slicing?** Python slices have a step: `s[start:stop:step]`. Leave start and stop empty to use the whole string. A step of `-1` walks from the end to the start. So `s[::-1]` is the reversed string.\n\n**Loop version, to see how it works:** start with `r = ''`. For each character, put it in front: `r = ch + r`. The last character ends up first.",
  "solutionCode": "def reverse(s):\n    return s[::-1]",
  "tests": [
   [
    [
     "abc"
    ],
    "cba"
   ],
   [
    [
     "drone"
    ],
    "enord"
   ],
   [
    [
     ""
    ],
    ""
   ],
   [
    [
     "a"
    ],
    "a"
   ]
  ]
 },
 {
  "id": "m06",
  "track": "math",
  "topic": "Number theory",
  "level": 1,
  "title": "Greatest common divisor",
  "statement": "What is the greatest common divisor of 84 and 126?",
  "hints": [
   "Write both numbers as products of primes.",
   "84 = 2² × 3 × 7 and 126 = 2 × 3² × 7. Take the smaller power of each prime."
  ],
  "solution": "**Why prime factors?** Every divisor of a number is built from that number's primes. A common divisor can only use primes that both numbers have. So write both numbers as primes and compare.\n\n84 = 2 × 2 × 3 × 7 = 2² × 3 × 7\n126 = 2 × 3 × 3 × 7 = 2 × 3² × 7\n\nFor each prime, take only as many copies as **both** numbers have (the smaller power):\n2: 84 has two, 126 has one → take one.\n3: 84 has one, 126 has two → take one.\n7: both have one → take one.\n\ngcd = 2 × 3 × 7 = **42**. Check: 84 = 2 × 42 and 126 = 3 × 42.",
  "answer": 42
 },
 {
  "id": "c06",
  "track": "code",
  "topic": "Basics",
  "level": 1,
  "title": "FizzBuzz",
  "fname": "fizzbuzz",
  "statement": "Write `fizzbuzz(n)`. Return `'FizzBuzz'` if `n` is divisible by 3 and by 5. Return `'Fizz'` if only by 3. Return `'Buzz'` if only by 5. Otherwise return `n` as a string, for example `'7'`.",
  "starter": "def fizzbuzz(n):\n    # write your code here\n    pass\n",
  "hints": [
   "Test the 'both' case first.",
   "Divisible by 3 and 5 means divisible by 15. `str(n)` turns a number into a string."
  ],
  "solution": "**Why test 15 first?** An `if/elif` chain stops at the first true test. 15 is divisible by 3, so if you test 3 first, 15 returns 'Fizz' and never reaches the 'FizzBuzz' case.\n\nSo order the tests from most special to least special: divisible by 15 (both 3 and 5), then by 3, then by 5, otherwise `str(n)`.\n\n**Rule:** when one case is inside another case, test the smaller (more special) case first.",
  "solutionCode": "def fizzbuzz(n):\n    if n % 15 == 0:\n        return 'FizzBuzz'\n    if n % 3 == 0:\n        return 'Fizz'\n    if n % 5 == 0:\n        return 'Buzz'\n    return str(n)",
  "tests": [
   [
    [
     3
    ],
    "Fizz"
   ],
   [
    [
     10
    ],
    "Buzz"
   ],
   [
    [
     30
    ],
    "FizzBuzz"
   ],
   [
    [
     7
    ],
    "7"
   ],
   [
    [
     1
    ],
    "1"
   ]
  ]
 },
 {
  "id": "m07",
  "track": "math",
  "topic": "Logic",
  "level": 1,
  "title": "Socks in the dark",
  "statement": "A drawer has 10 red socks and 10 blue socks. The room is dark. What is the smallest number of socks you must take to be sure you have two of the same colour?",
  "hints": [
   "Think about the worst case. How long can you avoid a pair?",
   "There are only 2 colours."
  ],
  "solution": "**Why think about the worst case?** \"To be sure\" means it must work even with the worst luck. So ask: how many socks can I take and still have no pair?\n\nWith no pair, every sock has a different colour. There are only 2 colours, so you can hold at most 2 socks with no pair: one red and one blue.\n\nThe 3rd sock is red or blue, so it must match one of them. So **3** socks are always enough, and 2 are not.\n\n**The idea:** this is the pigeonhole principle. If there are more things than boxes, some box gets two. Here: 3 socks, 2 colours. The \"10 socks\" in the question does not matter. It is there to distract you.",
  "answer": 3
 },
 {
  "id": "c07",
  "track": "code",
  "topic": "Loops",
  "level": 1,
  "title": "Sum of digits",
  "fname": "digit_sum",
  "statement": "Write `digit_sum(n)`. `n` is 0 or a positive integer. Return the sum of its digits. Example: `digit_sum(472)` is 13.",
  "starter": "def digit_sum(n):\n    # write your code here\n    pass\n",
  "hints": [
   "`n % 10` gives the last digit. `n // 10` removes the last digit.",
   "Repeat while `n > 0`. (Another method: loop over `str(n)`.)"
  ],
  "solution": "**Why `% 10` and `// 10`?** In base 10, the last digit is the remainder after dividing by 10: `472 % 10` is 2. Integer division by 10 removes that digit: `472 // 10` is 47.\n\nSo repeat: add `n % 10` to the total, then set `n = n // 10`. 472 → 47 → 4 → 0. When n is 0, no digits are left. Total: 2 + 7 + 4 = 13.\n\nThe string way also works: `sum(int(d) for d in str(n))`. Learn the digit loop too, because many contest problems use it.",
  "solutionCode": "def digit_sum(n):\n    total = 0\n    while n > 0:\n        total += n % 10\n        n //= 10\n    return total",
  "tests": [
   [
    [
     472
    ],
    13
   ],
   [
    [
     0
    ],
    0
   ],
   [
    [
     9
    ],
    9
   ],
   [
    [
     100000
    ],
    1
   ],
   [
    [
     99999
    ],
    45
   ]
  ]
 },
 {
  "id": "m08",
  "track": "math",
  "topic": "Number theory",
  "level": 2,
  "title": "Last digit",
  "statement": "What is the last digit of 7¹⁰⁰?",
  "hints": [
   "Calculate the last digits of 7¹, 7², 7³, 7⁴, 7⁵.",
   "The last digits repeat every 4 steps: 7, 9, 3, 1."
  ],
  "solution": "**Why look only at last digits?** 7¹⁰⁰ is huge. But the last digit of a product depends only on the last digits of the numbers you multiply. So we can follow just the last digit as we multiply by 7 again and again.\n\n7¹ = 7 → 7\n7² = 49 → 9\n7³: 9 × 7 = 63 → 3\n7⁴: 3 × 7 = 21 → 1\n7⁵: 1 × 7 = 7 → 7, back to the start.\n\nAfter 1 comes 7 again, so the last digits repeat: 7, 9, 3, 1, 7, 9, 3, 1, ... The cycle has length 4.\n\n100 = 4 × 25, so 7¹⁰⁰ is at the end of a full cycle, like 7⁴. Its last digit is **1**.",
  "answer": 1
 },
 {
  "id": "c08",
  "track": "code",
  "topic": "Strings",
  "level": 2,
  "title": "Palindrome",
  "fname": "is_palindrome",
  "statement": "Write `is_palindrome(s)`. A palindrome reads the same forwards and backwards. Ignore uppercase/lowercase and ignore spaces. Return `True` or `False`.",
  "starter": "def is_palindrome(s):\n    # write your code here\n    pass\n",
  "hints": [
   "First make a clean string: lowercase, with no spaces.",
   "`s.replace(' ', '')` removes spaces. Then compare the clean string with its reverse."
  ],
  "solution": "**Why clean the string first?** The rules say to ignore case and spaces. If we remove them first, the problem becomes simple: is the string equal to its reverse?\n\n`t = s.lower().replace(' ', '')` makes a clean string. Then `return t == t[::-1]`.\n\n**The idea:** change the input into a simpler form, then solve the simple problem.",
  "solutionCode": "def is_palindrome(s):\n    t = s.lower().replace(' ', '')\n    return t == t[::-1]",
  "tests": [
   [
    [
     "level"
    ],
    true
   ],
   [
    [
     "Never odd or even"
    ],
    true
   ],
   [
    [
     "drone"
    ],
    false
   ],
   [
    [
     "A"
    ],
    true
   ],
   [
    [
     "ab"
    ],
    false
   ]
  ]
 },
 {
  "id": "m09",
  "track": "math",
  "topic": "Number theory",
  "level": 2,
  "title": "Count the divisors",
  "statement": "How many positive divisors does 72 have?",
  "hints": [
   "Write 72 as a product of primes: 72 = 2³ × 3².",
   "A divisor is 2ᵃ × 3ᵇ with a from 0 to 3 and b from 0 to 2. How many choices?"
  ],
  "solution": "**Why prime factors?** Every divisor of 72 is made from the primes of 72, and it cannot use more copies than 72 has. So first write 72 = 2³ × 3².\n\nA divisor looks like 2ᵃ × 3ᵇ.\nFor a you can choose 0, 1, 2 or 3 → 4 choices.\nFor b you can choose 0, 1 or 2 → 3 choices.\nEach pair of choices gives a different divisor. For example a = 1, b = 2 gives 2 × 9 = 18.\n\nSo there are 4 × 3 = **12** divisors: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72.\n\n**Rule:** add 1 to each exponent, then multiply. The \"+1\" is the choice \"use 0 copies of this prime\".",
  "answer": 12
 },
 {
  "id": "c09",
  "track": "code",
  "topic": "Math in code",
  "level": 2,
  "title": "Greatest common divisor",
  "fname": "gcd",
  "statement": "Write `gcd(a, b)` for two positive integers. Return the largest number that divides both. Do not use `math.gcd`.",
  "starter": "def gcd(a, b):\n    # write your code here\n    pass\n",
  "hints": [
   "Euclid's idea: gcd(a, b) = gcd(b, a % b).",
   "Repeat until `b` is 0. Then the answer is `a`."
  ],
  "solution": "**Why does Euclid's idea work?** Any number that divides both a and b also divides a − b. So it also divides `a % b`, which is a minus some copies of b. This means gcd(a, b) = gcd(b, a % b). The numbers get smaller, but the gcd stays the same.\n\nRepeat until b is 0. Then the answer is a, because every number divides 0.\n\nExample: gcd(84, 126) → gcd(126, 84) → gcd(84, 42) → gcd(42, 0) = 42.\n\nCode: `while b: a, b = b, a % b`, then `return a`. It is very fast, even for huge numbers.",
  "solutionCode": "def gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a",
  "tests": [
   [
    [
     12,
     18
    ],
    6
   ],
   [
    [
     7,
     13
    ],
    1
   ],
   [
    [
     100,
     75
    ],
    25
   ],
   [
    [
     5,
     5
    ],
    5
   ],
   [
    [
     1071,
     462
    ],
    21
   ]
  ]
 },
 {
  "id": "m10",
  "track": "math",
  "topic": "Counting",
  "level": 2,
  "title": "Arrange the letters",
  "statement": "How many different ways can you arrange the letters of the word LEVEL?",
  "hints": [
   "If all 5 letters were different, there would be 5! = 120 ways.",
   "L appears 2 times and E appears 2 times. Swapping equal letters gives the same word."
  ],
  "solution": "**Why start with 5!?** Arranging 5 different things is easy: 5 × 4 × 3 × 2 × 1 = 120. LEVEL has repeated letters, so first pretend all letters are different, then fix the over-count.\n\nGive the copies labels: L₁ E₁ V E₂ L₂. Now there are 120 arrangements. But in the real word you cannot see the labels. Swapping L₁ and L₂ gives the same word, and swapping E₁ and E₂ gives the same word. So each real word was counted 2 × 2 = 4 times.\n\n120 ÷ 4 = **30**.\n\n**Rule:** n! divided by (copies of each repeated letter)!. It is the same idea as the handshakes: count too much, then divide.",
  "answer": 30
 },
 {
  "id": "c10",
  "track": "code",
  "topic": "Math in code",
  "level": 2,
  "title": "Count primes",
  "fname": "count_primes",
  "statement": "Write `count_primes(n)`. Return how many prime numbers are less than or equal to `n`. (A prime has exactly two divisors: 1 and itself. 1 is not prime.)",
  "starter": "def count_primes(n):\n    # write your code here\n    pass\n",
  "hints": [
   "Write a helper `is_prime(k)` that tests divisors from 2 up to the square root of k.",
   "Only test `d` while `d * d <= k`. This makes it much faster."
  ],
  "solution": "**Why stop at the square root?** If k = d × e and both d and e are bigger than √k, then d × e is bigger than k. That is impossible. So if k has a divisor, at least one divisor is ≤ √k. If you find none up to √k, k is prime.\n\nWrite `is_prime(k)`: return `False` for k < 2, then try d = 2, 3, ... while `d * d <= k`. Then count the numbers from 2 to n that pass.\n\n`d * d <= k` avoids square roots and float problems. Later you will learn the Sieve of Eratosthenes, which is faster for big n.",
  "solutionCode": "def count_primes(n):\n    count = 0\n    for k in range(2, n + 1):\n        d = 2\n        prime = True\n        while d * d <= k:\n            if k % d == 0:\n                prime = False\n                break\n            d += 1\n        if prime:\n            count += 1\n    return count",
  "tests": [
   [
    [
     10
    ],
    4
   ],
   [
    [
     1
    ],
    0
   ],
   [
    [
     2
    ],
    1
   ],
   [
    [
     100
    ],
    25
   ],
   [
    [
     1000
    ],
    168
   ]
  ]
 },
 {
  "id": "m11",
  "track": "math",
  "topic": "Counting",
  "level": 2,
  "title": "Squares on a grid",
  "statement": "A 4 × 4 board has 16 small squares. How many squares of any size are on the board (1×1, 2×2, 3×3 and 4×4)?",
  "hints": [
   "Count each size separately.",
   "A k×k square can start in (5 − k) × (5 − k) positions."
  ],
  "solution": "**Why split by size?** One big count is easier as several small counts. Count the 1×1 squares, then 2×2, and so on, then add.\n\nFor a k×k square, look at its top-left corner. On a board 4 squares wide, a square k wide can start in 5 − k columns, and also in 5 − k rows. So there are (5 − k)² positions.\n\n1×1: 4² = 16\n2×2: 3² = 9\n3×3: 2² = 4\n4×4: 1² = 1\n\nTotal: 16 + 9 + 4 + 1 = **30**. On an n × n board the answer is 1² + 2² + ... + n².",
  "answer": 30
 },
 {
  "id": "c11",
  "track": "code",
  "topic": "Lists",
  "level": 2,
  "title": "Prefix sums",
  "fname": "prefix_sums",
  "statement": "Write `prefix_sums(nums)`. Return a new list. Item i is the sum of `nums[0]` to `nums[i]`. Example: `[1, 2, 3]` gives `[1, 3, 6]`.",
  "starter": "def prefix_sums(nums):\n    # write your code here\n    pass\n",
  "hints": [
   "Keep a running total.",
   "Append the running total to a result list after each number."
  ],
  "solution": "**Why a running total?** Each answer is the previous answer plus one new number: (sum up to i) = (sum up to i − 1) + nums[i]. So you never need to add from the start again.\n\nKeep `total = 0`. For each number x: `total += x`, then append `total` to the result.\n\n**Why it matters:** with prefix sums `pre`, the sum of any range i..j is `pre[j] - pre[i-1]`, just one subtraction. This is a key contest tool.",
  "solutionCode": "def prefix_sums(nums):\n    out = []\n    total = 0\n    for x in nums:\n        total += x\n        out.append(total)\n    return out",
  "tests": [
   [
    [
     [
      1,
      2,
      3
     ]
    ],
    [
     1,
     3,
     6
    ]
   ],
   [
    [
     []
    ],
    []
   ],
   [
    [
     [
      5,
      -5,
      5
     ]
    ],
    [
     5,
     0,
     5
    ]
   ],
   [
    [
     [
      10
     ]
    ],
    [
     10
    ]
   ]
  ]
 },
 {
  "id": "m12",
  "track": "math",
  "topic": "Counting",
  "level": 2,
  "title": "Grid paths",
  "statement": "You walk on a grid from the bottom-left corner to the point 3 steps right and 3 steps up. Each step goes 1 right or 1 up. How many different paths are there?",
  "hints": [
   "Every path has exactly 6 steps: 3 R and 3 U.",
   "A path is a word like RRUURU. Choose which 3 of the 6 steps are R."
  ],
  "solution": "**Why write a path as letters?** Drawing all paths is slow and it is easy to miss one. Instead, describe each path by its steps. Every path needs 3 rights (R) and 3 ups (U), so 6 steps, for example R R U U R U.\n\nEvery word with 3 R's and 3 U's is one path, and every path is one such word. So we only need to count words.\n\nA word is decided by where the 3 R's go (the U's fill the other places). Choose 3 places out of 6: C(6, 3) = (6 × 5 × 4)/(3 × 2 × 1) = **20**.\n\n**The idea:** turn a picture into a word, then count the words.",
  "answer": 20
 },
 {
  "id": "c12",
  "track": "code",
  "topic": "Lists",
  "level": 2,
  "title": "Second largest",
  "fname": "second_largest",
  "statement": "Write `second_largest(nums)`. Return the second largest **different** value in the list. If there is no such value, return `None`. Example: `[5, 5, 3]` gives 3.",
  "starter": "def second_largest(nums):\n    # write your code here\n    pass\n",
  "hints": [
   "`set(nums)` removes duplicates.",
   "Sort the unique values. Check the length before you read the second item."
  ],
  "solution": "**Why remove duplicates?** The question asks for the second largest **different** value. In [5, 5, 3], the two 5's count as one. `set(nums)` keeps one copy of each value.\n\nThen sort the unique values. If fewer than 2 are left, there is no second largest: return `None`. Otherwise the second from the end, `u[-2]`, is the answer.\n\nAlways check the length before you read `u[-2]`. Otherwise the code crashes on lists like [7] or [4, 4].",
  "solutionCode": "def second_largest(nums):\n    u = sorted(set(nums))\n    if len(u) < 2:\n        return None\n    return u[-2]",
  "tests": [
   [
    [
     [
      5,
      5,
      3
     ]
    ],
    3
   ],
   [
    [
     [
      1,
      2,
      3,
      4
     ]
    ],
    3
   ],
   [
    [
     [
      7,
      7
     ]
    ],
    null
   ],
   [
    [
     [
      -1,
      -9
     ]
    ],
    -9
   ],
   [
    [
     [
      4
     ]
    ],
    null
   ]
  ]
 },
 {
  "id": "m13",
  "track": "math",
  "topic": "Number theory",
  "level": 2,
  "title": "Remainder of a power",
  "statement": "What is the remainder when 2¹⁰ is divided by 7?",
  "hints": [
   "2³ = 8, and 8 leaves remainder 1 when divided by 7.",
   "2¹⁰ = (2³)³ × 2."
  ],
  "solution": "**Why look for remainder 1?** Multiplying by a number with remainder 1 does not change the remainder. So if a small power of 2 leaves remainder 1, big powers become easy.\n\nTry small powers and divide by 7:\n2¹ = 2 → remainder 2\n2² = 4 → remainder 4\n2³ = 8 = 7 + 1 → remainder **1**. Found it.\n\nNow split 10 into 3's: 2¹⁰ = 2³ × 2³ × 2³ × 2. Each 2³ has remainder 1, so the remainder is 1 × 1 × 1 × 2 = **2**.\n\nCheck: 2¹⁰ = 1024 = 7 × 146 + 2.",
  "answer": 2
 },
 {
  "id": "c13",
  "track": "code",
  "topic": "Searching",
  "level": 2,
  "title": "Pair with a target sum",
  "fname": "has_pair",
  "statement": "Write `has_pair(nums, target)`. Return `True` if two **different positions** in the list have values that add up to `target`. Otherwise return `False`.",
  "starter": "def has_pair(nums, target):\n    # write your code here\n    pass\n",
  "hints": [
   "The easy method uses two loops: `for i` and `for j > i`. That is fine here.",
   "Faster method: keep a set of numbers seen so far. For each x, check if `target - x` is in the set."
  ],
  "solution": "**Why a set?** For each x we need a partner y with x + y = target, so y = target − x. Instead of searching with a second loop, remember the numbers you have already seen in a set. Checking `in` on a set is very fast.\n\nFor each x: if `target - x` is in `seen`, return `True`. Then add x to `seen`. Add x **after** the check, so x cannot pair with itself.\n\nIf the loop ends, return `False`. This looks at each number once. Two loops also work, but they are slower on big lists.",
  "solutionCode": "def has_pair(nums, target):\n    seen = set()\n    for x in nums:\n        if target - x in seen:\n            return True\n        seen.add(x)\n    return False",
  "tests": [
   [
    [
     [
      1,
      4,
      6,
      9
     ],
     10
    ],
    true
   ],
   [
    [
     [
      1,
      2,
      3
     ],
     7
    ],
    false
   ],
   [
    [
     [
      5
     ],
     10
    ],
    false
   ],
   [
    [
     [
      5,
      5
     ],
     10
    ],
    true
   ],
   [
    [
     [],
     0
    ],
    false
   ]
  ]
 },
 {
  "id": "m14",
  "track": "math",
  "topic": "Number theory",
  "level": 3,
  "title": "Remainder puzzle",
  "statement": "Find the smallest positive integer n. n leaves remainder 2 when divided by 3, remainder 3 when divided by 4, and remainder 4 when divided by 5.",
  "hints": [
   "Look at n + 1. What happens to it?",
   "n + 1 is divisible by 3, 4 and 5."
  ],
  "solution": "**Why look at n + 1?** The three conditions look different, but each remainder is exactly one less than the divisor: 2 = 3 − 1, 3 = 4 − 1, 4 = 5 − 1. So n is 1 short of a multiple of 3, of 4 and of 5.\n\nThat means n + 1 is a multiple of 3, 4 and 5 at the same time. The smallest such number is 3 × 4 × 5 = 60 (they share no common factor, so we just multiply).\n\nn + 1 = 60, so n = **59**. Check: 59 = 3 × 19 + 2 = 4 × 14 + 3 = 5 × 11 + 4.\n\n**The idea:** when the conditions look messy, change the question into an easier one.",
  "answer": 59
 },
 {
  "id": "c14",
  "track": "code",
  "topic": "Recursion",
  "level": 3,
  "title": "Fibonacci",
  "fname": "fib",
  "statement": "Write `fib(n)`. The Fibonacci numbers are 0, 1, 1, 2, 3, 5, 8, ... Each number is the sum of the two before it. `fib(0)` is 0 and `fib(1)` is 1. The tests use `n` up to 70, so the code must be fast.",
  "starter": "def fib(n):\n    # write your code here\n    pass\n",
  "hints": [
   "A simple recursive function is too slow for n = 70. Why? It calculates the same values many times.",
   "Use a loop. Keep only the last two numbers: `a, b = b, a + b`."
  ],
  "solution": "**Why not simple recursion?** `fib(n) = fib(n-1) + fib(n-2)` calls fib(n−2) two times, fib(n−3) three times, and so on. The work grows very fast, so n = 70 would take years.\n\nBut each number only needs the two numbers before it. So walk forward and keep just two values: start with `a, b = 0, 1`, then repeat n times: `a, b = b, a + b`. Then `a` is fib(n).\n\n**The idea:** this is the first idea of dynamic programming. Save results so you do not calculate them again.",
  "solutionCode": "def fib(n):\n    a, b = 0, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a",
  "tests": [
   [
    [
     0
    ],
    0
   ],
   [
    [
     1
    ],
    1
   ],
   [
    [
     10
    ],
    55
   ],
   [
    [
     30
    ],
    832040
   ],
   [
    [
     70
    ],
    190392490709135
   ]
  ]
 },
 {
  "id": "m15",
  "track": "math",
  "topic": "Number theory",
  "level": 3,
  "title": "Trailing zeros",
  "statement": "How many zeros are at the end of 50! (50 × 49 × ... × 2 × 1)?",
  "hints": [
   "Each trailing zero comes from a factor 10 = 2 × 5. There are more 2's than 5's.",
   "Count the factors of 5. Remember that 25 and 50 give two 5's each."
  ],
  "solution": "**Why count 5's?** A zero at the end is a factor 10, and 10 = 2 × 5. Each pair of one 2 and one 5 makes one zero. Even numbers give many 2's, but 5's are rarer. So the number of zeros = the number of 5's.\n\nMultiples of 5 up to 50: 5, 10, 15, ..., 50. That is 50 ÷ 5 = 10 numbers, and each gives one 5.\n\nBut 25 = 5 × 5 and 50 = 2 × 5 × 5 have a second 5. Multiples of 25 up to 50: 50 ÷ 25 = 2 extra.\n\nTotal: 10 + 2 = **12** zeros. **General rule:** ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + ...",
  "answer": 12
 },
 {
  "id": "c15",
  "track": "code",
  "topic": "Searching",
  "level": 3,
  "title": "Binary search",
  "fname": "find_index",
  "statement": "Write `find_index(nums, x)`. `nums` is sorted from small to large. Return the index of `x`, or `-1` if `x` is not in the list. Try to use binary search: look at the middle, then keep only the half that can contain `x`.",
  "starter": "def find_index(nums, x):\n    # write your code here\n    pass\n",
  "hints": [
   "Keep two positions: `lo = 0` and `hi = len(nums) - 1`.",
   "Loop while `lo <= hi`. Let `mid = (lo + hi) // 2`. Compare `nums[mid]` with `x`, then move `lo` or `hi`."
  ],
  "solution": "**Why look at the middle?** The list is sorted. If `nums[mid]` is smaller than x, then everything to the left of mid is smaller too, so x can only be on the right. One comparison throws away half the list.\n\nKeep `lo = 0` and `hi = len(nums) - 1`. While `lo <= hi`: take `mid = (lo + hi) // 2`. If `nums[mid] == x`, return mid. If `nums[mid] < x`, set `lo = mid + 1`, else set `hi = mid - 1`. If the loop ends, return -1.\n\nHalving is fast: 1,000,000 items need only about 20 steps. Most binary search bugs are in `lo <= hi` and `mid + 1` / `mid - 1`, so check them carefully.",
  "solutionCode": "def find_index(nums, x):\n    lo, hi = 0, len(nums) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if nums[mid] == x:\n            return mid\n        if nums[mid] < x:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return -1",
  "tests": [
   [
    [
     [
      1,
      3,
      5,
      7,
      9
     ],
     7
    ],
    3
   ],
   [
    [
     [
      1,
      3,
      5,
      7,
      9
     ],
     4
    ],
    -1
   ],
   [
    [
     [],
     1
    ],
    -1
   ],
   [
    [
     [
      2
     ],
     2
    ],
    0
   ],
   [
    [
     [
      1,
      3,
      5,
      7,
      9
     ],
     1
    ],
    0
   ],
   [
    [
     [
      1,
      3,
      5,
      7,
      9
     ],
     9
    ],
    4
   ]
  ]
 }
];
