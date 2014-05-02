var resultados;

function iniciar()
{
	resultados = document.getElementById('cajadatos');
	btnActualizar = document.getElementById('boton');
	btnActualizar.addEventListener('click', enviar);
}

function enviar()
{
	var data = new FormData();
	f = document.getElementById('filas');
	data.append('filas', f.value);
	c = document.getElementById('columnas');
	data.append('columnas', c.value);
	o = document.getElementById('operacion');
	data.append('operacion', o.checked);
	
	var url="procesar.php";

	var solicitud = new XMLHttpRequest();

	solicitud.addEventListener('load', mostrar);
	solicitud.open("POST", url, true);
	solicitud.send(data);
}

function mostrar(e)
{
	var datos=e.target;

	if(datos.status == 200)
	{
		cajadatos.innerHTML = datos.responseText;
	}
}

addEventListener('load', iniciar);
