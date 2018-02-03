function getRecipe1(){
	var laRecette = document.getElementById("sel1").value;
	var queryString = "?recette=" + laRecette;
	window.location.href = "recette.html" + queryString;
}
function getRecipe2(){
	var laRecette = document.getElementById("sel2").value;
	var queryString = "?recette=" + laRecette;
	window.location.href = "recette.html" + queryString;
}
function getRecipe3(){
	var laRecette = document.getElementById("sel3").value;
	var queryString = "?recette=" + laRecette;
	window.location.href = "recette.html" + queryString;
}

// Fonction pour récupérer le nom de la recette dans l'url
function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
	
function importCsv(){
	var laRecette = getParameterByName('recette');
	
    d3.csv("recettes/"+laRecette+".csv",  function(error, data){
	
		var nom = [];
        var ingredients = [];
        var preparation = [];
		var cuisson = [];

		for (var i = 0; i < data.length; i++){
			var d = data[i];
            if(d.type == "Nom"){
                nom.push(d.detail);
            }			
            if(d.type == "Ingredients"){
                ingredients.push(d.detail);
            }
			if(d.type == "Preparation"){
                preparation.push(d.detail);
            }
			if(d.type == "Cuisson"){
                cuisson.push(d.detail);
            }
        }

		/*Ajout du nom*/		
		document.getElementById('titre').innerHTML += '<h2>' + nom +'</h2>';
		
		/*Ajout de la photo*/		
		document.getElementById('titre').innerHTML += '<img src="images/'+laRecette+'.jpg" class="img-responsive img-circle margin" style="display:inline" alt="plat" width="350" height="350">';
		
		/*Ajout liste des ingredients*/
		var ingredientsOK = '';
		for(var i = 0; i < ingredients.length; i++) {
			ingredientsOK+=ingredients[i]+' , ';
		}
		ingredientsOK = ingredientsOK.slice(0,-2); /*Enlève la dernière virgule*/
		document.getElementById('divIngredient').innerHTML += '<p>'+ingredientsOK+'</p>';
		
		/*Ajout préparation*/
		var preparationOK = '';
		for(var i = 0; i < preparation.length; i++) {
			preparationOK+=preparation[i]+' <br> ';
		}
		document.getElementById('divPreparation').innerHTML += '<p>'+preparationOK+'</p>';
		
		/*Ajout cuisson*/
		for(var i = 0; i < cuisson.length; i++) {
			document.getElementById('divCuisson').innerHTML += '<p>'+cuisson[i]+'</p>';
		}
	})
}
