
const APP_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwzcolOLMuz9dohwJVZDViVEDVcIFCGDSHgc2BLmF2Tm3Qlm0HZk-39GUs5zoWTQNZ4rQ/exec";

function loadPengumuman() {
  Swal.fire({
    title: "Harap Tunggu",
    text: "Sedang memuat informasi...",
    icon: "info",
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => Swal.showLoading(),
  });

  fetch(`${APP_SCRIPT_URL}?action=getPengumuman`)
    .then((response) => response.json())
    .then((data) => {
      Swal.close();
      displayPengumuman(data);
    })
    .catch((error) => {
      Swal.fire({
        title: "Gagal Memuat",
        text: "Terjadi kesalahan saat memuat pengumuman.",
        icon: "error",
      });
      console.error("Error fetching pengumuman:", error);
    });
}

function displayPengumuman(data) {
  if (data.length > 0) {
    const pengumuman = data[0];

    // Menampilkan judul dan isi pengumuman
    document.getElementById("pengumumanTitle").innerText = pengumuman.judul || "Judul Tidak Tersedia";
    document.getElementById("pengumumanText").innerText = pengumuman.isi || "Isi Tidak Tersedia";

    // Menampilkan tanggal dengan ikon kalender
    document.getElementById("pengumumanDate").innerHTML = pengumuman.tanggal
      ? `<i class="bi bi-calendar"></i> ${pengumuman.tanggal}`
      : `<i class="bi bi-calendar"></i> Tanggal Tidak Tersedia`;

    // Menampilkan waktu hanya jika ada dengan ikon jam
    const timeElement = document.getElementById("pengumumanTime");
    if (pengumuman.waktu) {
      timeElement.innerHTML = `<i class="bi bi-clock"></i> ${pengumuman.waktu}`;
      timeElement.style.display = "block"; // Tampilkan elemen
    } else {
      timeElement.style.display = "none"; // Sembunyikan elemen jika kosong
    }

    // Menampilkan author hanya jika ada dengan ikon orang
    const authorElement = document.getElementById("pengumumanAuthor");
    if (pengumuman.author) {
      authorElement.innerHTML = `<i class="bi bi-person"></i> Diposting: ${pengumuman.author}`;
      authorElement.style.display = "block"; // Tampilkan elemen
    } else {
      authorElement.style.display = "none"; // Sembunyikan elemen jika kosong
    }

    // Menampilkan tempat hanya jika ada dengan ikon peta
    const placeElement = document.getElementById("pengumumanPlace");
    if (pengumuman.tempat) {
      placeElement.innerHTML = `<i class="bi bi-geo-alt"></i> Tempat: ${pengumuman.tempat}`;
      placeElement.style.display = "block"; // Tampilkan elemen
    } else {
      placeElement.style.display = "none"; // Sembunyikan elemen jika kosong
    }
  } else {
    // Jika tidak ada pengumuman
    document.getElementById("pengumumanTitle").innerText = "Tidak Ada Pengumuman";
    document.getElementById("pengumumanText").innerText = "Tidak ada isi pengumuman.";
    document.getElementById("pengumumanDate").innerHTML = `<i class="bi bi-calendar"></i>`;
    document.getElementById("pengumumanTime").style.display = "none";
    document.getElementById("pengumumanAuthor").style.display = "none";
    document.getElementById("pengumumanPlace").style.display = "none";
  }
}




function showHistory() {
  Swal.fire({
    title: "Harap Tunggu",
    text: "Sedang memuat history informasi...",
    icon: "info",
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => Swal.showLoading(),
  });

  fetch(`${APP_SCRIPT_URL}?action=getAllPengumuman`)
    .then((response) => response.json())
    .then((data) => {
      Swal.close();

      const historyList = document.getElementById("historyList");
historyList.innerHTML = data
  .map(
    (item) => `
      <li class="list-group-item">
        <strong>${item.judul}</strong><br>
        <small>
          <i class="bi bi-calendar"></i> ${item.tanggal || "Tanggal Tidak Tersedia"}
          ${item.waktu ? `<i class="bi bi-clock"></i> ${item.waktu}` : ""}
          ${item.tempat ? `<i class="bi bi-geo-alt"></i> ${item.tempat}` : ""}
        </small>
        <p>${item.isi}</p>
      </li>
    `
  )
  .join("");

      new bootstrap.Modal(document.getElementById("historyModal")).show();
    })
    .catch((error) => {
      Swal.fire({
        title: "Gagal Memuat",
        text: "Terjadi kesalahan saat memuat history informasi.",
        icon: "error",
      });
      console.error("Error fetching history:", error);
    });
}

loadPengumuman();
