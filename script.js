function kirimdata() {
    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("Nim").value;
    var peminatan = document.querySelector("input[name='peminatan']:checked").value;
    var alamat = document.getElementById("alamat").value;

    alert(
        "Nama Mahasiswa: " + nama + "\n" +
        "NIM: " + nim + "\n" +
        "Peminatan: " + peminatan + "\n" +
        "Alamat: " + alamat
    );


}
