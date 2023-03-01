function truncate(str, maxlength) {
    if (str.lenght <= maxlength) return str;

    return str.slice(0, maxlength - 1) + '…';
}

console.log(truncate('фбввв', 4));