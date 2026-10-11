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
  "solution": "The multiples of 3 up to 100 are 3×1 to 3×33 (3×34 = 102 is too big). So the answer is ⌊100/3⌋ = 33.",
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
  "solution": "Return `a + b`. A function gives its result with `return`. `print` only shows text on the screen.",
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
  "solution": "Pair the numbers: 1+100, 2+99, ... Each pair is 101, and there are 50 pairs. So the sum is 5050. In general 1+...+n = n(n+1)/2.",
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
  "solution": "`n % 2` is 0 for even numbers. The comparison `n % 2 == 0` is already `True` or `False`, so you can return it directly.",
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
  "solution": "1 = 1², 1+3 = 2², 1+3+5 = 3². There are 50 odd numbers from 1 to 99, so the sum is 50² = 2500. Trying small cases to find a pattern is a key contest skill.",
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
  "solution": "Start with `best = nums[0]`. Look at each number. If it is bigger, keep it. This pattern (keep the best so far) is very common.",
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
  "solution": "10 × 9 = 90 counts each handshake twice (once for each person). So the answer is 90 / 2 = 45. This is C(10, 2).",
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
  "solution": "Make a counter. For each character, convert it to lowercase and test if it is in `'aeiou'`. Add 1 when it is.",
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
  "solution": "From one corner you can cut a hexagon into 4 triangles. 4 × 180° = 720°. In general the sum is (n − 2) × 180°.",
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
  "solution": "`s[::-1]` returns the string backwards. A loop that adds each character to the front of a new string also works.",
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
  "solution": "Common prime factors: 2¹, 3¹, 7¹. So gcd = 2 × 3 × 7 = 42. Check: 84 = 2 × 42 and 126 = 3 × 42.",
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
  "solution": "The order of the tests is important. Test 15 first, then 3, then 5. If you test 3 first, 15 returns 'Fizz' by mistake.",
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
  "solution": "With 2 socks you can have one of each colour. The 3rd sock must match one of them. So 3. This is the pigeonhole principle: 3 socks into 2 colours means one colour gets 2.",
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
  "solution": "Take the last digit with `n % 10`, add it, then remove it with `n // 10`. Stop when `n` is 0. This digit loop is used in many contest problems.",
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
  "solution": "The last digits cycle 7, 9, 3, 1 with length 4. 100 is divisible by 4, so 7¹⁰⁰ ends like 7⁴, which ends in 1.",
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
  "solution": "Clean the string: `t = s.lower().replace(' ', '')`. Then return `t == t[::-1]`.",
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
  "solution": "72 = 2³ × 3². A divisor picks a in {0,1,2,3} (4 choices) and b in {0,1,2} (3 choices). So 4 × 3 = 12 divisors. Rule: add 1 to each exponent and multiply.",
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
  "solution": "Euclid's algorithm: while `b` is not 0, set `a, b = b, a % b`. It is very fast, even for huge numbers. You will use it often.",
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
  "solution": "5! = 120 counts each word several times. Divide by 2! for the two L's and by 2! for the two E's: 120 / (2 × 2) = 30.",
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
  "solution": "Test each number from 2 to n. To test k, try divisors d = 2, 3, ... while d*d <= k. If none divides k, k is prime. (Later you will learn the Sieve of Eratosthenes, which is faster.)",
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
  "solution": "1×1: 16, 2×2: 9, 3×3: 4, 4×4: 1. Total 16 + 9 + 4 + 1 = 30. Count by cases, then add.",
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
  "solution": "Keep `total = 0`. For each number, add it to `total` and append `total` to the result. Prefix sums let you get the sum of any range quickly, so they are a key contest tool.",
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
  "solution": "Each path is an order of 3 R's and 3 U's. Choose the 3 positions of R from 6: C(6, 3) = 20.",
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
  "solution": "Remove duplicates with `set`, then sort. If fewer than 2 values remain, return `None`. Otherwise return the second from the end.",
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
  "solution": "2³ = 8 ≡ 1 (mod 7). So 2⁹ = (2³)³ ≡ 1, and 2¹⁰ ≡ 2. Check: 1024 = 7 × 146 + 2. Look for a power that gives remainder 1.",
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
  "solution": "With a set: for each x, if `target - x` was seen before, return True. Then add x to the set. This checks each number once, so it is fast. It is a classic interview and contest idea.",
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
  "solution": "Each remainder is one less than the divisor. So n + 1 is divisible by 3, 4 and 5, which means by 60. The smallest is n + 1 = 60, so n = 59. Change the question to an easier one.",
  "answer": 59
 },
 {
  "id": "c14",
  "track": "code",
  "topic": "Recursion",
  "level": 3,
  "title": "Fibonacci",
  "fname": "fib",
  "statement": "Write `fib(n)`. The Fibonacci numbers are 0, 1, 1, 2, 3, 5, 8, ... Each number is the sum of the two before it. `fib(0)` is 0 and `fib(1)` is 1. The tests use `n` up to 80, so the code must be fast.",
  "starter": "def fib(n):\n    # write your code here\n    pass\n",
  "hints": [
   "A simple recursive function is too slow for n = 80. Why? It calculates the same values many times.",
   "Use a loop. Keep only the last two numbers: `a, b = b, a + b`."
  ],
  "solution": "Start with `a, b = 0, 1`. Repeat n times: `a, b = b, a + b`. Then `a` is fib(n). This is the first idea of dynamic programming: save results so you do not calculate them again.",
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
     80
    ],
    23416728348467685
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
  "solution": "Multiples of 5 up to 50: 10 numbers. Multiples of 25: 2 more (25 and 50 have a second 5). Total 10 + 2 = 12 zeros.",
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
  "solution": "Each step removes half of the list. So 1,000,000 items need only about 20 steps. Be careful with `lo <= hi` and with `mid + 1` / `mid - 1`. Most binary search bugs are there.",
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
