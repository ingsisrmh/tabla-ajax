<?php

var_dump($_POST);

echo '<table>';

for($i=1; $i<=$_POST['filas']; $i++)
{
	echo '<tr>';
	for($j=1; $j<=$_POST['columnas']; $j++)
	{
		echo '<td style="border: 1px solid #000000">';
		$x=$i*$j;
		if($_POST['operacion']=='true')
			echo "$i*$j=";
		echo $x;
		echo '<td>';
	}

	echo '</tr>';
}

echo '</table>';
?>
