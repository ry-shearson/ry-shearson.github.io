$(document).ready(function() {

  $('form').submit(function(e) {
    e.preventDefault();
    $('#results').html('')
    findDrinks($('#drink-name').val())
    this.reset()
  })

  $(document).on('click', '.title-and-image', function(e) {
    e.preventDefault();
    $('#results').html('')
    findRecipe($(this).text())
  })


  function findDrinks(name) {
    $.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + name + '&key=1', function(data) {
      showDrinks(data.drinks)
    })
  }

  function findRecipe(name) {
    $.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name + '&key=1', function(data) {
      showRecipe(data.drinks)
    })
  }


  // Helpers

  function showDrinks(drinks) {
    drinks.forEach(function(drink) {
      $('#results').append(createDrinkDiv(drink));
    })
  }

  function showRecipe(drink) {
    drink.forEach(function(i) {
      $('#results').append(createRecipeDiv(i));
    })
  }

  function createDrinkDiv(drink) {
    var container = $('<div class="results-drink"></div>')
    container.append(createTitleAndImageDiv(drink))
    return container
  }

  function createTitleAndImageDiv(drink) {
    var div = $('<div class="title-and-image"></div>')
    var h2 = $('<h2></h2>').text(drink.strDrink)
    var img = $('<img>').attr('src', drink.strDrinkThumb)
    div.append(h2)
    div.append(img)
    return div;
  }

  function createRecipeDiv(drink) {
    var container = $('<div class="results-drink"></div>')
    container.append(createTitleAndImageDiv(drink))
    container.append(createInstructions(drink))
    return container
  }

  function createInstructions(drink) {
    var div = $('<div class="instructions"></div>')
    div.append('<h2 class="indgredient-title">Ingredients</h2>')
    div.append(parseIngredients(drink))
    div.append('<h2>Instructions</h2>')
    div.append(drink.strInstructions)
    return div
  }

  function parseIngredients(drink) {
    console.log(drink)
    var i = 1;
    var list = $('<ul></ul>')
    while (i < 16) {
      var ingredient = drink['strIngredient' + i]
      var amount = drink['strMeasure' + i]
      if (ingredient == null || ingredient == "") {
        i += 1
      } else {
        list.append('<li>' + amount + ' : ' + ingredient + '</li>');
        i += 1
      }
    }
    return list
  }
});