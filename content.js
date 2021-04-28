
window.onload = function() {

    var recipeDiv = document.getElementsByClassName("wprm-recipe-container")[0] || document.getElementsByClassName("tasty-recipes")[0] || document.getElementsByClassName("mv-create-card")[0]

    if(recipeDiv){
        console.log(recipeDiv)
        recipeDiv.scrollIntoView({behavior: "smooth"})
    }
    // your code here
 };



// function appendRecipe(){
//     var recipeDiv = wprm || tastyRecipes
//     console.log(recipeDiv)
//     var recipeOverlay = document.createElement("div")
//     recipeOverlay.id = "quickCookSidebar"
//     document.body.prepend(recipeOverlay)

//     var headerDiv = document.createElement("div")
//     headerDiv.id = "quickCookHeader"
//     recipeOverlay.appendChild(headerDiv).id = "quickCookRecipeHeader"

//     var closeButton = document.createElement("div")
//     closeButton.id = "quickCookClose"
//     var textContent = document.createElement("p")
//     textContent.innerText = "Just the Recipe"

    
//     headerDiv.appendChild(closeButton)
//     headerDiv.appendChild(textContent)
//     recipeOverlay.appendChild(recipeDiv).id = "quickCookRecipe"
// }


// function getRecipe(){
//     //grabs div by using frequently used class
//     var recipeDiv = document.getElementsByClassName("wprm-recipe-container")
//     console.log(recipeDiv)
//     //if exists, create right-justified HTML element 
//     appendRecipe(recipeDiv)
// }