function makeGrid() {
//    Refresh the canvas
    clearGrid();
//    Define the variable
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
//    Create a grid with submitted width and height
    for(var i=0; i<height; i++){
        row += "<tr>"
        col ="";
        for(var x=0; x<width; x++){
//            Select size input
           col += "<td><div class='cell' style='width:"+cellWidth+"px; height:"+cellHeight+"px' </div></td>"
        }
        row +=col +"</tr>"
        
    }
    table.innerHTML += row;

    return false;
}

//refresh the canvas by removing the content of the table
function clearGrid(){
    var table = document.getElementById("pixelCanvas");
    var cells = document.getElementsByClassName("cell");
    if(cells.length > 0){
        // remove table body
        table.firstElementChild.remove()
    }
}

//add listener to each cell in the grid
document.addEventListener('click', function (e) {
//    Update the selected cell with the selected color
     var color = document.getElementById("colorPicker").value;
   if(e.target.className == 'cell')
       e.target.style.backgroundColor =color;
    
},false);


