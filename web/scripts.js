/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://localhost:11511/users/webresources/model.users', true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  
  var l = data.length;
		
		if(l>0){
			
 
			// CREATE DYNAMIC TABLE.
			var table = document.createElement("table");
			table.style.width = '50%';
			table.setAttribute('border', '1');
			table.setAttribute('cellspacing', '0');
			table.setAttribute('cellpadding', '5');
			
			// retrieve column header ('Name', 'Email', and 'Mobile')
 
			var col = []; // define an empty array
			for (var i = 0; i < l; i++) {
				for (var key in data[i]) {
					if (col.indexOf(key) === -1) {
						col.push(key);
					}
				}
			}
			
			// CREATE TABLE HEAD .
			var tHead = document.createElement("thead");	
				
			
			// CREATE ROW FOR TABLE HEAD .
			var hRow = document.createElement("tr");
			
			// ADD COLUMN HEADER TO ROW OF TABLE HEAD.
			for (var i = 0; i < col.length; i++) {
					var th = document.createElement("th");
					th.innerHTML = col[i];
					hRow.appendChild(th);
			}
			tHead.appendChild(hRow);
			table.appendChild(tHead);		
		
                // CREATE TABLE BODY .
			var tBody = document.createElement("tbody");	
                        // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
			for (var i = 0; i < l; i++) {
			
					var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
					
					
					for (var j = 0; j < col.length; j++) {
						var td = document.createElement("td");
						td.innerHTML = data[i][col[j]];
						bRow.appendChild(td);
					}
					tBody.appendChild(bRow)
 
			}
			table.appendChild(tBody);	
			
			// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
			var divContainer = document.getElementById("root");
			divContainer.innerHTML = "";
			divContainer.appendChild(table);
                        }	
  }
  
// Send request
request.send();

function getId()
{
    var id= document.getElementById('id').value;
    if(id)
    {
        
        // Create a request variable and assign a new XMLHttpRequest object to it.
        var request = new XMLHttpRequest();

        // Open a new connection, using the GET request on the URL endpoint
        request.open('GET', 'http://localhost:11511/users/webresources/model.users/'+id , true);

        request.onload = function () {
          // Begin accessing JSON data here
          var r = JSON.parse(this.response);
          var data = [];
          data.push(r);
          
          var l = data.length;
		
		if(data && l>0){
			
 
			// CREATE DYNAMIC TABLE.
			var table = document.createElement("table");
			table.style.width = '50%';
			table.setAttribute('border', '1');
			table.setAttribute('cellspacing', '0');
			table.setAttribute('cellpadding', '5');
			
			// retrieve column header ('Name', 'Email', and 'Mobile')
 
			var col = []; // define an empty array
			for (var i = 0; i < l; i++) {
				for (var key in data[i]) {
					if (col.indexOf(key) === -1) {
						col.push(key);
					}
				}
			}
			
			// CREATE TABLE HEAD .
			var tHead = document.createElement("thead");	
				
			
			// CREATE ROW FOR TABLE HEAD .
			var hRow = document.createElement("tr");
			
			// ADD COLUMN HEADER TO ROW OF TABLE HEAD.
			for (var i = 0; i < col.length; i++) {
					var th = document.createElement("th");
					th.innerHTML = col[i];
					hRow.appendChild(th);
			}
			tHead.appendChild(hRow);
			table.appendChild(tHead);		
		
                // CREATE TABLE BODY .
			var tBody = document.createElement("tbody");	
                        // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
			for (var i = 0; i < l; i++) {
			
					var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
					
					
					for (var j = 0; j < col.length; j++) {
						var td = document.createElement("td");
						td.innerHTML = data[i][col[j]];
						bRow.appendChild(td);
					}
					tBody.appendChild(bRow)
 
			}
			table.appendChild(tBody);	
			
			// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
			var divContainer = document.getElementById("root");
			divContainer.innerHTML = "";
			divContainer.appendChild(table);
                        }
                    else
                    {
                     var divContainer = document.getElementById("root");
                     divContainer.innerHTML = "Utilisateur introuvable";

                    }
                    }
                    
     	request.send();	
           
    }
    else
    {
        var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://localhost:11511/users/webresources/model.users', true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  
  var l = data.length;
		
		if(data && l>0){
			
 
			// CREATE DYNAMIC TABLE.
			var table = document.createElement("table");
			table.style.width = '50%';
			table.setAttribute('border', '1');
			table.setAttribute('cellspacing', '0');
			table.setAttribute('cellpadding', '5');
			
			// retrieve column header ('Name', 'Email', and 'Mobile')
 
			var col = []; // define an empty array
			for (var i = 0; i < l; i++) {
				for (var key in data[i]) {
					if (col.indexOf(key) === -1) {
						col.push(key);
					}
				}
			}
			
			// CREATE TABLE HEAD .
			var tHead = document.createElement("thead");	
				
			
			// CREATE ROW FOR TABLE HEAD .
			var hRow = document.createElement("tr");
			
			// ADD COLUMN HEADER TO ROW OF TABLE HEAD.
			for (var i = 0; i < col.length; i++) {
					var th = document.createElement("th");
					th.innerHTML = col[i];
					hRow.appendChild(th);
			}
			tHead.appendChild(hRow);
			table.appendChild(tHead);		
		
                // CREATE TABLE BODY .
			var tBody = document.createElement("tbody");	
                        // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
			for (var i = 0; i < l; i++) {
			
					var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
					
					
					for (var j = 0; j < col.length; j++) {
						var td = document.createElement("td");
						td.innerHTML = data[i][col[j]];
						bRow.appendChild(td);
					}
					tBody.appendChild(bRow)
 
			}
			table.appendChild(tBody);	
			
			// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
			var divContainer = document.getElementById("root");
			divContainer.innerHTML = "";
			divContainer.appendChild(table);
                        }	
  }
  
// Send request
request.send();
    }

    
}

function testPost()
{
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:11511/users/webresources/model.users', true);
    xhr.setRequestHeader("Content-Type", "application/json");
var date = new Date(); var timestamp = date.getTime();
let Users = {
    id_user:1000,
    email:"e@g",
    nom:"n",
    prenom:"p",
    dateInscription: date
};
var json_data = JSON.stringify(Users);
        xhr.send({"dateInscription":"2005-07-09T22:00:00Z[UTC]","email":"sara.mazouzi@gmail.com","idUser":200,"nom":"mazouzi","prenom":"sara"});
xhr.send();
}