const Categories = [
  {value: " ", text: "--Choose a category--"},
  {value: "Sport",    text: "Sport"},
  {value: "Casual",   text: "Casual"},
  {value: "Evening",  text: "Evening"},
  {value: "Relax",    text: "Relax"}
]; 
const Products = [];
const MainDiv = document.getElementById("main");
const MainDivRow = document.getElementById("row-main");
createForm();
function createForm(){
  var model = myInput("model-input", "Enter the model name", "text");
  var brand = myInput("brand-input", "Enter the brand", "text");
  var price = myInput("price-input", "Enter the price", "number");
  var categories = mySelect("category-select", "", Categories);
  var sale = myInput("sale-input", "", "checkbox", "form-check-input");//Class bootstrap
  var btn = myButton("submit", "btn-success", " Add a product",  addProduct, "fa-plus"); // // E-5.8 - DEBUT & FIN : ajout de btn-success et d'un icon
  var formDiv = document.getElementById("form-div");
  formDiv.append(model.div, brand.div, price.div, categories.div, sale.div, btn);
  function addProduct(){
      var obj = {};
      obj.model = model.input.value;
      obj.brand = brand.input.value;
      obj.price = price.input.value;
      obj.category = categories.select.value;
      if(obj.model && obj.brand && obj.price && obj.category)
      {
        Products.push(obj); 
        createCard(obj);
        model.input.value = ""; 
        brand.input.value = ""; 
        price.input.value = ""; 
        categories.select.value = ""; 
        
      }else{
        redBorder(obj);
        
      }
     function redBorder(x){
      console.log("Error handng");
     }
  }
}
function createCard(obj){
  var article = document.createElement("article"); 
  article.className = "card col-md-2";
  
  var div = document.createElement("div");
  div.className = "card-body";

  var h5 = document.createElement("h5");
  h5.className = "card-title model-name";
  h5.innerText = obj.model;

  var pBrand = document.createElement("p");
  pBrand.className = "card-text brand-name";
  pBrand.innerText = obj.brand;
  

  var pPrice = document.createElement("p");
  pPrice.className = "card-text price-name";
  pPrice.innerText = obj.price;
  

  var pCategory = document.createElement("p");
  pCategory.className = "card-text category-name";
  pCategory.innerText = obj.category;
 
  var btn = myButton("", "btn-primary", " " + obj.price, buyNow, "fa-basket-shopping");
  div.append(h5, pBrand, pPrice, pCategory, btn);
  article.append(div);
  MainDivRow.append(article);
}
function buyNow(){
console.log(this);
}
function myInput(_id, _placeholder, _type, _class = ""){ 
          var obj = {}
          obj.div = document.createElement("div");
          obj.input = document.createElement("input");
          obj.input.className = "form-control" + _class;
          obj.input.id = _id;
          obj.input.placeholder = _placeholder;
          obj.input.type = _type;
          // --
          obj.div.append(obj.input); 
          return obj;   
} 
function mySelect(_id, _class = "", _arr){
  var obj = {};
  obj.div = document.createElement("div");
  obj.select = document.createElement("select");
  obj.select.className = "form-select" + _class;
  obj.select.id = _id;
  for(let i = 0; i < _arr.length; i++){
    const opt = _arr[i];
    var option = document.createElement("option");
    option.value = opt.value;
    option.innerText = opt.text;
    obj.select.append(option);
  }
  obj.div.append(obj.select);
  return obj;
}
function myButton(_id, _class = "", _text,  _callback, _icon){
  var div = document.createElement("div");
  var btn = document.createElement("button");
  if(_icon){
    var i = document.createElement("i");
    i.className = "fa-solid " + _icon;
    btn.append(i);
  }
var span = document.createElement("span");
  span.innerText = _text;
  btn.className = "btn " + _class;
  btn.id = _id;
  btn.append(span);
  btn.addEventListener("click", _callback);
  div.append(btn);  
  return div;
} 