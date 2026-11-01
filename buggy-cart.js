const cart = [
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
    if (subtotal > 10000) return 0.1
    else if (subtotal > 20000) return 0.2
    return 0
}
function getTotal(items) {
    const subtotal = getSubtotal(items)
    const discount = getDiscount(subtotal)
    const total = subtotal - discount
    return total
}
console.log(getTotal(cart))