/*:
*
* @plugindesc Scene Status Extension using ChartJS.
* @author soul - 4f3./Tatsumi
*
* @param POLAR AREA SETTINGS
*
* @param PA Context Width
* @desc 
* @default 290
*
* @param PA Context Height
* @desc 
* @default 290
*
* @param PA Context Pos
* @desc 
* @default relative
*
* @param PA Context Margin
* @desc 
* @default 0
*
* @param PA Context Opacity
* @desc 
* @default 1
*
* @param PA Labels
* @desc The color labels of the Polar Area Chart for each parameter drawn / variable drawn.
* @default ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]
*
* @param PA Dataset Labels
* @desc The default dataset label for the variable name. Leave it blank if you want to change it later.
* @default 
*
* @param PA BG Color
* @desc The background color of each polar area item.
* @default ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)']
*
* @param PA Font Color
* @desc The font color of the Polar Area Chart legend.
* @default rgb(255, 255, 255)
*
* @param PA Border Colors
* @desc The color of the border for each of the polar area item.
* @default ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)']
*
* @param PA Border Width
* @desc The width of the line border. (Thickness)
* @default 1
*
* @param PA Hover Color
* @desc The color of the content when the area is hovered. Applied to the item.
* @default rgba(205, 205, 255, 0.5)
*
* @param PA Hover Border Color
* @desc The color of the border when the area is hovered. Applied to the item.
* @default rgba(205, 205, 255, 0.5)
*
* @param PA Hover Border Width
* @desc The thickness of the area border when hovered. Applied to the item.
* @default 1
*
* @param PA Responsive
* @desc Do you want the Polar Area Chart to be responsive? (resizable)
* @default false
*
* @param PA Display Legend
* @desc Do you want the Polar Area Chart to display the variable legend?
* @default true
*
* @param PA Animate Rotate
* @desc Do you want to make the Polar Area Chart to rotate when first shown?
* @default true
*
* @param PA Animate Scale
* @desc Do you want to make the Polar Area Chart to scale when first shown?
* @default true
*
*
* @param BAR CHART
*
* @param Bar Labels
* @desc The color labels of the Bar Chart for each parameter drawn / variable drawn.
* @default ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]
*

@help

Complete Character Status Chart Plugin


Foreword:
First of all, I want to thank my friend fftfantt (魔法は解けました) for the 
constant replies and teaching me the ropes of using Chart.js. 
This work is greatly inspired by fftfantt and because of that, 
this plugin has been created.

Installation:

Place the Chart.js and SOUL_ChartEssentials.js in your js / plugins folder.

Introduction:

The Charts:

POLAR AREA CHART
Polar area charts are similar to pie charts, but each 
segment has the same angle  - the radius of the segment 
differs depending on the value. This type of chart is 
often useful when we want to show a comparison data 
similar to a pie chart, but  also show a scale of values 
for context.

BAR CHART
A bar chart is a way of showing data as bars.
It is sometimes used to show trend data, and the comparison of 
multiple data sets side by side.

RADAR CHART
A radar chart is a way of showing multiple data points and the 
variation between them. They are often useful for comparing the 
points of two or more different data sets.

HOW TO USE:

Each character can have their own different types of chart
to represent their current stats. It could either be a
Bar Chart, Radar Chart or a Polar Area Chart. To do so,
first, you must enable the actor to use a chart as it's
status display. To do that, place this notetag on the
actor's note box:

<Use Chart on Status: x>

where x can be true or false. If true, then it shows
the chart, if false, then shows the default stat
numbers / or any previous stat displayer you have.

After setting it to true, you must set the type
of your bar chart. To do that, use this note tag:

<Status Chart Type: x>

where x can either be the ff:

bar
radar
polararea

For example:

<Status Chart Type: polararea>

So in an actor's notebox for example, you have something
like this:
<Use Chart on Status: true>
<Status Chart Type: bar>

*/


var Imported = Imported || {};
Imported.FLStatusChart = true;

var Soul = Soul || {};
Soul.ChartEssentials = Soul.ChartEssentials || {};

