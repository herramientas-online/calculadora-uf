


function getUFValue(selector, day){
  $.get("https://my-currency-rates.herokuapp.com/uf.json", {}, function(res){
    console.log(res);
    $(selector).text( res["UFs"][0]["Valor"] );
    $(day).text( "(" +  res["UFs"][0]["Fecha"] + ")" );
  });
  return true;
}
