
function searchdrug() {
  // clear results
  document.getElementById('drugsearchresults').innerHTML = ""
  // get search term from input
  var inputteddrug = document.getElementById('inputteddrug').value
  var searchresults = document.getElementById('drugsearchresults')

  $.ajax({
    url:'https://api.fda.gov/drug/event.json?api_key=x18Pqh3BwPdWpSrZBEGeRB4E95o1Ps9ATkWAjtte&search='+ inputteddrug +'&count=patient.reaction.reactionmeddrapt.exact',
    dataType: 'json',
    success: function(response){

      for (i=0; i < response.results.length;i++){

        searchresults.innerHTML += i+1+". "+response.results[i].term + "<br>"

      }

    },
    type: 'GET'
  })
}







// my personalized FDA API key - x18Pqh3BwPdWpSrZBEGeRB4E95o1Ps9ATkWAjtte
// ripped from "https://open.fda.gov/api/reference/""
// this is ripped off of the codify example
function search(){
	$("#effects").html('');
	var key = "7PcXD9iQU905xvCopWU8Nqkiy8GoiEnwpCQkcl5O"
	var searchTerm = document.getElementById("fdaSearch").value

	$.ajax({   

	   	url: "https://api.fda.gov/drug/event.json?api_key="+ key + "&search=" + searchTerm+"&count=patient.reaction.reactionmeddrapt.exact",
	   	dataType: "json",
	   	success: function(data) {
	   		for(i=0;i<15;i++){
	    		var results = (data.results[i].term)
          if(data.results[i].term === "DRUG INEFFECTIVE"){
            results[i].term = ""
          }else if(data.results[i].term === ""){
            document.write("Try another search") 
          }else{
            		$("#effects").append(results + " " + "<br>")
				console.log(data.results[i].term)
          }	    
			  }
	   	},
	   type: 'GET'
	});
}

// example API URLs that can be viewed on Postman, so that the exact JSON data pathway of interest can be found
// 'https://api.fda.gov/drug/event.json?api_key=x18Pqh3BwPdWpSrZBEGeRB4E95o1Ps9ATkWAjtte&search=weed&count=patient.reaction.reactionmeddrapt.exact'
// 'https://api.fda.gov/drug/event.json?api_key=x18Pqh3BwPdWpSrZBEGeRB4E95o1Ps9ATkWAjtte&search=lamictal&count=patient.reaction.reactionmeddrapt.exact'

// Can use Heroku: Cloud Application Platform at https://www.heroku.com/ to host any apps you make online
