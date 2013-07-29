	
/*****************************************************************
*	Name    : onGestureFunction
*	Author  : Kony Solutions
*	Purpose : To give an alert as which gesture is performed on the form 'frmGestures'
******************************************************************/

function onGestureFunction(commonWidget,gestureInfo)// The callback function when the gesture event is triggered.
{
	frmGestures.imgGes.isVisible = true;
	try
	{
		var direction = "";
		var GesType = ""+gestureInfo.gestureType;
		var tapParams = gestureInfo.gesturesetUpParams.taps;
		if (GesType == "1") //Double tap gesture
		{  
		    
	        	frmGestures.lblGesture.text ="A Double tap gesture was performed.";
	        	frmGestures.imgGes.src = "doubletap.png"; 
	       
		}
		else if (GesType == "2") //Swipe gesture
		{ 
			var swipeDirection = ""+gestureInfo.swipeDirection; //Read swipe direction
			if (swipeDirection == "1") 
			{
				direction = "LEFT";
				frmGestures.imgGes.src = "arrowsleft.png";
			}
			else if (swipeDirection == "2") 
			{
				direction = "RIGHT";
				frmGestures.imgGes.src = "arrowsright.png";
			}
			else if (swipeDirection == "3") 
			{
				direction = "TOP";
				frmGestures.imgGes.src = "arrowstop.png";
			}
			else
			{
				direction = "BOTTOM";
				frmGestures.imgGes.src = "arrowsbottom.png";
			}
			
			
	        	 frmGestures.lblGesture.text = "A swipe gesture was performed in the "+direction+" direction."; 
		}
		else if (GesType == "3") 
		{   
		    
	        	frmGestures.lblGesture.text = "A longpress gesture was performed";
	        	frmGestures.imgGes.src = "longpress.png"; 
	        	
			
		}
	}
	catch(err)
	{
		alert("error in gesture call back"+err);
	}
}

/*****************************************************************
*	Name    : GenericGestureHandler
*	Author  : Kony Solutions
*	Purpose : To set gestures(Double tap,Swipe,Long press) to the form 'frmGestures'
******************************************************************/

function GenericGestureHandler()//This function registers the Gesture events for the widgets.
{
	try
	{
		frmGestures.setGestureRecognizer(1, {fingers :1, taps :2}, onGestureFunction) ;//double tap gesture
		frmGestures.setGestureRecognizer(2, {fingers:1,swipedistance:50,swipevelocity:75}, onGestureFunction); // swipe with default parameters
		frmGestures.setGestureRecognizer(3, {pressDuration:2}, onGestureFunction); //2 sec press duration
	}
	catch(err)
	{
		alert("error while regestering the gestures"+err)
	}
}

