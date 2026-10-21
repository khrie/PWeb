document.addEventListener("DOMContentLoaded", function () {

    const mhsForm = document.getElementById("mhsForm");
    const mhsTableBody = document.getElementById("mhsTableBody");

    if (mhsForm && mhsTableBody) {
        mhsForm.addEventListener("submit", function (e) {
            e.preventDefault(); 

            const nim = document.getElementById("nim").value.trim();
            const nama = document.getElementById("nama").value.trim();
            const jurusan = document.getElementById("jurusan").value;

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${nim}</td>
                <td>${nama}</td>
                <td>${jurusan}</td>
                <td><button type="button" class="btn btn-danger btn-delete">Hapus</button></td>
            `;

            tr.querySelector(".btn-delete").addEventListener("click", function () {
                tr.remove();
            });

            mhsTableBody.appendChild(tr);

            mhsForm.reset();
        });
    }

    document.querySelectorAll(".btn-delete").forEach(function (btn) {
        btn.addEventListener("click", function () {
            this.closest("tr").remove();
        });
    });

    const searchInput = document.getElementById("searchInput");
    if (searchInput && mhsTableBody) {
        searchInput.addEventListener("input", function () {
            const keyword = this.value.toLowerCase();
            const rows = mhsTableBody.getElementsByTagName("tr");

            for (let row of rows) {
                const rowText = row.textContent.toLowerCase();
                row.style.display = rowText.includes(keyword) ? "" : "none";
            }
        });
    }

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            if (password.length < 6) {
                alert("Password minimal harus 6 karakter!");
                return;
            }

            alert("Login Berhasil! Selamat datang.");
            window.location.href = "index.html";
        });
    }

    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const pass = document.getElementById("regPassword").value;
            const confirmPass = document.getElementById("regConfirmPassword").value;

            if (pass !== confirmPass) {
                alert("Password dan Konfirmasi Password tidak cocok!");
                return;
            }

            alert("Pendaftaran berhasil! Silakan login.");
            window.location.href = "login.html";
        });
    }

});
