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
		
        data.forEach(function (d){
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
        })

		/*Ajout du nom*/		
		document.getElementById('titre').innerHTML += '<h2>' + nom +'</h2>';
		/*Ajout liste des ingredients*/
		for(var i = 0; i < ingredients.length; i++) {
			document.getElementById('divIngredient').innerHTML += '<p>'+ingredients[i]+'</p><br/>';
		}
		/*Ajout préparation*/
		for(var i = 0; i < preparation.length; i++) {
			document.getElementById('divPreparation').innerHTML += '<p>'+preparation[i]+'</p><br/>';
		}
		/*Ajout cuisson*/
		for(var i = 0; i < cuisson.length; i++) {
			document.getElementById('divCuisson').innerHTML += '<p>'+cuisson[i]+'</p><br/>';
		}
	})
}
