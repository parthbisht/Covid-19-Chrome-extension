$(document).ready(function(){
var url="https://api.covid19api.com/world/total"
		$.getJSON(url,function(data){
			console.log(data);
			var total_global=data.TotalConfirmed
			$("#totalG").append(total_global)
		})


var url="https://api.covid19india.org/data.json"	

		$.getJSON(url,function(data){
			console.log(data);
		
			var total_confirmed=data.statewise[0].confirmed
			var recovered=data.statewise[0].recovered
			var death=data.statewise[0].deaths
			var active=data.statewise[0].active
			$("#confirmed").append(total_confirmed)
			$("#recovered").append(recovered)
			$("#death").append(death)
			$("#active").append(active)
		})
})
