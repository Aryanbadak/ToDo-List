function getAndupdate(){
    console.log("updating.....");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([tit , desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit , desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
}
function update(){
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }

    // display in table

    let tablebody = document.getElementById("tablebody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button id="button-delete" onclick="deleted(${index})">Delete</button> </td>
        </tr>`;
    });
    tablebody.innerHTML = str;
}
add = document.getElementById("button-sub");
add.addEventListener("click", getAndupdate);
update();
function deleted(itemIndex){
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1)
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}
function clearStorage(){
    if(confirm("Do you really want to clear!")){
    console.log("clearing....")
    localStorage.clear();
    update();
    }
}