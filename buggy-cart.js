const cart = [
    // RISKY: price "1500" is a string, not a number. It works here because * turns
    // it into a number ("1500" * 2 = 3000). It would break with +, which joins text:
    // "1500" + 2 gives "15002".
    { name: "Notebook", price: "1500", qty: 2 },
    { name: "Pen", price: 300, qty: 5 },
    { name: "Bag", price: 12000, qty: 1 },
]
function getSubtotal(items) {
    let subtotal = 0
    // BUG 1: the loop used <= so it went one step too far.
// I found it by pausing and seeing i = 3 when items only had 0, 1, 2.
    for (let i = 0; i < items.length; i++) {
        subtotal += items[i].price * items[i].qty
    }
    return subtotal
}
function getDiscount(subtotal) {
    if (subtotal > 20000) return 0.2
    else if (subtotal > 10000) return 0.1
    return 0
}
function getTotal(items) {
    const subtotal = getSubtotal(items)
    const discount = getDiscount(subtotal)
    // BUG 3: discount is a rate (0.1 = 10%), not an amount of money.
// I found it with a breakpoint here and the Scope panel showing discount: 0.1.
    const total = subtotal - subtotal * discount
    return total
}
console.log(getTotal(cart))