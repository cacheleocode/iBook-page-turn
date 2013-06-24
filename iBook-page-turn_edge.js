/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'page3',
            type:'rect',
            rect:['2048px','0px','1024px','768px','auto','auto'],
            fill:["rgba(248,255,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'page2',
            type:'rect',
            rect:['1024px','0px','1024px','768px','auto','auto'],
            fill:["rgba(255,164,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'page1',
            type:'rect',
            rect:['0px','0px','1024px','768px','auto','auto'],
            fill:["rgba(255,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'next',
            type:'rect',
            rect:['984px','0px','40px','768px','auto','auto'],
            opacity:0,
            fill:["rgba(255,0,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'prev',
            type:'rect',
            rect:['0px','0px','40px','768px','auto','auto'],
            opacity:0,
            fill:["rgba(255,0,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_page2}": [
            ["color", "background-color", 'rgba(255,164,0,1.00)'],
            ["style", "display", 'block'],
            ["style", "height", '768px'],
            ["style", "top", '0px'],
            ["style", "left", '1024px'],
            ["style", "width", '1024px']
         ],
         "${_page1}": [
            ["color", "background-color", 'rgba(255,0,0,1.00)'],
            ["style", "display", 'block'],
            ["style", "height", '768px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${_prev}": [
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '40px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '1024px'],
            ["style", "height", '768px'],
            ["style", "overflow", 'hidden']
         ],
         "${_page3}": [
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["color", "background-color", 'rgba(248,255,0,1.00)'],
            ["style", "left", '1024px'],
            ["style", "width", '1024px']
         ],
         "${_next}": [
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["style", "opacity", '0'],
            ["style", "left", '984px'],
            ["style", "width", '40px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid3", tween: [ "style", "${_page1}", "left", '-1024px', { fromValue: '0px'}], position: 5, duration: 495, easing: "easeInOutQuint" },
            { id: "eid5", tween: [ "style", "${_page2}", "left", '0px', { fromValue: '1024px'}], position: 5, duration: 495, easing: "easeInOutQuint" },
            { id: "eid8", tween: [ "style", "${_page2}", "left", '-1024px', { fromValue: '0px'}], position: 500, duration: 500, easing: "easeInOutQuint" },
            { id: "eid12", tween: [ "style", "${_page3}", "left", '0px', { fromValue: '1024px'}], position: 500, duration: 500, easing: "easeInOutQuint" },
            { id: "eid7", tween: [ "style", "${_page1}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9", tween: [ "style", "${_page2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-9508933");
