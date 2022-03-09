//SWITCH STATEMENT

let nilai = "A"

switch (nilai) {
    case "A":
        document.writeln("Anda lulus dengan cukup baik")
        break
    case "B":
        document.writeln("<p>Selamat anda lulus</p>")
        break
    case "C":
        document.writeln("<p>Selamat anda lulus</p>")
        break
    case "D":
        document.writeln("<p>Anda belum lulus</p>")
        break
    default:
        document.writeln("<p>Mungkin anda salah jurusan</p>")
}

// IF STATEMENT
if (nilai === "A") {
    document.writeln("Anda lulus dengan cukup baik")
} else if (nilai === "B") {
    document.writeln("<p>Selamat anda lulus</p>")
} else if (nilai === "C") {
    document.writeln("<p>Selamat anda lulus</p>")
} else if (nilai === "D") {
    document.writeln("<p>Anda belum lulus</p>")
} else {
    document.writeln("<p>Mungkin anda salah jurusan</p>")
}