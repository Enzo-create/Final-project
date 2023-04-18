function validarReclamo(){
	$('.alert').remove();
		
		var nombre=$('#nombre').val();
		var apellido=$('#apellido').val();
		var domicilio=$('#domicilio').val();
		var phone=$('#phone').val();
		var dni=$('#dni').val();
		var email=$('#email').val();
		
		if(nombre=="" || nombre==null){
		cambiarColor("nombre");
		mostrarAlerta("Campo obligatorio");
		return false;
	}else{
			var expression= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ] *$/;
			if(!expression.test(nombre)){
				cambiarColor("nombre");
				mostrarAlerta2("No se permiten caracteres especiales");
				return false;
				
			}
		}

		
		
  
}



function cambiarColor(dato){
	$('#'+ dato).css({
		border: "1px solid #dd5144"
	}) 
}

function mostrarAlerta(texto){
	$('#nombre').before('<div class=alert>Error: ' + texto +' </div>');
	$('#apellido').before('<div class=alert>Error: ' + texto +' </div>');
	$('#domicilio').before('<div class=alert>Error: ' + texto +' </div>');
	$('#phone').before('<div class=alert>Error: ' + texto +' </div>');
	$('#dni').before('<div class=alert>Error: ' + texto +' </div>');
	$('#email').before('<div class=alert>Error: ' + texto +' </div>');

}

