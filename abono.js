
let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){

    evento.preventDefault()
    console.log("click")

    let nombre=document.getElementById("nombre").value
    console.log(nombre)
    let apellido=document.getElementById("apellido").value
    console.log(apellido)
    let cedula=document.getElementById("cedula").value
    console.log(cedula)
    let telefono=document.getElementById("telefono").value
    console.log(telefono)
    let abono=document.getElementById("abono").value
    console.log(abono)
    let tribuna=document.getElementById("tribuna").value
    console.log(tribuna)

    if(tribuna=="sur"){
        let precio=144000
        let total=precio*abono
        alert("Su abono a la tribuna sur fue "+total)
    }else if(tribuna=="norte"){
        let precio=144000
        let total=precio*abono
        alert("Su abono a la tribuna norte fue "+total)
    }else if(tribuna=="oriental"){
        let precio=215000
        let total=precio*abono
        alert("Su abono a la tribuna oriental fue "+total)
    }else if(tribuna=="occidental"){
        let precio=444000
        let total=precio*abono
        alert("Su abono a la tribuna occidental fue "+total)
    }
    


    
    

   
})