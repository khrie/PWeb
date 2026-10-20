const studentsDatabase = [
    { name: "Andi Pratama", nim: "231001", major: "Informatika" },
    { name: "Amanda Zahra", nim: "231007", major: "Sistem Informasi" },
    { name: "Annisa Rahma", nim: "231012", major: "Informatika" },
    { name: "Budi Santoso", nim: "231003", major: "Teknik Komputer" },
    { name: "Bagas Kurniawan", nim: "231015", major: "Sistem Informasi" },
    { name: "Cindy Claudia", nim: "231020", major: "Informatika" },
    { name: "Doni Firmansyah", nim: "231025", major: "Teknik Komputer" },
    { name: "Fajar Nugroho", nim: "231031", major: "Informatika" },
    { name: "Muhammad Rizky", nim: "231005", major: "Informatika" },
    { name: "Muhammad Fadhil", nim: "231038", major: "Sistem Informasi" },
    { name: "Nina Marlina", nim: "231004", major: "Manajemen" },
    { name: "Nuris Akbar", nim: "231042", major: "Informatika" },
    { name: "Putri Lestari", nim: "231048", major: "Informatika" },
    { name: "Rian Hidayat", nim: "231053", major: "Sistem Informasi" },
    { name: "Siti Aisyah", nim: "231002", major: "Sistem Informasi" },
    { name: "Zahra Nurhaliza", nim: "231060", major: "Informatika" }
];

const postalDatabase = [
    { province: "Jawa Timur", city: "Surabaya", subdistrict: "Sukolilo", urban: "Keputih", postalCode: "60111" },
    { province: "Jawa Timur", city: "Surabaya", subdistrict: "Sukolilo", urban: "Gebang Putih", postalCode: "60117" },
    { province: "Jawa Timur", city: "Surabaya", subdistrict: "Sukolilo", urban: "Klampis Ngasem", postalCode: "60116" },
    { province: "Jawa Timur", city: "Surabaya", subdistrict: "Gubeng", urban: "Airlangga", postalCode: "60286" },
    { province: "Jawa Timur", city: "Surabaya", subdistrict: "Gubeng", urban: "Gubeng", postalCode: "60281" },
    { province: "Jawa Timur", city: "Surabaya", subdistrict: "Rungkut", urban: "Medokan Ayu", postalCode: "60295" },
    { province: "Jawa Timur", city: "Surabaya", subdistrict: "Wonokromo", urban: "Darmo", postalCode: "60241" },
    { province: "Jawa Timur", city: "Sidoarjo", subdistrict: "Sidoarjo", urban: "Sidokumpul", postalCode: "61212" },
    { province: "Jawa Timur", city: "Sidoarjo", subdistrict: "Waru", urban: "Bungurasih", postalCode: "61256" },
    { province: "Jawa Timur", city: "Malang", subdistrict: "Lowokwaru", urban: "Dinoyo", postalCode: "65144" },
    { province: "Jawa Timur", city: "Malang", subdistrict: "Klojen", urban: "Kauman", postalCode: "65119" },
    { province: "DKI Jakarta", city: "Jakarta Pusat", subdistrict: "Gambir", urban: "Gambir", postalCode: "10110" },
    { province: "DKI Jakarta", city: "Jakarta Pusat", subdistrict: "Tanah Abang", urban: "Kebon Kacang", postalCode: "10240" },
    { province: "DKI Jakarta", city: "Jakarta Pusat", subdistrict: "Menteng", urban: "Gondangdia", postalCode: "10350" },
    { province: "DKI Jakarta", city: "Jakarta Selatan", subdistrict: "Kebayoran Baru", urban: "Senayan", postalCode: "12190" },
    { province: "DKI Jakarta", city: "Jakarta Selatan", subdistrict: "Tebet", urban: "Tebet Barat", postalCode: "12810" },
    { province: "DKI Jakarta", city: "Jakarta Barat", subdistrict: "Grogol Petamburan", urban: "Tanjung Duren", postalCode: "11470" },
    { province: "Kalimantan Selatan", city: "Banjarmasin", subdistrict: "Banjarmasin Selatan", urban: "Kelayan Barat", postalCode: "70241" },
    { province: "Kalimantan Selatan", city: "Banjarmasin", subdistrict: "Banjarmasin Utara", urban: "Sungai Miai", postalCode: "70123" },
    { province: "Kalimantan Selatan", city: "Banjarmasin", subdistrict: "Banjarmasin Tengah", urban: "Kertak Baru Ilir", postalCode: "70111" },
    { province: "Kalimantan Selatan", city: "Banjarbaru", subdistrict: "Banjarbaru Selatan", urban: "Loktabat Selatan", postalCode: "70712" },
    { province: "Kalimantan Selatan", city: "Banjarbaru", subdistrict: "Banjarbaru Utara", urban: "Loktabat Utara", postalCode: "70714" },
    { province: "Kalimantan Selatan", city: "Banjar", subdistrict: "Martapura", urban: "Sekumpul", postalCode: "70614" },
    { province: "Jawa Barat", city: "Bandung", subdistrict: "Coblong", urban: "Dago", postalCode: "40135" },
    { province: "Jawa Barat", city: "Bandung", subdistrict: "Sumur Bandung", urban: "Braga", postalCode: "40111" },
    { province: "Jawa Barat", city: "Bogor", subdistrict: "Bogor Tengah", urban: "Paledang", postalCode: "16122" },
    { province: "Jawa Tengah", city: "Semarang", subdistrict: "Semarang Tengah", urban: "Pandansari", postalCode: "50139" },
    { province: "Jawa Tengah", city: "Surakarta", subdistrict: "Banjarsari", urban: "Manahan", postalCode: "57139" },
    { province: "DI Yogyakarta", city: "Yogyakarta", subdistrict: "Danurejan", urban: "Suryatmajan", postalCode: "55213" },
    { province: "DI Yogyakarta", city: "Yogyakarta", subdistrict: "Gondomanan", urban: "Prawirodirjan", postalCode: "55121" },
    { province: "Bali", city: "Denpasar", subdistrict: "Denpasar Selatan", urban: "Sanur", postalCode: "80227" }
];

