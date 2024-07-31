const socket = io.connect('localhost:3000');

const yazar = document.getElementById('yazar');
const mesaj = document.getElementById('mesaj');
const buton = document.getElementById('buton');
const cikti = document.getElementById('cikti');

buton.addEventListener('click', () =>  {
    socket.emit('chat', {
        mesaj: mesaj.value,
        yazar: yazar.value
    });
});

socket.on('chat', (data) => {
    cikti.innerHTML += `<br><hr><strong>${data.yazar}</strong><p>${data.mesaj}</p><hr><br>`;
});