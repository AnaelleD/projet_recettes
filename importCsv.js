function importCsv(laRecette){
	/*window.location.replace("recette.html");*/
	
    d3.csv("recettes/Paella.csv", function(error, data){
		
        var ingredients = [];
        var preparation = [];
		var cuisson = [];
		
        data.forEach(function (d){
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
		
		/*Ajout liste des ingredients*/
		for(var i = 0; i < ingredients.length; i++) {
			document.getElementById('divIngredient').innerHTML += '<li class="list-group-item">'+ingredients[i]+'</li>';
		}
	})
}