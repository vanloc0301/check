var bienkiemtra = 0;
var keykhoa = '';
keykhoa = 'mangnhuapvc';
consolog.log(window.location.href.indexOf(keykhoa));
if(window.location.href.indexOf(keykhoa) > -1) {
	bienkiemtra = 1;
	echo bienkiemtra;
}
if(bienkiemtra == 0){
	jQuery('html').remove();
}
