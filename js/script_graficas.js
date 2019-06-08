//GRAFICAS CON PLOTLY---------------------------------------------------------------------------------------------------------
var poblacion2015=[1312544, 3315766, 712029, 899931, 5217908, 3556574, 8918653, 2954915, 711235, 1754754, 5853677, 3535251, 2858359, 7844830, 16187608, 4584471, 1903811, 1181050, 5119504, 3967889, 6168883, 2038372, 1501562, 2717820, 2966321, 2850330, 2395272, 3441698, 1272847, 8112505, 2097175, 1579209];
var poblacion2010=[1184996, 3155070, 637026, 822441, 4796580, 3406465, 8851080, 2748391, 650555, 1632934, 5486372, 3388768, 2665018, 7350682, 15175862, 4351037, 1777227, 1084979, 4653458, 3801962, 5779829, 1827937, 1325578, 2585518, 2767761, 2662480, 2238603, 3268554, 1169936, 7643194, 1955577, 1490668];
var superficie=[5618, 71446, 73922, 57924, 73289, 247455, 1485, 151563, 5625, 123451, 30608, 63621, 20846, 78599, 22357, 58643, 4893, 27815, 64220, 93793, 34290, 11684, 42361, 60983, 57377, 179503, 24738, 80175, 3991, 71820, 39612, 75539];

