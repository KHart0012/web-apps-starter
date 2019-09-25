function calc() {
    const total = parseFloat(document.querySelector("#total").value)
    const rate = parseFloat(document.querySelector("#rate").value)

    const tip = total * (rate / 100)
    const tax = total * (0.055) // 0.055 = tax rate / 100
    const final_amt = total + tip + tax

    document.querySelector('#tip-amt').innerHTML = `$${tip.toFixed(2)}`
    document.querySelector('#tax-amt').innerHTML = `$${tax.toFixed(2)}`
    document.querySelector('#total-amt').innerHTML = `$${final_amt.toFixed(2)}`
}

document.querySelector('#calculate').addEventListener('click', calc)