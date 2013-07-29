
/*****************************************************************
*	Name    : navigateToFrmGestures
*	Author  : Kony
*	Purpose : To navigate to frmGestures
******************************************************************/

function navigateToFrmGestures(){
	frmGestures.show();
}

/*****************************************************************
*	Name    : FrmGestures_preShow
*	Author  : Kony
*	Purpose : To initialize label and images on frmGestures
******************************************************************/

function FrmGestures_preShow(){
	frmGestures.lblGesture.text = " ";
	frmGestures.imgGes.isVisible = false;
}
