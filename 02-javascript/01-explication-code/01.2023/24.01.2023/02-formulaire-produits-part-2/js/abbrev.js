const Categories = [
  {value: " ", text: "--Choose a category--"},
  {value: "Sport",    text: "Sport"},
  {value: "Casual",   text: "Casual"},
  {value: "Evening",  text: "Evening"},
  {value: "Relax",    text: "Relax"}
]; 
const Products = [];
createForm();
function createForm(){
  var model = myInput("model-input", "Enter the model name", "text");
  var brand = myInput("brand-input", "Enter the brand brand", "text");
  var price = myInput("price-input", "Enter the price", "number");
  var categories = mySelect("category-select", "", Categories);
  var sale = myInput("sale-input", "", "checkbox", "form-check-input");//Class bootstrap
  var btn = myButton("submit", "", "Add a product",  addProduct);
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
        model.input.value = ""; 
        brand.input.value = ""; 
        price.input.value = "";
        categories.select.value = "";
      }else{
        redBorder(obj);
      }
     function redBorder(x){
      //Error handling
     }
  }
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
	console.log(obj);
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
function myButton(_id, _class = "", _text,  _callback){ 
  var div = document.createElement("div");
  var btn = document.createElement("button");
  btn.className = "btn btn-success" + _class;
  btn.innerText = _text;
  btn.id = _id;
  btn.addEventListener("click", _callback);
  div.append(btn);  
  return div;
}