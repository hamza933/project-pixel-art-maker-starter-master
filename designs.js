//1- Define the variable
//2- Create a grid with submitted width and height
//3- add listener to each cell in the grid
//4- Update the selected cell with the selected color
//5- Test

// Select color input
// Select size input

    
// When size is submitted by the user, call makeGrid()

function makeGrid() {
    clearGrid();
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    var color = document.getElementById("colorPicker").value;
    var table = document.getElementById("pixelCanvas");
    var canvas = document.createElement('canvas');
    
    var row ="";
    var col =""; 

    table.style.width = "500px";
    table.style.height= "500px"

    var cellWidth =  500/width;
    var cellHeight = 500/height;
    for(var i=0; i<height; i++){
        row += "<tr>"
        col ="";
        for(var x=0; x<width; x++){
           col += "<td><div class='cell' style='width:"+cellWidth+"px; height:"+cellHeight+"px' </div></td>"
        }
        row +=col +"</tr>"
        
    }
    table.innerHTML += row;

    document.getElementById("demo").innerHTML = (height + width + color) ;
    return false;
}

function clearGrid(){
    var table = document.getElementById("pixelCanvas");
    var cells = document.getElementsByClassName("cell");
    if(cells.length > 0){
        table.firstElementChild.remove()
    }
}

document.addEventListener('click', function (e) {
     var color = document.getElementById("colorPicker").value;
   if(e.target.className == 'cell')
       e.target.style.backgroundColor =color;
    
},false);


