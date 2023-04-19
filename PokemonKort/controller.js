function loginCheck(){
    let loginN = model.inputs.login.username;
    let loginP = model.inputs.login.password;
    
    for(user of model.users){
       if(user.username == loginN && user.password == loginP){
        model.activeUserId = user.id;
       }
    }
    mainView();
}

function addCard(){
    let cName=model.inputs.newCard.cardName;
    console.log(cName, " i add")
    //pushe newcard til activeusers cardlist
    for(collectionIndex in model.collections){
        if(model.collections[collectionIndex].ownerID == model.activeUserId){
            model.collections[collectionIndex].cards.push(model.inputs.newCard)
        }
    }
    mainView();
}