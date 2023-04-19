const app = document.getElementById('app');

loginView();
function loginView(){
    let html = `
    username:
        <input type="text" onchange="${model.inputs.login.username == this.value}"/> <br>
    password:  
        <input type="text" onchange="${model.inputs.login.password == this.value} "/> <br>
        <button onclick="loginCheck()">Login</button>
    `;
    app.innerHTML = html;
}


function mainView(){
    let html = ``;
    html+= `<button onclick="addnewCardView()">Add new Card</button> <br>
    ${getCollection(model.activeUserId)} `

    app.innerHTML = html;
}

function getCollection(userId){
    let html = ``;
    

    for(collectionIndex in model.collections){
        let ownerID = model.collections[collectionIndex].ownerID;
      
        if(userId == ownerID){
            let cards = model.collections[collectionIndex].cards;
            
            for(let i = 0; i < cards.length; i++)
                html += `<div>${cards[i].cardName} - ${cards[i].cardSet} <br>
                Holo: ${cards[i].holo ? "Yes" : "No"} <br>
                Promo: ${cards[i].promo ? "Yes" : "No"} <br>
                </div> <br>`;
        }
    }
    return html;
}

function addnewCardView(){
    let html =  `
    CardName: <input type="text" onchange="${model.inputs.newCard.cardName == this.value}"/> <br>
    CardSet: <input type="text" onchange="${model.inputs.newCard.cardSet == this.value}"/> <br>
    Holo? <input type="checkbox" onchange="${model.inputs.newCard.holo == this.value}"/> <br>
    Promo? <input type="checkbox" onchange="${model.inputs.newCard.promo == this.value}"/> <br>
    <button onclick="addCard()"> Add </button>
    `;
    console.log(model.inputs)
    app.innerHTML = html;
}