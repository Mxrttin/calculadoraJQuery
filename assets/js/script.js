$("document").ready (function (){

    let numero1= 0
    let numero2= 0
    let resultado = 0

    $("#btnSumar").click(function(){


        let numero1=$("#numero1").val();
        if (numero1 === ''){
            $("#error1").text("Debe agregar el primer numero");
            $("#error1").css("color","red");
            return;
        }

        let numero2=$("#numero2").val();
        if (numero2 === ''){
            $("#error2").text("Debe agregar el segundo numero");
            $("#error2").css("color","red");
            return;
        }

        resultado = parseInt(numero1) + parseInt(numero2);
        $("#resultado").text(resultado);
        limpiar();  
    })

    $("#btnRestar").click(function(){


        let numero1=$("#numero1").val();
        if (numero1 === ''){
            $("#error1").text("Debe agregar el primer numero");
            $("#error1").css("color","red");
            return;
        }

        let numero2=$("#numero2").val();
        if (numero2 === ''){
            $("#error2").text("Debe agregar el segundo numero");
            $("#error2").css("color","red");
            return;
        }

        resultado = parseInt(numero1) - parseInt(numero2);
        $("#resultado").text(resultado);
        limpiar();  
    })

    $("#btnMultiplicar").click(function(){


        let numero1=$("#numero1").val();
        if (numero1 === ''){
            $("#error1").text("Debe agregar el primer numero");
            $("#error1").css("color","red");
            return;
        }

        let numero2=$("#numero2").val();
        if (numero2 === ''){
            $("#error2").text("Debe agregar el segundo numero");
            $("#error2").css("color","red");
            return;
        }

        resultado = parseInt(numero1) * parseInt(numero2);
        $("#resultado").text(resultado);
        limpiar();  
    })

    $("#btnDividir").click(function(){


        let numero1=$("#numero1").val();
        if (numero1 === ''){
            $("#error1").text("Debe agregar el primer numero");
            $("#error1").css("color","red");
            return;
        }

        let numero2=$("#numero2").val();
        if (numero2 === '' ){
            $("#error2").text("Debe agregar el segundo numero");
            $("#error2").css("color","red");
            return;
        }
        if (numero2 === '0'){
            $("#error2").text("No puedes dividir por 0");
            $("#error2").css("color","red");
            return; 
        }

        resultado = parseInt(numero1) / parseInt(numero2);
        $("#resultado").text(resultado);
        limpiar();  
    })    


    $("#btnLimpiar").click(function(){
        limpiar()
    })


    function limpiar(){
        $("#numero1").val("");
        $("#numero2").val('');
        $("#resultado").val('');
        
    
    }
})




