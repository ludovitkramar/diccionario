function gen_span_with_i(string, keyword, markdown) {
    const span = document.createElement('span')
    keyword = keyword.toLowerCase()
    const k_length = keyword.length
    if (markdown) {
        var arr = string.split('*')
        arr.forEach((ele, i) => {
            if (i % 2 !== 0) {
                const it = document.createElement('i')
                it.innerText = ele
                span.appendChild(it)
            } else {
                const txt = document.createTextNode(ele)
                span.appendChild(txt)
            }
        })
    } else {
        const first_char = keyword[0].toLowerCase()
        keyword = keyword.toLowerCase()
        var last_block_end = 0
        for (let i = 0; i < string.length; i++) {
            const curr_char = string[i].toLowerCase()
            if (curr_char === first_char //if found keyword
                && !isLetter(string[i + k_length]) //next letter to the match is not part of the alphabet
                && string.slice(i, i + k_length).toLowerCase() === keyword
            ) {
                const txt = document.createTextNode(string.slice(last_block_end, i))
                span.appendChild(txt)
                const dfn = document.createElement('dfn')
                dfn.innerText = string.slice(i, i + k_length + 1)
                span.appendChild(dfn)
                i += k_length - 1
                last_block_end = i + k_length - 1
            }
        }
        const txt = document.createTextNode(string.slice(last_block_end, string.length))
        span.appendChild(txt)
    }
    return span
}

function isLetter(str) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const letters = ['ñ', 'á', 'é', 'í', 'ó', 'ú', 'ü']
    const arr = letters.concat(alphabet)
    if (typeof str !== 'string') return false
    return str.length === 1 && arr.includes(str.toLowerCase());
}

function genInfoBox(txt) {
    var infobox = document.createElement('div')
    infobox.id = 'info_box'
    var message = document.createElement('span')
    message.innerText = txt
    infobox.appendChild(message)
    return infobox
}