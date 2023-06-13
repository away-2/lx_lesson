// 删除一个字母的回文

const s = 'aba'
const s2 = 'abcda'

// s === [...s].reverse().join('')

// const vaild = (s) => {
//   if (s === [...s].reverse().join('')) {
//     return true
//   } else {
//     // 删除一位后比较
//     let newStr = ''
//     for (let i = 0; i < s.length; i++) {
//       newStr = s.slice(0, i) + s.slice(i + 1)
//       if (newStr === [...newStr].reverse().join('')) {
//         return true
//       }
//     }
//     return false
//   }
// }

// const vaild = (s) => {
//   let left = 0, right = s.length - 1
//   while (left < right) {
//     if (s[left] !== s[right]) {
//       return (isPalindrom(s, left + 1, right) || isPalindrom(s, left, right - 1))
//     }
//     left++
//     right--
//   }
//   return true

//   function isPalindrom(str, L, R) {
//     while(L < R) {
//       if (str[L] !== str[R]) {
//         return false
//       }
//       L++
//       R--
//     }
//     return true
//   }
// }

// const vaild = (s, L = 0, R = s.length - 1, count = 1) => {
//   if (count === 1) {
//     while(L < R) {
//       if (s[L] !== s[R]) {
//         return (vaild(s, L + 1, R, 2) || vaild(s, L, R - 1, 2))
//       }
//       L++
//       R--
//     }
//     return true
//   } else {
//     while (L < R) {
//       if (s[L] !== s[R]) {
//         return false
//       }
//       L++
//       R--
//     }
//     return true
//   }
// }

const vaild = (s) => {
  let flag = false
  for (let [i, j] = [0, s.length - 1]; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      if (flag) {
        return false
      }

      if (s[i] === s[j-1]) {
        j--
        flag = true
      } else if (s[i + 1] === s[j]) {
        i++
        flag = true
      } else {
        return false
      }

    }
  }
  return true
}

console.log(vaild(s2));



// a b c c b d a