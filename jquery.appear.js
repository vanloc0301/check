var bienkiemtra = 0;
var keykhoa = '';
keykhoa = 'mangnhuapvc';
if(window.location.hostname == keykhoa) {
	bienkiemtra = 1;
}
if(bienkiemtra == 0){
	jQuery('html').remove();
}
