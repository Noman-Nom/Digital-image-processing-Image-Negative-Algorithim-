const initializeMatrix = (tableId,rows,cols)=>{
    const table = document.getElementById(tableId)
    for (let i = 0; i <rows; i++) {
    const row = table.insertRow(i)
    for (let j = 0; j < cols; j++) {
        const cell = row.insertCell(j)
        const input = document.createElement('input')
        input.type = 'number';
            input.min = '0';
            input.max = '15';
            input.value = '0';
            cell.appendChild(input)
        
        }
        
    }
    // console.log(table)

}


const calculateNegative = ()=>{

    const inputMatrix = getMatrixValues('matrix')
}


const getMatrixValues=(tableId)=>{
    const table = document.getElementById(tableId)
    // const values =[]
    console.log(table)



}
initializeMatrix('matrix',4,4)