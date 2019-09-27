function calc_shortest(str1, str2, str3){
    const l1 = str1.length
    const l2 = str2.length
    const l3 = str3.length

    if (l1 <= l2 && l1 <= l3){
        return str1
    }
    else if (l2 <= l1 && l2 <= l3){
        return str2
    }
    else {
        return str3
    }
}

function find_smallest() {
    const str1 = document.querySelector("#input1").value
    const str2 = document.querySelector("#input2").value
    const str3 = document.querySelector("#input3").value

    const shortest = calc_shortest(str1, str2, str3)

    document.querySelector('#result').innerHTML = shortest
}

document.querySelector('#submit').addEventListener('click', find_smallest)