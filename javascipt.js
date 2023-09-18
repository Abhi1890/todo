function addtotaskinput(){ 
var data=document.getElementById('work').value;

let n=document.createElement('li');
n.innerHTML=data;
n.setAttribute('class',data);
if(data)document.getElementById('tasklist').appendChild(n);
}
function addtoprogressin(){var data=document.getElementById('work').value;

let n=document.createElement('li');
n.innerHTML=data;
n.setAttribute('class',data);
if(data)document.getElementById('progress').appendChild(n);
}
function addtocompletein(){

    var data=document.getElementById('work').value;

let n=document.createElement('li');
n.innerHTML=data;
n.setAttribute('class',data);
 if(data)document.getElementById('completelist').appendChild(n);
}
function deletefromtaskinput(){
var parentId = "tasklist"; 
var parentElement = document.getElementById(parentId);

if (parentElement) { 
  var  e=document.getElementById('workd').value;
  var elementsWithClassName = parentElement.getElementsByClassName(e);
  for (var i = elementsWithClassName.length - 1; i >= 0; i--) {
    var childNode = elementsWithClassName[i];
    childNode.remove(); 
  }
} else {
  console.log("Parent element not found.");
}
}
function deletefromprogressin(){
    var parentId = "progress"; 
    var parentElement = document.getElementById(parentId);
    
    if (parentElement) { 
      var  e=document.getElementById('workd').value;
      var elementsWithClassName = parentElement.getElementsByClassName(e);
      for (var i = elementsWithClassName.length - 1; i >= 0; i--) {
        var childNode = elementsWithClassName[i];
        childNode.remove(); 
      }
    } else {
      console.log("Parent element not found.");
    }
    }
    function deletefromcompletein(){
        var parentId = "completelist"; 
        var parentElement = document.getElementById(parentId);
        
        if (parentElement) { 
          var  e=document.getElementById('workd').value;
          var elementsWithClassName = parentElement.getElementsByClassName(e);
          for (var i = elementsWithClassName.length - 1; i >= 0; i--) {
            var childNode = elementsWithClassName[i];
            childNode.remove(); 
          }
        } else {
          console.log("Parent element not found.");
        }
        }