Soul.ChartEssentials.params = PluginManager.parameters('FLChartEssentials');

function scEssentials(param) {
    if (param === 'PA Hover Border Width') {
        return eval(Soul.ChartEssentials.params['PA Hover Border Width']);
    }      
    if (param === 'PA Labels') {
        return eval(Soul.ChartEssentials.params['PA Labels']);
    }
    if (param === 'PA Dataset Labels') {
        return String(Soul.ChartEssentials.params['PA Dataset Labels']);
    }
    if (param === 'PA BG Color') {
        return eval(Soul.ChartEssentials.params['PA BG Color']);
    }
    if (param === 'PA Border Colors') {
        return eval(Soul.ChartEssentials.params['PA Border Colors']);
    }
    if (param === 'PA Font Color') {
        return String(Soul.ChartEssentials.params['PA Font Color']);
    }      
    if (param === 'PA Border Width') {
        return Number(Soul.ChartEssentials.params['PA Border Width']);
    }    
    if (param === 'PA Responsive') {
        return eval(Soul.ChartEssentials.params['PA Responsive']);
    }     
    if (param === 'PA Display Legend') {
        return eval(Soul.ChartEssentials.params['PA Display Legend']);
    }
    if (param === 'PA Animate Rotate') {
        return eval(Soul.ChartEssentials.params['PA Animate Rotate']);
    }    
    if (param === 'PA Animate Scale') {
        return eval(Soul.ChartEssentials.params['PA Animate Scale']);
    }        
    if (param === 'PA Hover Color') {
        return String(Soul.ChartEssentials.params['PA Hover Color']);
    }
    if (param === 'PA Hover Border Color') {
        return String(Soul.ChartEssentials.params['PA Hover Border Color']);
    }    
    if (param === 'PA Hover Border Width') {
        return eval(Soul.ChartEssentials.params['PA Hover Border Width']);
    }  
    if (param === 'PA Context Width') {
        return eval(Soul.ChartEssentials.params['PA Context Width']);
    }        
    if (param === 'PA Context Height') {
        return eval(Soul.ChartEssentials.params['PA Context Height']);
    }     
    if (param === 'PA Context Pos') {
        return String(Soul.ChartEssentials.params['PA Context Pos']);
    }   
    if (param === 'PA Context Margin') {
        return Number(Soul.ChartEssentials.params['PA Context Margin']);
    }            
    if (param === 'PA Context Opacity') {
        return Number(Soul.ChartEssentials.params['PA Context Opacity']);
    }     
}

var soulBarChart = {
    type: 'bar',
    data: {
        labels: scEssentials('Bar Levels'),
        datasets: [{
            label: '',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: 'rgba(255, 255, 255, 1)'
                }
            }],            
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: 'rgba(255, 255, 255, 1)'
                }
            }]
        },


        tooltip: {
            enabled: false
        },

        responsive: false,

        legend: {
            display: false,
            labels: {
                fontColor: 'rgb(255, 255, 255)'
            }
        },


    }
};


var soulRadarChart = {
    type: 'radar',
    data: {
        labels: [],
        datasets: [
            {
                lineTension: 0,
                label: 'Points',
                fill: true,
                backgroundColor: 'rgba(250,241,109,0.5)',
                borderColor: 'rgba(250,241,109,0)',
                pointBackgroundColor: 'rgba(250,241,109,0)',
                borderWidth: 0,
                strokeColor: 'rgba(0,0,0,0)',
                pointStrokeColor: 'rgba(255,255,255,0)',
                pointHitRadius: '100px',
                data: []
            }
        ]
    },
    options: {
        responsive: false,
        scaleFontColor: 'rgba((255,0,0,1)',
        responsive: false,
        borderWidth: 2,
        scale: {
            type: 'radialLinear',
     
            fontSize: 0,
            borderColor: 'rgba(0,0,0,0)',
            pointLabels: {
                fontSize: 10,
                fontColor: 'rgba(255,255,255,1)'
            },
             ticks: {
                stepSize: 50,
                max: 200,
                beginAtZero: true,
                showLabels: true,
                fontColor: 'rgba((255,0,0,1)',
                fontSize: 10,
                showLabelBackdrop: false,
            }
        },
        legend: {
            display: false
        },
        tooltip: {
            enabled: false
        },        
    }
};

