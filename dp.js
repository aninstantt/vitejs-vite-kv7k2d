var numDistinct = function (s, t) {
  // 每一行的第一项都设为1
  let dp = Array.from({ length: s.length + 1 }, () =>
    Array.from({ length: t.length + 1 }, (_, i) => (i === 0 ? 1 : 0))
  )

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      // baag bag
      // bagg bag
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }

  return dp[s.length][t.length]
}
// "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
// "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

var minInstance = function (word1, word2) {
  let dp = Array.from({ length: word1.length + 1 }, () =>
    Array.from({ length: word2.length + 1 }, () => 0)
  )
  let result = 0

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i] == word2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
        if (dp[i][j] > result) result = dp[i][j]
      }
    }
  }
}
