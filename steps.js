// Given a stair with N steps, you can go by 1 or 2 steps at a time. How many different ways are there to climb the stairs?

// Recursive approach
function waysRecursive(n) {
  if (n < 2) return 1 // We do this because our base cases are that a 0 step stair or a 1 step stair have only 1 way of being climbed.
  
  return waysRecursive(n - 1) + (n - 2)
}

// Dynamic approach
function waysDynamic(n) {
  const ways = [1, 1] // This is our base cases array
  
  for (let i = 2; i < n + 1; i++) {
    ways.push(ways[0] + ways[1])
    ways.shift() // Since we only need the previous element to sum the next one we can eliminate this one.
  }
  
  return ways
}


// If X is a set with all the possible steps you can take to climb the stairs, so that X = [1, 2] in the previous problem,
// How many different ways are there to climb the stairs for a given N and X?

// Recursive approach
function waysRecursive(n, x) {
  if (n < 2) return 1 // Base cases do not change.
  
  x.sort((a, b) => a - b)
  
  let out = 0
  
  for (let i of x) {
    if (n - i >= 0) out += waysRecursive(n - i)
    else break // With this we avoid unnecesary iterations
  }
  
  return out
}

// Dynamic approach
function waysDynamic(n, x) {
  const ways = [1, 1] // This is our base cases array
  x.sort((a, b) => a - b)
  
  for (let i = 2; i < n + 1; i++) {
    ways[i] = 0
    
    for (let j of x) {
      if (i - j >= 0) ways[i] += ways[i - j]
      else break // With this we avoid unnecesary iterations
    }
  }
  
  return ways[n]
}