Soul.ChartEssentials.Graphics_createAllElements = Graphics._createAllElements;
Graphics._createAllElements = function () {
    Soul.ChartEssentials.Graphics_createAllElements.call(this);
    this._createChartCanvas();
};

Soul.ChartEssentials.Graphics_updateAllElements = Graphics._updateAllElements;
Graphics._updateAllElements = function () {
    Soul.ChartEssentials.Graphics_updateAllElements.call(this);
    this._updateChartCanvas();
};

Graphics._createChartCanvas = function () {
    this._chartCanvas = document.createElement('canvas');
    this._chartCanvas.id = 'ChartCanvas';
    this._updateChartCanvas();
    document.body.appendChild(this._chartCanvas);
};

Graphics._updateChartCanvas = function () {
    this._chartCanvas.width = 0;
    this._chartCanvas.height = 0;
    this._chartCanvas.style.zIndex = 5;
    this._chartCanvas.style.opacity = 0;
};

Window_Status.prototype.drawParameters = function (x, y) {
    
    if($dataActors[this._actor._actorId].useChartOnStatus) {
        if ($dataActors[this._actor._actorId].chartTypeStatus) {
            var chartType = $dataActors[this._actor._actorId].chartTypeStatus;
            var chartType2 = $dataActors[this._actor._actorId].barChartStatus;
            // RADAR
            if (chartType === 'radar') {
                var chart = soulRadarChart.data;
                chart.labels = [];
                chart.datasets[0].data = [];
            }           
            // SHOW RADAR
            // console.log(chartType);
            for (var i = 0; i < 6; i++) {
                var paramId = i + 2;
                chart.labels.push(TextManager.param(paramId));
                chart.datasets[0].data.push(this._actor.param(paramId));
            }
     
        }

    }


};

Window_Status.prototype.refresh = function () {
    this.contents.clear();
    if (this._actor) {
        var lineHeight = this.lineHeight();
        this.drawBlock1(lineHeight * 0);
        this.drawHorzLine(lineHeight * 1);
        this.drawBlock2(lineHeight * 2);
        this.drawHorzLine(lineHeight * 6);
        this.drawBlock3(lineHeight * 7);
        // this.drawHorzLine(lineHeight * 13);
        // this.drawBlock4(lineHeight * 14);
        if($dataActors[this._actor._actorId].useChartOnStatus) {
            if ($dataActors[this._actor._actorId].chartTypeStatus) {
                var actorChart = $dataActors[this._actor._actorId].chartTypeStatus;
                var actorChart2 = $dataActors[this._actor._actorId].barChartStatus;
                if (actorChart === 'radar')  {
                    // if (BarChart != null && typeof BarChart != 'undefined') {
                    //      BarChart.destroy();
                    // }

                    if (PolarAreaChart != null && typeof PolarAreaChart != 'undefined'    ) {
                        PolarAreaChart.destroy();
                    }
                    createRadarChart(lineHeight * 6.5);
                    
                }                                  
            } 
        }
   
    }
};

var BarChart = null;
createBarChart = function (y) {
    var context = document.getElementById('ChartCanvas').getContext('2d');
    context.clearRect(0, 0, Graphics.width, Graphics.height);
    context.canvas.width = scEssentials('PA Context Width');
    context.canvas.height = scEssentials('PA Context Height');
    context.canvas.style.position = scEssentials('PA Context Pos');;
    context.canvas.style.margin = scEssentials('PA Context Margin');;
    context.canvas.style.left = Graphics._canvas.offsetLeft + 'px';
    context.canvas.style.top = Graphics._canvas.offsetTop + y + 'px';
    context.canvas.style.opacity = scEssentials('PA Context Opacity');;
    BarChart = new Chart(context, soulBarChart);
}

