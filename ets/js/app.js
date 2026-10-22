document.addEventListener("DOMContentLoaded", function () {

    const defaultMembers = [
        {
            nim: "5025251066",
            nama: "Nabil Khairie",
            jenis: "Mahasiswa",
            prodi: "Teknik Informatika",
            alamat: "Jl. Teknik Komputer No. 10, Surabaya",
            telepon: "081234567890",
            email: "nabil@perpustakaan.ac.id"
        },
        {
            nim: "1985031201",
            nama: "Dr. Ahmad Rasyid",
            jenis: "Dosen",
            prodi: "Sistem Informasi",
            alamat: "Komp. Dosen Sukolilo, Surabaya",
            telepon: "081398765432",
            email: "rasyid@perpustakaan.ac.id"
        },
        {
            nim: "1992041502",
            nama: "Siti Rahmawati",
            jenis: "Tenaga Kependidikan",
            prodi: "Perpustakaan Pusat",
            alamat: "Jl. Manyar Rejo No. 5, Surabaya",
            telepon: "085678901234",
            email: "siti.rahma@perpustakaan.ac.id"
        }
    ];

    function getMembers() {
        const data = localStorage.getItem("library_members");
        if (!data) {
            localStorage.setItem("library_members", JSON.stringify(defaultMembers));
            return defaultMembers;
        }
        try {
            return JSON.parse(data);
        } catch (e) {
            return defaultMembers;
        }
    }

    function saveMembers(members) {
        localStorage.setItem("library_members", JSON.stringify(members));
    }

    const mhsTableBody = document.getElementById("mhsTableBody");
    const searchInput = document.getElementById("searchInput");
    const editCard = document.getElementById("editCard");
    const editForm = document.getElementById("editForm");
    const editIndexInput = document.getElementById("editIndex");
    const btnCancelEdit = document.getElementById("btnCancelEdit");

    if (mhsTableBody) {
        function renderTable(keyword) {
            const members = getMembers();
            const filter = (keyword || "").toLowerCase().trim();
            mhsTableBody.innerHTML = "";

            const filtered = members.filter(function (m) {
                if (!filter) return true;
                return m.nama.toLowerCase().includes(filter) || m.nim.toLowerCase().includes(filter);
            });

            if (filtered.length === 0) {
                mhsTableBody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #888; padding: 14px;">Data anggota tidak ditemukan.</td></tr>';
                return;
            }

            filtered.forEach(function (m) {
                const realIndex = members.findIndex(function (item) {
                    return item.nim === m.nim;
                });

                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${m.nim}</td>
                    <td>${m.nama}</td>
                    <td>${m.jenis || "Mahasiswa"}</td>
                    <td>${m.prodi}</td>
                    <td>${m.alamat || "-"}</td>
                    <td>
                        <button type="button" class="btn btn-warning btn-sm btn-edit">Edit</button>
                        <button type="button" class="btn btn-danger btn-sm btn-delete">Hapus</button>
                    </td>
                `;

                tr.querySelector(".btn-edit").addEventListener("click", function () {
                    if (editCard && editForm) {
                        editCard.style.display = "block";
                        document.getElementById("editNim").value = m.nim;
                        document.getElementById("editNama").value = m.nama;
                        document.getElementById("editJenis").value = m.jenis || "Mahasiswa";
                        document.getElementById("editProdi").value = m.prodi;
                        document.getElementById("editAlamat").value = m.alamat || "";
                        document.getElementById("editTelepon").value = m.telepon || "";
                        document.getElementById("editEmail").value = m.email || "";

                        if (editIndexInput) editIndexInput.value = realIndex;
                        editCard.scrollIntoView({ behavior: "smooth" });
                    }
                });

                tr.querySelector(".btn-delete").addEventListener("click", function () {
                    if (confirm("Apakah Anda yakin ingin menghapus data anggota " + m.nama + " (NIM/NIP: " + m.nim + ")?")) {
                        members.splice(realIndex, 1);
                        saveMembers(members);
                        renderTable(searchInput ? searchInput.value : "");
                    }
                });

                mhsTableBody.appendChild(tr);
            });
        }

        renderTable();

        if (searchInput) {
            searchInput.addEventListener("input", function () {
                renderTable(this.value);
            });
        }

        if (btnCancelEdit && editCard) {
            btnCancelEdit.addEventListener("click", function () {
                editForm.reset();
                editCard.style.display = "none";
            });
        }

        if (editForm) {
            editForm.addEventListener("submit", function (e) {
                e.preventDefault();

                const editIndex = editIndexInput ? parseInt(editIndexInput.value, 10) : -1;
                if (editIndex < 0) return;

                const nim = document.getElementById("editNim").value.trim();
                const nama = document.getElementById("editNama").value.trim();
                const jenis = document.getElementById("editJenis").value;
                const prodi = document.getElementById("editProdi").value.trim();
                const alamat = document.getElementById("editAlamat").value.trim();
                const telepon = document.getElementById("editTelepon").value.trim();
                const email = document.getElementById("editEmail").value.trim();

                const members = getMembers();

                const isNimTaken = members.some(function (m, idx) {
                    if (idx === editIndex) return false;
                    return m.nim.toLowerCase() === nim.toLowerCase();
                });

                if (isNimTaken) {
                    alert("Nomor Induk (NIM/NIP) " + nim + " sudah terdaftar pada anggota lain!");
                    return;
                }

                members[editIndex] = {
                    nim: nim,
                    nama: nama,
                    jenis: jenis,
                    prodi: prodi,
                    alamat: alamat,
                    telepon: telepon,
                    email: email
                };

                saveMembers(members);
                alert("Data anggota berhasil diperbarui!");

                editForm.reset();
                editCard.style.display = "none";
                renderTable(searchInput ? searchInput.value : "");
            });
        }
    }

    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const nama = document.getElementById("regNama").value.trim();
            const nim = document.getElementById("regNimNip").value.trim();
            const jenis = document.getElementById("regJenis").value;
            const prodi = document.getElementById("regProdi").value.trim();
            const alamat = document.getElementById("regAlamat") ? document.getElementById("regAlamat").value.trim() : "-";
            const telepon = document.getElementById("regNomor") ? document.getElementById("regNomor").value.trim() : "-";
            const email = document.getElementById("regEmail").value.trim();
            const pass = document.getElementById("regPassword").value;
            const confirmPass = document.getElementById("regConfirmPassword").value;

            if (pass.length < 6) {
                alert("Kata sandi minimal harus 6 karakter!");
                return;
            }

            if (pass !== confirmPass) {
                alert("Kata sandi dan Konfirmasi kata sandi tidak cocok!");
                return;
            }

            const members = getMembers();

            const isNimTaken = members.some(function (m) {
                return m.nim.toLowerCase() === nim.toLowerCase();
            });

            if (isNimTaken) {
                alert("Nomor Induk (NIM/NIP) " + nim + " sudah terdaftar!");
                return;
            }

            members.push({
                nim: nim,
                nama: nama,
                jenis: jenis,
                prodi: prodi,
                alamat: alamat,
                telepon: telepon,
                email: email
            });
            saveMembers(members);

            alert("Pendaftaran anggota berhasil! Mengalihkan ke halaman daftar anggota...");
            window.location.href = "anggota.html";
        });
    }

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("loginEmail").value.trim();
            const password = document.getElementById("loginPassword").value;

            if (password.length < 6) {
                alert("Kata sandi minimal harus 6 karakter!");
                return;
            }

            alert("Login berhasil! Selamat datang, " + email);
            window.location.href = "anggota.html";
        });
    }

});
