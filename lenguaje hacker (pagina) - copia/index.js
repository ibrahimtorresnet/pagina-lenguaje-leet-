
let texto = document.querySelector(".input");
let traductor = document.querySelector(".traductor");
let btonRadio1 = document.getElementById("basico");
let btonRadio2 = document.getElementById("intermedio");
let btonRadio3 = document.getElementById("avanzado");
let btonRadio4=document.getElementById("retardadoC")

// Selecciona por defecto el botón de radio "básico"
btonRadio1.checked = true;

function traductor_lenguaje_leet(texto, leet){
    let resultado=" "
    for (let i=0;i<texto.length;i++){
        const letra =texto[i].toLowerCase()
        if(leet.hasOwnProperty(letra)){
            resultado+=leet[letra]
        }else{
            resultado+=letra
        }}
    return resultado
}

function traducir(){
    if (btonRadio1.checked){
        const leet={ 
            a:"4",b:"8",c:"c",d:"d",e:"3",f:"f",g:"6",h:"h",i:"i",j:"j",k:"k",l:"1",m:"m",n:"n",ñ:"ñ",o:"0",p:"p",q:"q",r:"r",s:"5",t:"7",u:"u",v:"v",w:"w",x:"x",y:"y",z:"2",
        }
        traductor.value = traductor_lenguaje_leet(texto.value, leet);
    } else if (btonRadio2.checked){
        const leet={
            a:"4",b:"8",c:"[",d:")",e:"3",f:"f",g:"g",h:")-(",i:"i",j:"j",k:"k",l:"1",m:"m",n:"n",ñ:"ñ",o:"0",p:"p",q:"q",r:"i2",s:"5",t:"7",u:"u",v:"v",w:"w",x:"x",y:"y",z:"2",
        }
        traductor.value = traductor_lenguaje_leet(texto.value, leet);
    }

    else if(btonRadio3.checked){
        const leet={
            a:"4",b:"8",c:"[",d:")",e:"3",f:"f",g:"g",h:")-(",i:"][",j:",_|",k:">|",l:"1",m:"/\\/\\",n:"n",ñ:"ñ",o:"0",p:"|*",q:"(_,)",r:"i2",s:"5",t:"7",u:"(_)",v:"\\/",w:"\\/\\/",x:"><",y:"j",z:"2",
          6:"b",7:"T",8:"B",9:"g",0:"o"  }
        traductor.value = traductor_lenguaje_leet(texto.value, leet);


    }
    else if(btonRadio4.checked){
        const leet={
            a:"4",b:"8",c:"[",d:")",e:"3",f:"|=",g:"6",h:")-(",i:"][",j:",_|",k:">|",l:"1",m:"/\\/\\",n:"^/",ñ:"ñ",o:"0",p:"|*",q:"(_,)",r:"i2",s:"5",t:"7",u:"(_)",v:"\\/",w:"\\/\\/",x:"><",y:"j",z:"2",
            1:"L",2:"R",3:"E",4:"A",5:"S",6:"b",7:"T",8:"B",9:"g",0:"o"  }
        traductor.value = traductor_lenguaje_leet(texto.value, leet);


    }
    

    // Aquí puedes agregar más condiciones para los otros botones de radio
}

texto.addEventListener("input", traducir);
btonRadio1.addEventListener("change", traducir);
btonRadio2.addEventListener("change", traducir);
btonRadio3.addEventListener("change", traducir);
btonRadio4.addEventListener("change",traducir)