var PolarAreaChart = null;
createPolarAreaChart = function (y) {
    var context = document.getElementById('ChartCanvas').getContext('2d');
    context.clearRect(0, 0, Graphics.width, Graphics.height);
    context.canvas.width = 290;
    context.canvas.height = 290;
    context.canvas.style.position = 'relative';
    context.canvas.style.margin = 0;
    context.canvas.style.left = Graphics._canvas.offsetLeft + 'px';
    context.canvas.style.top = Graphics._canvas.offsetTop + y + 'px';
    context.canvas.style.opacity = 1;
    PolarAreaChart = new Chart(context, soulPolarAreaChart);
}

var PolarAreaChartAlignment = null;
createPolarAreaChartAlignment = function (y) {
    var context = document.getElementById('ChartCanvas').getContext('2d');
    context.clearRect(0, 0, Graphics.width, Graphics.height);
    context.canvas.width = 500;
    context.canvas.height = 400;
    context.canvas.style.position = 'relative';
    context.canvas.style.margin = 0;
    context.canvas.style.left = Graphics._canvas.offsetLeft + 'px';
    context.canvas.style.top = Graphics._canvas.offsetTop + y + 'px';
    context.canvas.style.opacity = 1;
    PolarAreaChartAlignment = new Chart(context, soulPolarAreaChart);
}

var RadarChart = null;
createRadarChart = function (y) {
    var context = document.getElementById('ChartCanvas').getContext('2d');
    context.clearRect(0, 0, Graphics.width, Graphics.height);
    context.canvas.width = 290;
    context.canvas.height = 290;
    context.canvas.style.position = 'relative';
    context.canvas.style.margin = 0;
    context.canvas.style.left = Graphics._canvas.offsetLeft + 'px';
    context.canvas.style.top = Graphics._canvas.offsetTop + y + 'px';
    context.canvas.style.opacity = 1;
    RadarChart = new Chart(context, soulRadarChart);
}


Scene_Status.prototype.terminate = function() {
    Scene_MenuBase.prototype.terminate.call(this);
    Graphics._clearChartCanvas();
};

Graphics._clearChartCanvas = function () {
    if (PolarAreaChart != null) PolarAreaChart.destroy();
    if (BarChart != null) BarChart.destroy();
    if (RadarChart != null) RadarChart.destroy();
    var context = this._chartCanvas.getContext('2d');
    context.canvas.style.opacity = 0;
    context.clearRect(context.canvas.style.left, context.canvas.style.top, context.canvas.width, context.canvas.height);
};

Soul.ChartEssentials.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function () {
    if (!Soul.ChartEssentials.DataManager_isDatabaseLoaded.call(this))
        return false;
    if (!Soul.ChartEssentials.soulApplyChartTag) {
        this.processDatabaseChartUseStatus($dataActors);
        this.processActorStatusChart($dataActors);
        this.processActorBarChart($dataActors);
        Soul.ChartEssentials.soulApplyChartTag = true;
    }
    return true;
};

DataManager.processDatabaseChartUseStatus = function(group) {
  var note1 = /<(?:USE CHART ON STATUS|Use Chart On Status):[ ](.*)>/i;
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);
    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(note1)) {
        obj.useChartOnStatus = eval(RegExp.$1);
      }
    }
  }
};



DataManager.processActorStatusChart = function(group) {
    var note1 = /<(?:STATUS CHART TYPE|Actor Chart Type):[ ](.*)>/i;
    for (var n = 1; n < group.length; n++) {
      var obj = group[n];
      var notedata = obj.note.split(/[\r\n]+/);
      for (var i = 0; i < notedata.length; i++) {
        var line = notedata[i];
        if (line.match(note1)) {
          obj.chartTypeStatus = String(RegExp.$1);
        }
      }
    }
  };

  DataManager.processActorBarChart = function(group) {
    var note1 = /<(?:BAR|Bar):[ ](.*)>/i;
    for (var n = 1; n < group.length; n++) {
      var obj = group[n];
      var notedata = obj.note.split(/[\r\n]+/);
      for (var i = 0; i < notedata.length; i++) {
        var line = notedata[i];
        if (line.match(note1)) {
          obj.barChartStatus = String(RegExp.$1);
        }
      }
    }
  };
  