// your code, here
//id="click-here" the blue -- Coupon Code -- div displays '50OFF-YOWZA!' instead.

let coupon = '50FF-YOWZA'
let clickHere = document.getElementById('click-here')
clickHere.addEventListener('click', (event) => {
  document.getElementById('coupon-code').innerText = coupon
});