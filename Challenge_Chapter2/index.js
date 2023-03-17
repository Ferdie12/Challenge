import PromptSync from "prompt-sync";
import DataNilai from "./class.js";

const prompt = PromptSync();

console.log('Masukkan nilai (ketik exit jika selesai): ');
while (true) {
  const input = prompt();
  if (input === 'exit') {
    break;
  }
  DataNilai.insertNilai(parseInt(input));
}

const [lulus, gagal] = DataNilai.validasiLulus();

console.log(`Nilai tertinggi: ${DataNilai.nilaiTerbesar()}`);
console.log(`Nilai terendah: ${DataNilai.nilaiTerkecil()}`);
console.log(`Siswa yang lulus: ${lulus}, Siswa yang tidak lulus: ${gagal}`);
console.log(`Urutan nilai siswa dari terendah ke tertinggi: ${DataNilai.sortNilai().join(', ')}`);
console.log(`Siswa yang memiliki nilai 90 atau nilai 100: ${DataNilai.nilai.filter(nilai => nilai=== 90 || nilai === 100).length} orang`);
