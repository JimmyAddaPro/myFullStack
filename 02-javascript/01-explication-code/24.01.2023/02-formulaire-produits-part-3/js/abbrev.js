const category = ["chose", "Sport", "Casual", "Evening", "Relax"];
// const Category = [
//     {value: "", text: "--Choose a category--"},
//     {value: "Sport", text: "Sport"},
//     {value: "Casual", text: "Casual"},
//     {value: "Evening", text: "Evening"},
//     {value: "Relax", text: "Relax"}
// ];
createForm();
function createForm(){
  var model = myInput("model-input", "Enter the model name", "text");
  var brand = myInput("brand-input", "Enter the brand brand", "text");
  var price = myInput("price-input", "Enter the price", "number");
  var sale = myInput("sale-input", "", "checkbox", "form-check-input");
  var categorie = mySelect("category-select", "", category);
  var btn = myButton("submit", "", "Add a product",  addProduct);
  var formDiv = document.getElementById("form-div");
  formDiv.append(model, brand, price, sale, categorie, btn); 
  function addProduct(){
    console.log("added a product. Et ça c'est cool dans la vie.")
  }
}
function myInput(_id, _placeholder, _type, _class = ""){ 
  var div = document.createElement("div");
  var input = document.createElement("input");
  input.className = "form-control" + _class;
  input.id = _id;
  input.placeholder = _placeholder;
  input.type = _type;
  div.append(input);  
  return div;
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
function mySelect(_id, _class = "", _option_array){
    
    var div = document.createElement("div");
    var select = document.createElement("select");
    select.id = _id;
    select.className = _class;
    var options = "";
    for(let i = 0; i < _option_array.length; i++){
        console.log(_option_array[i]+ "\n");
        if(_option_array[i]==="chose"){
            options = '<option value="none">Select a category</option>'; 
        }else{
            options += '<option value=' + _option_array[i] + '>' + _option_array[i] + '</option>';
        }
    }
    select.innerHTML = options;
    select.append(options);
    
    div.append(select);
    return div;
}