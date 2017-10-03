var bienkiemtra = 0;
var keykhoa = '';
keykhoa = 'xaydungnhaphohcm';
if(window.location.href.indexOf(keykhoa) > -1) {
	bienkiemtra = 1;
}
if(bienkiemtra == 0){
	jQuery('html').remove();
}
