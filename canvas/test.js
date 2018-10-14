
let o = 1

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

for (let i = 0; i <arr.length; i++) {
  console.log('index i=' + i + ',arr[i]=' + arr[i])
  if(i===9 || i===11 || i=== 12) {
    arr.splice(i, 1)
    i--
  }
}