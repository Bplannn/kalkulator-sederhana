document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan elemen input display
    const display = document.getElementById("screen");
    const buttons = document.querySelectorAll("button");

    // Menambahkan event listener untuk setiap tombol
    buttons.forEach((button) => {
        button.addEventListener("click", function() {
            // Mendapatkan nilai tombol yang diklik
            const value = button.getAttribute("data-value");

            // Menangani operasi tombol
            if (value === "AC") {
                // Menghapus semua
                display.value = "";
            } else if (value === "DEL") {
                // Menghapus satu karakter
                display.value = display.value.slice(0, -1);
            } else if (value === "=") {
                // Melakukan perhitungan
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = "Error";
                }
            } else {
                // Menambahkan nilai ke layar
                display.value += value;
            }
        });
    });
});