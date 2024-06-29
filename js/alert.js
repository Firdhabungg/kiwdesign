        const scriptURL = 'https://script.google.com/macros/s/AKfycbzHSxCngjiiwfzzsOE-C_xC4gFrS0azH2HPN-Q404wi-oL3n7rBKo7g7eYyk0v2SPtlFQ/exec';
        const form = document.forms['kiwdesign-Contact-Form']
        const btnKirim = document.querySelector('.btn-kirim');
        const btnLoading = document.querySelector('.btn-loading');
        const myAlert = document.querySelector('.my-alert');

        form.addEventListener('submit', e => {
            e.preventDefault()
            // Ketika tombol submit diklik
            // Tampilkan tombol loading, hilangkan tombol kirim
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                // Tampilkan tombol kirim, hilangkan tombol loading
                btnLoading.classList.toggle('d-none');
                btnKirim.classList.toggle('d-none');
                // tampilkan alert
                myAlert.classList.toggle('d-none');
                // reset form hilangkan isinya setelah submit & success
                form.reset();
                console.log('Success!', response)
            })
            .catch(error => console.error('Error!', error.message))
        })
        