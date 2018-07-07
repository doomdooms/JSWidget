var inp = document.forms['cal'];
var input = inp.getElementsByTagName('input');
var cls_btn = document.getElementsByClassName('cls_button')[0];
var result_btn = document.getElementsByClassName('result_button')[0];

// Event handler

for (var i = 0; i < input.length; i++) {
  if (input[i].value != '=' && input[i].value != 'clear') {
    input[i].onclick = function() {
      calc(this.value);
    }
  }
}

function calc(value) {
  if(inp['result'].value == '0') {
    inp['result'].value = '';
  }

  inp['result'].value += value;
}

function clr() {
  inp['result'].value = 0;
}

cls_btn.onclick = function(){ clr(); }

function myresult() {
  var result = document.forms['cal']['result'];
  var calc = eval(result.value);

  inp['result'].value = calc;
}

result_btn.onclick = function() {
  try {
    myresult();
  }
  catch(err) {
    var result = input['result'];
    result.value = "Error";
  }
}