const productBrands = {
    "Desktop": [
        "Apple (Mac Studio / Mac Mini)",
        "ASUS ROG Desktop",
        "Dell Alienware",
        "Lenovo Legion Tower",
        "HP Omen",
        "MSI Infinite"
    ],
    "Laptop": [
        "Apple MacBook Pro",
        "ASUS ZenBook / ROG Strix",
        "Lenovo ThinkPad",
        "Dell XPS",
        "HP Pavilion",
        "Acer Swift"
    ],
    "Smartphone": [
        "Apple iPhone 15 / 16",
        "Samsung Galaxy S24",
        "Xiaomi 14 Pro",
        "Google Pixel 8",
        "Oppo Find X7",
        "Vivo X100"
    ]
};

function showCustomAlert(message) {
    const overlay = document.getElementById("alertModal");
    const msgEl = document.getElementById("alertMessage");
    msgEl.textContent = message;
    overlay.classList.add("show");
}

function closeCustomAlert() {
    const overlay = document.getElementById("alertModal");
    overlay.classList.remove("show");
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("alertOkBtn").addEventListener("click", closeCustomAlert);

    const tabButtons = document.querySelectorAll(".tab-btn");
    const sections = document.querySelectorAll(".registration-section");

    function switchTab(targetId) {
        tabButtons.forEach(btn => {
            btn.classList.toggle("active", btn.dataset.target === targetId);
        });

        sections.forEach(sec => {
            sec.classList.toggle("active", sec.id === targetId);
        });
    }

    tabButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            switchTab(this.dataset.target);
        });
    });

    const inputNama = document.getElementById("reg_nama");
    const inputNim = document.getElementById("reg_nim");
    const inputMatkul = document.getElementById("reg_matkul");
    const inputDosen = document.getElementById("reg_dosen");
    const autocompleteList = document.getElementById("reg_autocomplete");
    const formAkademik = document.getElementById("formAkademik");

    const tableBody = document.getElementById("tableBodyRegistrasi");
    const emptyRow = document.getElementById("emptyRowRegistrasi");

    let registeredList = [];

    function renderTable() {
        const existingRows = tableBody.querySelectorAll("tr:not(#emptyRowRegistrasi)");
        existingRows.forEach(tr => tr.remove());

        if (registeredList.length === 0) {
            emptyRow.style.display = "table-row";
            return;
        }
        emptyRow.style.display = "none";

        registeredList.forEach((item, index) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td><strong>${item.nim}</strong></td>
                <td>${item.nama}</td>
                <td>${item.matkul}</td>
                <td>${item.dosen}</td>
                <td style="text-align: center;">
                    <button type="button" class="btn btn-danger btn-sm">Hapus</button>
                </td>
            `;

            tr.querySelector("button").addEventListener("click", function () {
                const idx = registeredList.indexOf(item);
                if (idx !== -1) {
                    registeredList.splice(idx, 1);
                    renderTable();
                }
            });
            tableBody.appendChild(tr);
        });
    }

    renderTable();

    inputNama.addEventListener("input", function () {
        const query = this.value.trim().toLowerCase();
        autocompleteList.innerHTML = "";

        if (query.length === 0) {
            autocompleteList.classList.remove("show");
            return;
        }

        const matches = studentsDatabase.filter(student =>
            student.name.toLowerCase().includes(query) ||
            student.nim.includes(query)
        );

        if (matches.length === 0) {
            autocompleteList.classList.remove("show");
            return;
        }

        matches.forEach(item => {
            const div = document.createElement("div");
            div.className = "autocomplete-item";
            div.innerHTML = `<span><strong>${item.name}</strong></span><span class="autocomplete-meta">${item.nim} &bull; ${item.major}</span>`;
            div.addEventListener("click", function () {
                inputNama.value = item.name;
                inputNim.value = item.nim;
                autocompleteList.classList.remove("show");
            });
            autocompleteList.appendChild(div);
        });

        autocompleteList.classList.add("show");
    });

    document.addEventListener("click", function (e) {
        if (!inputNama.contains(e.target) && !autocompleteList.contains(e.target)) {
            autocompleteList.classList.remove("show");
        }
    });

    formAkademik.addEventListener("submit", function (e) {
        e.preventDefault();

        const nama = inputNama.value.trim();
        const nim = inputNim.value.trim();
        const matkul = inputMatkul.value.trim();
        const dosen = inputDosen.value.trim();

        if (!nama) {
            showCustomAlert("Nama Mahasiswa Tidak Boleh Kosong");
            inputNama.focus();
            return;
        }
        if (!nim) {
            showCustomAlert("NIM Tidak Boleh Kosong");
            inputNim.focus();
            return;
        }
        if (!matkul) {
            showCustomAlert("Mata Kuliah Pilihan Harus Dipilih");
            inputMatkul.focus();
            return;
        }
        if (!dosen) {
            showCustomAlert("Dosen Pembimbing Tidak Boleh Kosong");
            inputDosen.focus();
            return;
        }

        registeredList.push({ nim, nama, matkul, dosen });
        renderTable();

        formAkademik.reset();
        inputNim.value = "";
        showCustomAlert("Data Registrasi Akademik Mahasiswa Berhasil Disimpan!");
    });

    document.getElementById("btnResetAkademik").addEventListener("click", function () {
        formAkademik.reset();
        autocompleteList.classList.remove("show");
    });

    const selectProvinsi = document.getElementById("postal_provinsi");
    const selectKota = document.getElementById("postal_kota");
    const inputKeyword = document.getElementById("postal_keyword");
    const btnCariKodePos = document.getElementById("btnCariKodePos");
    const postalResultsContainer = document.getElementById("postal_results");
    const postalSummary = document.getElementById("postal_summary");

    const uniqueProvinces = [...new Set(postalDatabase.map(p => p.province))].sort();
    uniqueProvinces.forEach(prov => {
        const opt = document.createElement("option");
        opt.value = prov;
        opt.textContent = prov;
        selectProvinsi.appendChild(opt);
    });

    selectProvinsi.addEventListener("change", function () {
        const prov = this.value;
        selectKota.innerHTML = `<option value="">Pilih Kota atau Kabupaten</option>`;
        if (!prov) return;

        const cities = [...new Set(postalDatabase.filter(p => p.province === prov).map(p => p.city))].sort();
        cities.forEach(city => {
            const opt = document.createElement("option");
            opt.value = city;
            opt.textContent = city;
            selectKota.appendChild(opt);
        });
    });

    function handlePostalSearch() {
        const prov = selectProvinsi.value.trim().toLowerCase();
        const kota = selectKota.value.trim().toLowerCase();
        const kw = inputKeyword.value.trim().toLowerCase();

        if (!prov && !kota && !kw) {
            showCustomAlert("Silakan pilih Provinsi, Kota, atau masukkan Kata Kunci Pencarian!");
            return;
        }

        const filtered = postalDatabase.filter(item => {
            const matchProv = !prov || item.province.toLowerCase() === prov;
            const matchKota = !kota || item.city.toLowerCase() === kota;
            const matchKw = !kw ||
                item.postalCode.includes(kw) ||
                item.urban.toLowerCase().includes(kw) ||
                item.subdistrict.toLowerCase().includes(kw) ||
                item.city.toLowerCase().includes(kw);

            return matchProv && matchKota && matchKw;
        });

        postalResultsContainer.innerHTML = "";
        const searchKeywordDisplay = kw || (kota ? `Kota ${selectKota.value}` : selectProvinsi.value);
        postalSummary.innerHTML = `Hasil pencarian kode pos dengan menggunakan kata kunci "<strong>${searchKeywordDisplay}</strong>" telah ditemukan sebanyak <strong>${filtered.length} buah</strong>.`;
        postalSummary.style.display = "block";

        if (filtered.length === 0) {
            postalResultsContainer.innerHTML = `
                <div class="empty-state">
                    Data kode pos untuk kata kunci tersebut tidak ditemukan. Silakan gunakan kata kunci lain.
                </div>
            `;
            return;
        }

        filtered.forEach(item => {
            const card = document.createElement("div");
            card.className = "postal-result-card";
            card.innerHTML = `
                <div class="postal-result-header">${item.urban}</div>
                <div class="postal-result-body">
                    Kode pos <strong>${item.postalCode}</strong> untuk daerah Kelurahan ${item.urban}, Kecamatan ${item.subdistrict}, ${item.city}, ${item.province}.
                </div>
            `;
            postalResultsContainer.appendChild(card);
        });
    }

    btnCariKodePos.addEventListener("click", handlePostalSearch);
    inputKeyword.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            handlePostalSearch();
        }
    });

    const formAkun = document.getElementById("formRegistrationAkun");
    const regName = document.getElementById("reg3_name");
    const regAddress = document.getElementById("reg3_address");
    const regEmail = document.getElementById("reg3_email");
    const regPassword = document.getElementById("reg3_password");
    const regCourse = document.getElementById("reg3_course");
    const regCollege = document.getElementById("reg3_college");
    const regAgree = document.getElementById("reg3_agree");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    function validateField(inputEl, condition) {
        if (condition) {
            inputEl.classList.remove("is-invalid");
            inputEl.classList.add("is-valid");
            return true;
        } else {
            inputEl.classList.remove("is-valid");
            inputEl.classList.add("is-invalid");
            return false;
        }
    }

    regName.addEventListener("input", function () {
        validateField(this, this.value.trim().length >= 3);
    });

    regEmail.addEventListener("input", function () {
        validateField(this, emailRegex.test(this.value.trim()));
    });

    regPassword.addEventListener("input", function () {
        validateField(this, this.value.length >= 6);
    });

    formAkun.addEventListener("submit", function (e) {
        e.preventDefault();

        const isNameValid = validateField(regName, regName.value.trim().length >= 3);
        const isAddrValid = validateField(regAddress, regAddress.value.trim().length > 0);
        const isEmailValid = validateField(regEmail, emailRegex.test(regEmail.value.trim()));
        const isPassValid = validateField(regPassword, regPassword.value.length >= 6);
        const isCourseValid = validateField(regCourse, regCourse.value.trim() !== "");
        const isCollegeValid = validateField(regCollege, regCollege.value.trim().length > 0);

        if (!regName.value.trim()) {
            showCustomAlert("Name Tidak Boleh Kosong");
            regName.focus();
            return;
        }
        if (!regAddress.value.trim()) {
            showCustomAlert("Address Tidak Boleh Kosong");
            regAddress.focus();
            return;
        }
        if (!regEmail.value.trim()) {
            showCustomAlert("Email Tidak Boleh Kosong");
            regEmail.focus();
            return;
        }
        if (!isEmailValid) {
            showCustomAlert("Format Email Tidak Valid! Contoh: user@domain.com");
            regEmail.focus();
            return;
        }
        if (!regPassword.value) {
            showCustomAlert("Password Tidak Boleh Kosong (Minimal 6 Karakter)");
            regPassword.focus();
            return;
        }
        if (!regCourse.value) {
            showCustomAlert("Silakan Pilih Course / Program Studi Anda");
            regCourse.focus();
            return;
        }
        if (!regCollege.value.trim()) {
            showCustomAlert("College Name Tidak Boleh Kosong");
            regCollege.focus();
            return;
        }
        if (!regAgree.checked) {
            showCustomAlert("Anda harus mencentang persetujuan informasi di atas!");
            regAgree.focus();
            return;
        }

        if (isNameValid && isAddrValid && isEmailValid && isPassValid && isCourseValid && isCollegeValid) {
            const randomNim = "23" + Math.floor(1000 + Math.random() * 9000);
            registeredList.push({
                nim: randomNim,
                nama: regName.value.trim(),
                matkul: regCourse.value,
                dosen: "Tim Dosen Akademik"
            });
            renderTable();

            showCustomAlert(`Registrasi Berhasil!\nSelamat datang, ${regName.value.trim()} di program studi ${regCourse.value}.`);
            formAkun.reset();
            document.querySelectorAll("#formRegistrationAkun .form-control").forEach(el => {
                el.classList.remove("is-valid", "is-invalid");
            });
        }
    });

    document.getElementById("btnResetRegAkun").addEventListener("click", function () {
        formAkun.reset();
        document.querySelectorAll("#formRegistrationAkun .form-control").forEach(el => {
            el.classList.remove("is-valid", "is-invalid");
        });
    });

    const formEmailValidation = document.getElementById("formEmailValidation");
    const inputEmailVal = document.getElementById("email_val_input");

    formEmailValidation.addEventListener("submit", function (e) {
        e.preventDefault();
        const emailVal = inputEmailVal.value.trim();

        if (!emailVal) {
            showCustomAlert("Email Tidak Boleh Kosong");
            inputEmailVal.classList.add("is-invalid");
            inputEmailVal.focus();
            return;
        }

        if (!emailRegex.test(emailVal)) {
            showCustomAlert("Format Email Tidak Sesuai Standar! Harus memiliki format: nama@domain.com");
            inputEmailVal.classList.add("is-invalid");
            inputEmailVal.focus();
            return;
        }

        inputEmailVal.classList.remove("is-invalid");
        inputEmailVal.classList.add("is-valid");
        showCustomAlert(`Validasi Sukses!\nEmail "${emailVal}" adalah alamat email yang valid.`);
    });

    const selectProductType = document.getElementById("product_type");
    const selectProductBrand = document.getElementById("product_brand");
    const productPreview = document.getElementById("productPreview");
    const previewType = document.getElementById("previewType");
    const previewBrand = document.getElementById("previewBrand");

    selectProductType.addEventListener("change", function () {
        const selectedType = this.value;
        selectProductBrand.innerHTML = `<option value="">Pilih Merk</option>`;
        productPreview.classList.remove("show");

        if (!selectedType || !productBrands[selectedType]) {
            return;
        }

        const brands = productBrands[selectedType];
        brands.forEach(brand => {
            const opt = document.createElement("option");
            opt.value = brand;
            opt.textContent = brand;
            selectProductBrand.appendChild(opt);
        });
    });

    selectProductBrand.addEventListener("change", function () {
        const brand = this.value;
        const type = selectProductType.value;

        if (brand && type) {
            previewType.textContent = type;
            previewBrand.textContent = brand;
            productPreview.classList.add("show");
        } else {
            productPreview.classList.remove("show");
        }
    });

    selectProvinsi.value = "Jawa Timur";
    selectProvinsi.dispatchEvent(new Event("change"));
    selectKota.value = "Surabaya";
    inputKeyword.value = "60111";
    handlePostalSearch();
});
