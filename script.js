const initializeMatrix = (tableId, rows, cols) => {
  const table = document.getElementById(tableId);
  for (let i = 0; i < rows; i++) {
    const row = table.insertRow(i);
    for (let j = 0; j < cols; j++) {
      const cell = row.insertCell(j);
      const input = document.createElement("input");
      input.type = "number";
      input.min = "0";
      input.max = "15";
      input.value = "0";
      cell.appendChild(input);
    }
  }
  // console.log(table)
};

const calculateNegative = () => {
  const inputMatrix = getMatrixValues("matrix");
  // we are getting inputMatrix sucessfuly
  // console.log("input ", inputMatrix)

  const resultMatrix = inputMatrix.map((row)=>(

       
    row.map((value)=>{

        console.log( `15 - ${value} = ${15-value}` )
        value = 15- value

        return value
    }
    
    )
  ))


  
//    here we calculated image negetive by using doubel map function 
//  1- firts map to get inputmatrix which is our original matrix 
//  2 - second one is for each row the we calculated each cell image negetive
  console.log("calculated values = " , resultMatrix)

  displayMatrix('resultMatrix', resultMatrix)

};

const getMatrixValues = (tableId) => {
  const table = document.getElementById(tableId);
  const values = []; // initialize emty arry to store rows and cols

  // console.log(table.rows)
//   console.log(table.cells);

  for (let i = 0; i < table.rows.length; i++) {
    values[i] = []; // initialize emty arry to store rows values

    // console.log(values)

    //  apply loop to  extract cols in current rows

    for (let j = 0; j < table.rows[i].cells.length; j++) {
      //  acces input in current row current cell
      const input = table.rows[i].cells[j].querySelector("input");


      // store all input in  values array  in

      values[i][j] = parseInt(input.value);
    }
  }

  console.log("input values = " , values);
  return values;
};

//  for dispaly result matrix

const displayMatrix = (tableId , resultMatrix)=>{
    const table = document.getElementById(tableId)
    console.log("final result",  table) 

    //  clearing prev content

    while (table.rows.length > 0) {
        table.deleteRow(0);
    }


    for (let i = 0; i < resultMatrix.length; i++) {
        const row = table.insertRow(i)
        for (let j = 0; j <resultMatrix[i].length; j++) {
            const cell = row.insertCell(j)

            cell.appendChild(document.createTextNode(resultMatrix[i][j]))

            // console.log(` 15 - ${j} = ${15-j}`)

            // console.log(`final col ${j}`,  cell)
            
            
        }
        // console.log(`final row ${i}`,  row) 
        
    }


}

initializeMatrix("matrix", 4, 4);