function drawChartPlotly1(){
  var trace1 = {
    y: [1312544, 3315766, 712029, 899931, 5217908, 3556574, 8918653, 2954915, 711235, 1754754, 5853677, 3535251, 2858359, 7844830, 16187608, 4584471, 1903811, 1181050, 5119504, 3967889, 6168883, 2038372, 1501562, 2717820, 2966321, 2850330, 2395272, 3441698, 1272847, 8112505, 2097175, 1579209],
    x:["AGS", "BC", "BCS", "CAM", "CHIA", "CHI", "CDMX", "COA", "COL", "DGO", "GTO", "GRO", "HGO", "JAL", "EDOMEX", "MICH", "MOR", "NAY", "NL", "OAX", "PUE", "QRO", "QR", "SLP", "SIN", "SON", "TAB", "TAM", "TLAX", "VER", "YUC", "ZAC"],
    name: 'POBLACION EN 2015',
    type: 'bar',
    marker: {
      color: 'rgb(81,45,168)'
    }
  };
  var trace2 = {
    y: [1184996, 3155070, 637026, 822441, 4796580, 3406465, 8851080, 2748391, 650555, 1632934, 5486372, 3388768, 2665018, 7350682, 15175862, 4351037, 1777227, 1084979, 4653458, 3801962, 5779829, 1827937, 1325578, 2585518, 2767761, 2662480, 2238603, 3268554, 1169936, 7643194, 1955577, 1490668],
    x:["AGS", "BC", "BCS", "CAM", "CHIA", "CHI", "CDMX", "COA", "COL", "DGO", "GTO", "GRO", "HGO", "JAL", "EDOMEX", "MICH", "MOR", "NAY", "NL", "OAX", "PUE", "QRO", "QR", "SLP", "SIN", "SON", "TAB", "TAM", "TLAX", "VER", "YUC", "ZAC"],
    name: 'POBLACION EN 2010',
    type: 'bar',
    marker: {
      color: 'rgb(135,45,8)'
    }
  };

  var data= [trace1,trace2];
  var layout= {barmode: 'group',
  title: 'SUPERFICIE DE LOS ESTADOS DENTRO DE LA REPUBLICA MEXICANA'
}
  Plotly.newPlot('grafica1', data, layout);  
}

 function drawChartPlotly2(){
  var trace1 = {
    x:["AGS", "BC", "BCS", "CAM", "CHIA", "CHI", "CDMX", "COA", "COL", "DGO", "GTO", "GRO", "HGO", "JAL", "EDOMEX", "MICH", "MOR", "NAY", "NL", "OAX", "PUE", "QRO", "QR", "SLP", "SIN", "SON", "TAB", "TAM", "TLAX", "VER", "YUC", "ZAC"],
    y:[5618, 71446, 73922, 57924, 73289, 247455, 1485, 151563, 5625, 123451, 30608, 63621, 20846, 78599, 22357, 58643, 4893, 27815, 64220, 93793, 34290, 11684, 42361, 60983, 57377, 179503, 24738, 80175, 3991, 71820, 39612, 75539],
    mode: 'markers',
    marker: {
      size: [5618*.0001, 71446*.0001, 73922*.0001, 57924*.0001, 73289*.0001, 247455*.0001, 1485*.0001, 151563*.0001, 5625*.0001, 123451*.0001, 30608*.0001, 63621*.0001, 20846*.0001, 78599*.0001, 22357*.0001, 58643*.0001, 4893*.0001, 27815*.0001, 64220*.0001, 93793*.0001, 34290*.0001, 11684*.0001, 42361*.0001, 60983*.0001, 57377*.0001, 179503*.0001, 24738*.0001, 80175*.0001, 3991*.0001, 71820*.0001, 39612*.0001, 75539*.0001]
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'SUPERFICIE DE LOS ESTADOS DENTRO DE LA REPUBLICA MEXICANA',
    showlegend: false,
  };
  
  Plotly.newPlot('grafica1', data, layout, {showSendToCloud:true});
 }

//GRAFICA 1 CON DD3.JS---------------------------------------------------------------------------------------------------------

  var gauge1 = loadLiquidFillGauge("svg1", 55);
      var config1 = liquidFillGaugeDefaultSettings();
      config1.circleColor = "#FF7777";
      config1.textColor = "#FF4444";
      config1.waveTextColor = "#FFAAAA";
      config1.waveColor = "#FFDDDD";
      config1.circleThickness = 0.2;
      config1.textVertPosition = 0.2;
      config1.waveAnimateTime = 1000;
      
  var gauge2= loadLiquidFillGauge("svg2", 28, config1);
      var config2 = liquidFillGaugeDefaultSettings();
      config2.circleColor = "#D4AB6A";
      config2.textColor = "#553300";
      config2.waveTextColor = "#805615";
      config2.waveColor = "#AA7D39";
      config2.circleThickness = 0.1;
      config2.circleFillGap = 0.2;
      config2.textVertPosition = 0.8;
      config2.waveAnimateTime = 2000;
      config2.waveHeight = 0.3;
      config2.waveCount = 1;

  var gauge3 = loadLiquidFillGauge("svg3", 43, config2);
      var config3 = liquidFillGaugeDefaultSettings();
      config3.textVertPosition = 0.8;
      config3.waveAnimateTime = 5000;
      config3.waveHeight = 0.15;
      config3.waveAnimate = false;
      config3.waveOffset = 0.25;
      config3.valueCountUp = false;
      config3.displayPercent = false;

//GRAFICA 2 CON D3.JS---------------------------------------------------------------------------------------------------------

var width = document.getElementById("grafica3").offsetWidth;
var height = document.getElementById("grafica3").offsetHeight;
var outerRadius = Math.min(width, height) * .5 - 10,
    innerRadius = outerRadius * .6;

var n = 10,
    data0 = d3.range(n).map(Math.random),
    data1 = d3.range(n).map(Math.random),
    data;

var color = d3.scale.category20();

var arc = d3.svg.arc();

var pie = d3.layout.pie()
    .sort(null);

var svg = d3.select("#grafica3").append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("margin","auto");

svg.selectAll(".arc")
    .data(arcs(data0, data1))
  .enter().append("g")
    .attr("class", "arc")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
  .append("path")
    .attr("fill", function(d, i) { return color(i); })
    .attr("d", arc);

transition(1);

function arcs(data0, data1) {
  var arcs0 = pie(data0),
      arcs1 = pie(data1),
      i = -1,
      arc;
  while (++i < n) {
    arc = arcs0[i];
    arc.innerRadius = innerRadius;
    arc.outerRadius = outerRadius;
    arc.next = arcs1[i];
  }
  return arcs0;
}

function transition(state) {
  var path = d3.selectAll(".arc > path")
      .data(state ? arcs(data0, data1) : arcs(data1, data0));

  // Wedges split into two rings.
  var t0 = path.transition()
      .duration(1000)
      .attrTween("d", tweenArc(function(d, i) {
        return {
          innerRadius: i & 1 ? innerRadius : (innerRadius + outerRadius) / 2,
          outerRadius: i & 1 ? (innerRadius + outerRadius) / 2 : outerRadius
        };
      }));

  // Wedges translate to be centered on their final position.
  var t1 = t0.transition()
      .attrTween("d", tweenArc(function(d, i) {
        var a0 = d.next.startAngle + d.next.endAngle,
            a1 = d.startAngle - d.endAngle;
        return {
          startAngle: (a0 + a1) / 2,
          endAngle: (a0 - a1) / 2
        };
      }));

  // Wedges then update their values, changing size.
  var t2 = t1.transition()
        .attrTween("d", tweenArc(function(d, i) {
          return {
            startAngle: d.next.startAngle,
            endAngle: d.next.endAngle
          };
        }));

  // Wedges reunite into a single ring.
  var t3 = t2.transition()
      .attrTween("d", tweenArc(function(d, i) {
        return {
          innerRadius: innerRadius,
          outerRadius: outerRadius
        };
      }));

  setTimeout(function() { transition(!state); }, 5000);
}

function tweenArc(b) {
  return function(a, i) {
    var d = b.call(this, a, i), i = d3.interpolate(a, d);
    for (var k in d) a[k] = d[k]; // update data
    return function(t) { return arc(i(t)); };
  };
}


//GRAFICA 1 CON GOOGLE CHARTS---------------------------------------------------------------------------------------------------------

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['ESTADO', 'SUPERFICIE'],
        ["AGS",5618], ["BC",71446], ["BCS",73922], ["CAM",57924], ["CHIA",73289], ["CHI",247455], ["CDMX",1485],
        [ "COA",151563], ["COL",5625], ["DGO",123451], ["GTO",30608], ["GRO",63621], ["HGO",20846], ["JAL",78599],
        ["EDOMEX",22357], ["MICH",58643], ["MOR",4893], ["NAY",27815], ["NL",64220], ["OAX",93793], ["PUE",34290],
        ["QRO",11684], ["QR",42361], ["SLP",60983], ["SIN",57377], ["SON",179503], ["TAB",24738], ["TAM",80175], 
        ["TLAX",3991],["VER",71820], ["YUC",39612], ["ZAC",75539]
      ]);

      var options = {
        title: 'SUPERFICIES DE LOS ESTADOS DE LA REPUBLICA MEXICANA',
        legend: 'none',
        pieSliceText: 'label',
        slices: {  4: {offset: 0.2},
                  12: {offset: 0.3},
                  14: {offset: 0.4},
                  15: {offset: 0.5},
        },
      };

      var chart = new google.visualization.PieChart(document.getElementById('grafica5'));
      chart.draw(data, options);
  }

//GRAFICA 2 CON GOOGLE CHARTS---------------------------------------------------------------------------------------------------------

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

  function drawVisualization() {
      var data = google.visualization.arrayToDataTable([
        ['MES', 'Bolivia', 'Ecuador', 'Madagascar', ' NUEVA Guinea', 'Rwanda', 'PROMEDIO'],
        ['2004/05',  165,      938,         522,             998,           450,      614.6],
        ['2005/06',  135,      1120,        599,             1268,          288,      682],
        ['2006/07',  157,      1167,        587,             807,           397,      623],
        ['2007/08',  139,      1110,        615,             968,           215,      609.4],
        ['2008/09',  136,      691,         629,             1026,          366,      569.6]  
      ]);

      var options = {
        title : 'PRODUCCION DE CAFE DE CADA PAIS MENSUALMENTE',
        vAxis: {title: 'TASAS'},
        hAxis: {title: 'MESES'},
        seriesType: 'bars',
        series: {5: {type: 'line'}}
      };

      var chart = new google.visualization.ComboChart(document.getElementById('grafica6'));
      chart.draw(data, options);
  }
