        const scriptURL = 'https://script.google.com/macros/s/AKfycbw0zKP8JxWB7PPYS2VM0OGKhCh2NKQwd18vE910hLxC6Ehfykwu4e8g2ai91EaNi2I/exec'
        const form = document.forms['bung-contact-form']
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
                // reset form
                form.reset();
                console.log('Success!', response)
            })
            .catch(error => console.error('Error!', error.message))
        })