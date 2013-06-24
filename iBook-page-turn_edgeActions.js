/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         
         var timelinePos = 0;
         var animTimelineLength = sym.getDuration();
         
         // swipe
         this.swipeStartX;
         this.swipeEndX;
         this.swipePadding = 60; // prevent swipe when clicking
         
         this.onSwipeLeft = function()
         {
         	if( sym.getPosition() != 0 )
         	{
         		sym.playReverse();
         	}
         }
         
         this.onSwipeRight = function()
         {
         	if( sym.getPosition() != animTimelineLength)
         	{
         		sym.play();				
         	}
         }
         
         this.onStop = function()
         {
         	sym.stop();
         }
         
         this.onSwipe = function()
         {	
         	// swipe right (scrub to left)
         	if( this.swipeStartX < this.swipeEndX - this.swipePadding )
         	{
         		this.onSwipeLeft();
         	// swipe left (scrub to right)
         	}else if( this.swipeEndX < this.swipeStartX - this.swipePadding )
         	{
         		this.onSwipeRight();
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "touchend", function(sym, e) {
         // insert code to be run when a user stops touching an object (for touch devices only)
         
         if ( e.pageX == undefined ) {
         
         	var touch = e.originalEvent.touches [0] || e.originalEvent.changedTouches [0];
         	this.swipeEndX = touch.pageX;
         	this.onSwipe();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         
         if ( e.pageX == undefined ) {
         
         	var touch = e.originalEvent.touches [0] || e.originalEvent.changedTouches [0];
         
         	this.swipeStartX = touch.pageX;
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next}", "click", function(sym, e) {
         if( sym.getPosition() != sym.getDuration())
         {
         	sym.play();				
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_prev}", "click", function(sym, e) {
         if( sym.getPosition() != 0 )
         {
         	sym.playReverse();
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-9508933");