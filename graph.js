myChart = null;

function newdata() {
	ht = '<div class="uk-width-1-4"><input class="uk-input uk-form-width-small xaxis" type="text" placeholder="xaxis"></div><div class="uk-width-1-4"><input class="uk-input uk-form-width-xsmall yaxis" type="text" placeholder="X-Small"></div><div class="uk-width-1-4"><input class="uk-input uk-form-width-xsmall backcol" type="color" placeholder="X-Small"></div><div class="uk-width-1-4"><input class="uk-input uk-form-width-xsmall bordercol" type="color" placeholder="X-Small"></div>'
	$('#data').append(ht)
}

function getdata(){
	label = $('#label').val()
   graphtype = $('#graphtype').val()
   elx = $('.xaxis')
   ely = $('.yaxis')
   elback = $('.backcol')
   elborder = $('.bordercol')
   x = []
   y = []
   backcol = []
   bordercol = []
   for(i = 0; i < elx.length; i++){
       x.push(elx[i].value)
       y.push(ely[i].value)
       backcol.push(elback[i].value)
       bordercol.push(elborder[i].value)
   }
   result = [x, y, backcol, bordercol, graphtype, label]
   console.log(result)
   return result

}

function createchart(){
	console.log(myChart)
if(myChart){
myChart.destroy()
}
var ctx = document.getElementById('myChart').getContext('2d');
result = getdata()
x = result[0]
y = result[1]
backcol = result[2]
bordercol = result[3]
graphtype = result[4]
label = result[5]
if(graphtype == '1')
{
  alert('Please Select graphtype')
}
else if(x.length == 0){
alert('Enter atleat one data')
}
else{
myChart = new Chart(ctx, {
    data: {
        labels: x,
        datasets: [{
        	type: graphtype,
            label: label,
            data: y,
            backgroundColor:backcol,
            borderColor: bordercol,
            borderWidth: 2
        } ]
    },
});

}
}