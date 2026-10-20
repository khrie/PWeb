document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        const emailInput = document.getElementById("loginEmail");
        const passwordInput = document.getElementById("loginPassword");
        const rememberCheckbox = document.getElementById("rememberPassword");
        const alertBox = document.getElementById("loginAlert");

        const savedEmail = localStorage.getItem("portalSavedEmail");
        if (savedEmail && emailInput) {
            emailInput.value = savedEmail;
            if (rememberCheckbox) rememberCheckbox.checked = true;
        }

        const toggleBtn = document.getElementById("togglePassword");
        if (toggleBtn && passwordInput) {
            toggleBtn.addEventListener("click", function () {
                const isPassword = passwordInput.type === "password";
                passwordInput.type = isPassword ? "text" : "password";
                this.textContent = isPassword ? "Sembunyikan" : "Tampilkan";
            });
        }

        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let isValid = true;

            const emailVal = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailVal || !emailRegex.test(emailVal)) {
                emailInput.classList.add("is-invalid");
                emailInput.classList.remove("is-valid");
                isValid = false;
            } else {
                emailInput.classList.remove("is-invalid");
                emailInput.classList.add("is-valid");
            }

            const passVal = passwordInput.value;
            if (!passVal || passVal.length < 6) {
                passwordInput.classList.add("is-invalid");
                passwordInput.classList.remove("is-valid");
                isValid = false;
            } else {
                passwordInput.classList.remove("is-invalid");
                passwordInput.classList.add("is-valid");
            }

            if (!isValid) return;

            if (rememberCheckbox && rememberCheckbox.checked) {
                localStorage.setItem("portalSavedEmail", emailVal);
            } else {
                localStorage.removeItem("portalSavedEmail");
            }

            if (alertBox) {
                alertBox.className = "alert alert-success d-block mb-3";
                alertBox.textContent = "Login Berhasil! Mengalihkan ke Halaman Utama...";
            }

            setTimeout(function () {
                window.location.href = "index.html";
            }, 1200);
        });

        const forgotLink = document.getElementById("forgotPasswordLink");
        if (forgotLink) {
            forgotLink.addEventListener("click", function (e) {
                e.preventDefault();
                const resetModalEl = document.getElementById("forgotPasswordModal");
                if (resetModalEl) {
                    const modal = new bootstrap.Modal(resetModalEl);
                    modal.show();
                }
            });
        }

        const forgotForm = document.getElementById("forgotPasswordForm");
        if (forgotForm) {
            forgotForm.addEventListener("submit", function (e) {
                e.preventDefault();
                const resetEmail = document.getElementById("resetEmail");
                if (resetEmail && resetEmail.value.trim()) {
                    const alertEl = document.getElementById("resetAlert");
                    if (alertEl) {
                        alertEl.className = "alert alert-success d-block mt-2";
                        alertEl.textContent = "Tautan pemulihan kata sandi telah dikirim ke email Anda!";
                        setTimeout(function () {
                            const resetModalEl = document.getElementById("forgotPasswordModal");
                            const modal = bootstrap.Modal.getInstance(resetModalEl);
                            if (modal) modal.hide();
                            alertEl.className = "alert alert-success d-none";
                            forgotForm.reset();
                        }, 1800);
                    }
                }
            });
        }
    }

    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        const firstName = document.getElementById("firstName");
        const lastName = document.getElementById("lastName");
        const displayName = document.getElementById("displayName");
        const emailAddress = document.getElementById("emailAddress");
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirmPassword");
        const termsAgree = document.getElementById("termsAgree");
        const regAlert = document.getElementById("registerAlert");

        function checkPasswordMatch() {
            if (!confirmPassword.value) {
                confirmPassword.classList.remove("is-valid", "is-invalid");
                return false;
            }
            if (password.value === confirmPassword.value && password.value.length >= 6) {
                confirmPassword.classList.remove("is-invalid");
                confirmPassword.classList.add("is-valid");
                return true;
            } else {
                confirmPassword.classList.remove("is-valid");
                confirmPassword.classList.add("is-invalid");
                return false;
            }
        }

        if (password && confirmPassword) {
            password.addEventListener("input", function () {
                if (this.value.length >= 6) {
                    this.classList.remove("is-invalid");
                    this.classList.add("is-valid");
                } else {
                    this.classList.remove("is-valid");
                    this.classList.add("is-invalid");
                }
                if (confirmPassword.value) checkPasswordMatch();
            });

            confirmPassword.addEventListener("input", checkPasswordMatch);
        }

        if (firstName && lastName && displayName) {
            function updateDisplayName() {
                if (!displayName.dataset.customized) {
                    displayName.value = (firstName.value.trim() + " " + lastName.value.trim()).trim();
                }
            }
            firstName.addEventListener("input", updateDisplayName);
            lastName.addEventListener("input", updateDisplayName);
            displayName.addEventListener("input", function () {
                this.dataset.customized = "true";
            });
        }

        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let valid = true;

            if (!firstName.value.trim()) {
                firstName.classList.add("is-invalid");
                valid = false;
            } else {
                firstName.classList.remove("is-invalid");
                firstName.classList.add("is-valid");
            }

            if (!lastName.value.trim()) {
                lastName.classList.add("is-invalid");
                valid = false;
            } else {
                lastName.classList.remove("is-invalid");
                lastName.classList.add("is-valid");
            }

            if (!displayName.value.trim()) {
                displayName.classList.add("is-invalid");
                valid = false;
            } else {
                displayName.classList.remove("is-invalid");
                displayName.classList.add("is-valid");
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailAddress.value.trim() || !emailRegex.test(emailAddress.value.trim())) {
                emailAddress.classList.add("is-invalid");
                valid = false;
            } else {
                emailAddress.classList.remove("is-invalid");
                emailAddress.classList.add("is-valid");
            }

            if (!password.value || password.value.length < 6) {
                password.classList.add("is-invalid");
                valid = false;
            } else {
                password.classList.remove("is-invalid");
                password.classList.add("is-valid");
            }

            if (!checkPasswordMatch()) {
                valid = false;
            }

            if (!termsAgree.checked) {
                termsAgree.classList.add("is-invalid");
                valid = false;
            } else {
                termsAgree.classList.remove("is-invalid");
            }

            if (!valid) return;

            if (regAlert) {
                regAlert.className = "alert alert-success d-block mb-3";
                regAlert.textContent = "Pendaftaran Berhasil! Mengalihkan ke Halaman Masuk...";
            }

            setTimeout(function () {
                window.location.href = "login.html";
            }, 1500);
        });

        const termsLink = document.getElementById("termsLink");
        if (termsLink) {
            termsLink.addEventListener("click", function (e) {
                e.preventDefault();
                const termsModalEl = document.getElementById("termsModal");
                if (termsModalEl) {
                    const modal = new bootstrap.Modal(termsModalEl);
                    modal.show();
                }
            });
        }
    }

    const modalContentData = {
        kurikulum: {
            title: "Kurikulum & Silabus Program Studi",
            body: `
                <p class="text-secondary small mb-3">Daftar mata kuliah kompetensi inti semester ganjil tahun akademik 2026/2027:</p>
                <div class="table-responsive">
                    <table class="table table-bordered table-striped table-hover align-middle small">
                        <thead class="table-primary">
                            <tr>
                                <th>Kode</th>
                                <th>Mata Kuliah</th>
                                <th>SKS</th>
                                <th>Semester</th>
                                <th>Kategori</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>IF2101</strong></td>
                                <td>Pemrograman Web</td>
                                <td>3</td>
                                <td>Semester 3</td>
                                <td><span class="badge bg-success">Wajib</span></td>
                            </tr>
                            <tr>
                                <td><strong>IF2102</strong></td>
                                <td>Basis Data Lanjut</td>
                                <td>3</td>
                                <td>Semester 3</td>
                                <td><span class="badge bg-success">Wajib</span></td>
                            </tr>
                            <tr>
                                <td><strong>IF2103</strong></td>
                                <td>Struktur Data &amp; Algoritma</td>
                                <td>4</td>
                                <td>Semester 3</td>
                                <td><span class="badge bg-success">Wajib</span></td>
                            </tr>
                            <tr>
                                <td><strong>IF2104</strong></td>
                                <td>Rekayasa Perangkat Lunak</td>
                                <td>3</td>
                                <td>Semester 3</td>
                                <td><span class="badge bg-success">Wajib</span></td>
                            </tr>
                            <tr>
                                <td><strong>IF2105</strong></td>
                                <td>Jaringan Komputer</td>
                                <td>3</td>
                                <td>Semester 3</td>
                                <td><span class="badge bg-primary">Pilihan</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        jadwal: {
            title: "Jadwal Perkuliahan & Praktikum Laboratorium",
            body: `
                <p class="text-secondary small mb-3">Jadwal tatap muka dan sesi praktikum laboratorium komputer:</p>
                <div class="table-responsive">
                    <table class="table table-bordered table-hover align-middle small">
                        <thead class="table-primary">
                            <tr>
                                <th>Hari</th>
                                <th>Waktu</th>
                                <th>Mata Kuliah</th>
                                <th>Ruangan</th>
                                <th>Dosen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="badge bg-dark">Senin</span></td>
                                <td>08:00 - 10:30</td>
                                <td>Pemrograman Web</td>
                                <td>Lab Komputasi 2</td>
                                <td>Dr. Eng. Nuris Akbar, M.T.</td>
                            </tr>
                            <tr>
                                <td><span class="badge bg-dark">Selasa</span></td>
                                <td>10:45 - 13:15</td>
                                <td>Basis Data Lanjut</td>
                                <td>Ruang Kuliah B.301</td>
                                <td>Siti Nurhaliza, M.Cs.</td>
                            </tr>
                            <tr>
                                <td><span class="badge bg-dark">Rabu</span></td>
                                <td>08:00 - 11:30</td>
                                <td>Struktur Data &amp; Algoritma</td>
                                <td>Lab Pemrograman 1</td>
                                <td>M. Reza Pratama, M.Kom.</td>
                            </tr>
                            <tr>
                                <td><span class="badge bg-dark">Kamis</span></td>
                                <td>13:30 - 16:00</td>
                                <td>Rekayasa Perangkat Lunak</td>
                                <td>Ruang Kuliah C.204</td>
                                <td>Achmad Fauzi, M.T.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        layanan: {
            title: "Layanan Kemahasiswaan & Akademik",
            body: `
                <p class="text-secondary small mb-3">Pusat bantuan administrasi dan layanan terpadu mahasiswa:</p>
                <div class="list-group">
                    <div class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        <div>
                            <h6 class="mb-1 text-primary">Kartu Rencana Studi (KRS Online)</h6>
                            <p class="mb-0 text-muted small">Pengisian dan persetujuan mata kuliah oleh dosen pembimbing akademik.</p>
                        </div>
                        <span class="badge bg-success rounded-pill">Aktif</span>
                    </div>
                    <div class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        <div>
                            <h6 class="mb-1 text-primary">Surat Keterangan Aktif Kuliah</h6>
                            <p class="mb-0 text-muted small">Permohonan surat resmi untuk keperluan beasiswa, magang, dan instansi.</p>
                        </div>
                        <span class="badge bg-primary rounded-pill">Online</span>
                    </div>
                    <div class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        <div>
                            <h6 class="mb-1 text-primary">Pendaftaran Beasiswa Prestasi &amp; KIP-K</h6>
                            <p class="mb-0 text-muted small">Bantuan biaya pendidikan semester ganjil dan genap.</p>
                        </div>
                        <span class="badge bg-warning text-dark rounded-pill">Buka</span>
                    </div>
                    <div class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        <div>
                            <h6 class="mb-1 text-primary">Konsultasi Dosen Pembimbing Akademik (DPA)</h6>
                            <p class="mb-0 text-muted small">Layanan bimbingan studi, evaluasi IPK, dan konsultasi karir.</p>
                        </div>
                        <span class="badge bg-info text-dark rounded-pill">Tersedia</span>
                    </div>
                </div>
            `
        },
        elearning: {
            title: "Sistem Pembelajaran Daring (E-Learning)",
            body: `
                <p class="text-secondary small mb-3">Fitur unggulan platform pembelajaran digital terpadu:</p>
                <div class="row g-3">
                    <div class="col-sm-6">
                        <div class="p-3 border rounded bg-light h-100">
                            <h6 class="text-primary fw-bold">Modul &amp; Repositori Kuliah</h6>
                            <p class="small text-muted mb-0">Akses slide presentasi, e-book, source code praktikum, dan materi video rekaman dosen.</p>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="p-3 border rounded bg-light h-100">
                            <h6 class="text-primary fw-bold">Pengumpulan Tugas Otomatis</h6>
                            <p class="small text-muted mb-0">Upload tugas tepat waktu dengan sistem timestamp digital dan pengecekan plagiarism terpadu.</p>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="p-3 border rounded bg-light h-100">
                            <h6 class="text-primary fw-bold">Forum Diskusi Interaktif</h6>
                            <p class="small text-muted mb-0">Tanya jawab langsung dengan dosen dan asisten praktikum per topik perkuliahan.</p>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="p-3 border rounded bg-light h-100">
                            <h6 class="text-primary fw-bold">Kuis &amp; Ujian Online</h6>
                            <p class="small text-muted mb-0">Evaluasi pemahaman materi dengan sistem penilaian instan dan aman.</p>
                        </div>
                    </div>
                </div>
            `
        }
    };

    const infoModalEl = document.getElementById("infoModal");
    if (infoModalEl) {
        const modalTitle = document.getElementById("infoModalTitle");
        const modalBody = document.getElementById("infoModalBody");
        const infoModal = new bootstrap.Modal(infoModalEl);

        document.querySelectorAll("[data-info-key]").forEach(function (btn) {
            btn.addEventListener("click", function (e) {
                e.preventDefault();
                const key = this.dataset.infoKey;
                if (modalContentData[key]) {
                    modalTitle.textContent = modalContentData[key].title;
                    modalBody.innerHTML = modalContentData[key].body;
                    infoModal.show();
                }
            });
        });
    }
});

