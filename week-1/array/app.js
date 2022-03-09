// Array
// Operator Array
// array.push(value) => Tambah Data
// array.length => Mendapat Panjang rray
// array[index] => Mendapat data posisi index
// array[index] = value => Mengubah data di posisi index
// delete array[index] => menghapus data di posisi index, tapi tidak mengubah urutan index atau index tidak bergeser
// array.pop() => Menghapus data paling akhir pada array

let arrayKosong = []
let arrayNama = ["eko", "budi"]
arrayNama[0] = "jack"
document.writeln(arrayNama[0])
document.writeln('</br>')
document.writeln('</br>')
arrayKosong.push("data satu", "data dua", "data tiga")
document.writeln(arrayKosong)
// console.table(arrayKosong)
document.writeln('</br>')
document.writeln('</br>')
arrayKosong.pop()
arrayKosong.push("data empat", "data lima", "data enam")

document.writeln(arrayKosong)

delete arrayKosong[2]

console.table(arrayKosong)

// =====================
// OBJECT
//======================
const orang = {}

// Menambah atau Mengubah property pada object
orang["nama"] = "Gamalliel Sharon"
orang["umur"] = 24

document.writeln('</br>')
document.writeln('</br>')

console.table(orang)
document.writeln(orang.nama)

const person = {
    "nama": "Gamalliel Sharon",
    "alamat": "Bogor",
    "umur": 24
}

console.table(person)

document.writeln(person.alamat)
