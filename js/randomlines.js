{
    const dc1 = [
        "",
        "",

    ];
    ! function Newline() {
        const randomLine = Math.floor(Math.random() * dc1.length);
        document.getElementById('line').innerHTML = dc1[randomLine];
    }();
}