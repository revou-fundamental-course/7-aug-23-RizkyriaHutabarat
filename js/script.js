// Fungsi menghitung luas segitiga
function hitungLuas() {
  const inputSisiLuas = parseFloat(document.getElementById("input-sisi-luas").value);
  const inputSisiLuas1 = parseFloat(document.getElementById("input-sisi-luas1").value);
  const rumusLuas = `L = (${inputSisiLuas} × ${inputSisiLuas1}) / 2`;
  const hasilLuas = (inputSisiLuas * inputSisiLuas1) / 2;

  document.getElementById("rumus-hitung-luas").textContent = "Rumus: " + rumusLuas;
  document.getElementById("rumus-luas").textContent = "Hasil: ";
  document.getElementById("hasil-luas").textContent = hasilLuas.toFixed(2);
}

// Fungsi untuk mereset hasil perhitungan luas
function resetLuas() {
  document.getElementById("input-sisi-luas").value = "";
  document.getElementById("input-sisi-luas1").value = "";
  document.getElementById("rumus-hitung-luas").textContent = "";
  document.getElementById("rumus-luas").textContent = "";
  document.getElementById("hasil-luas").textContent = "";
}

// Fungsi untuk menghitung keliling segitiga
function hitungKeliling() {
  const inputSisiA = parseFloat(document.getElementById("input-sisi-kelilingA").value);
  const inputSisiB = parseFloat(document.getElementById("input-sisi-kelilingB").value);
  const inputSisiC = parseFloat(document.getElementById("input-sisi-kelilingC").value);
  const rumusKeliling = `K = ${inputSisiA} + ${inputSisiB} + ${inputSisiC}`;
  const hasilKeliling = inputSisiA + inputSisiB + inputSisiC;

  document.getElementById("rumus-hitung-keliling").textContent = "Rumus: " + rumusKeliling;
  document.getElementById("rumus-keliling").textContent = "Hasil: ";
  document.getElementById("hasil-keliling").textContent = hasilKeliling.toFixed(2);
}

// Fungsi untuk mereset hasil perhitungan keliling
function resetKeliling() {
  document.getElementById("input-sisi-kelilingA").value = "";
  document.getElementById("input-sisi-kelilingB").value = "";
  document.getElementById("input-sisi-kelilingC").value = "";
  document.getElementById("rumus-hitung-keliling").textContent = "";
  document.getElementById("rumus-keliling").textContent = "";
  document.getElementById("hasil-keliling").textContent = "";
}
