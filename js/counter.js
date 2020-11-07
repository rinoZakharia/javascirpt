let a = 0;
naik.onclick = () => {
    document.querySelector("h1").innerHTML = a++;
}

turun.onclick = () => {
    if (a > 0) {
        document.querySelector("h1").innerHTML = a--;
    }
}