const a = [1, 1, 1, 1, 1] // 1 2 4 8 16

for (let i = 0; i < 5; i++) {  // i = 4
  for (let j = 0; j < i; j++) { 
    a[i] = a[i] + a[j] 
  }
}

for (let i = 0; i < 5; i++) { 
  console.log(a[i]) 
}