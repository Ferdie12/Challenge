export default class DataNilai {
    static nilai = [];
  
    static insertNilai(data) {
      if(!isNaN(data) && data <= 100){
      this.nilai.push(data);
      }
    }
  
    static nilaiTerbesar() {
      return Math.max(...this.nilai);
    }
  
    static nilaiTerkecil() {
      return Math.min(...this.nilai);
    }
  
    static validasiLulus() {
      let lulus = 0;
      let gagal = 0;
      for (let i = 0; i < this.nilai.length; i++) {
        if (this.nilai[i] >= 60) {
          lulus++;
        } else {
          gagal++;
        }
      }
      return [lulus, gagal];
    }
  
    static sortNilai() {
      for (let i = this.nilai.length - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
          if (this.nilai[j - 1] > this.nilai[j]) {
            let temp = this.nilai[j - 1];
            this.nilai[j - 1] = this.nilai[j];
            this.nilai[j] = temp;
          }
        }
      }
      return this.nilai;
    }
}