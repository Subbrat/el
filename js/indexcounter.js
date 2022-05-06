{
        const countE0 = document.getElementById('XXXX');
        updateVisitCount();

        function updateVisitCount() {
                fetch('https://api.countapi.xyz/update/subbrat/key/?amount=+1')
                        .then(res => res.json())
                        .then(res => {
                                countE0.innerHTML = res.value;
                        })
        }
}

{
        const E1 = document.getElementById('XXXX');
        updateVisitCount();

        function updateVisitCount() {
                fetch('https://api.countapi.xyz/get/subbrat/key')
                        .then(res => res.json())
                        .then(res => {
                                E1.innerHTML = res.value;
                                countE1.innerHTML = res.value;
                        })
        }
}