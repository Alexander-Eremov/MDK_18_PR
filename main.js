let imageBox = document.querySelector(`#ImageBox`)
let qrText = document.querySelector(`#qrText`)
let qrImage = document.querySelector(`#qrImage`)
let button = document.querySelector(`#actionButton`)
let qrTextColr = document.querySelector(`#qrTextColr`)
let qrBgColr = document.querySelector(`#qrBgColr`)
let qrFormat = document.querySelector(`#qrFormat`)

button.addEventListener('click', () => {
    if (qrText.value.length == 0){
        qrText.classList.add('error')
        setTimeout(()=>{
            qrText.classList.remove('error')
        },400)
        return
    }
    console.log(qrBgColr.value);

    qrImage.src =
        'https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=10&format='+qrFormat.value+'&color='+qrTextColr.value+'&bgcolor='+qrBgColr.value+'&data=' +
        qrText.value
    imageBox.classList.add('show-img')
})
