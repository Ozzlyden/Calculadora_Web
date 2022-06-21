function colocar(num){
	document.textview.value = document.textview.value+num;
}

function igual(){
	var exp = document.form.textview.value;
	if(exp){
		document.textview.value = eval(exp);
	}
}

function zerar(){
	document.textview.value = "";
}
