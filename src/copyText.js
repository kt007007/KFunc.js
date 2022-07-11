const copyText = (text) => {
    let res = false;
    let el = document.createElement('input');

    document.body.appendChild(el);
    el.style.opacity = 0;
    el.type = 'text';
    el.value = text || 'kfunc';
    el.select()

    res = document.execCommand('copy')

    document.body.removeChild(el);

    return res
}

export default copyText