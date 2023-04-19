const model = {
    activeUserId: 1,
    inputs: {
        login: {
            username:"",
            password:"",
        },
        newCard: {
            cardName: "",
            holo: false,
            promo: false,
            cardSet: "",
        }
    },
    users: [
        {
            id: 1,
            username: "linn",
            password: "123",
        },
        {
            id: 2,
            username: "bror",
            password: "abc"
        }
    ],
    collections: [
        {
            ownerID: 1,
            cards:[
                {
                    cardName: "Charizard GX",
                    holo: true,
                    promo: true,
                    cardSet: "Hidden Fates"
                },
                {
                    cardName: "Lugia",
                    holo: true,
                    promo: false,
                    cardSet: "Celebrations"
                },
            ]
        },
        {
            ownerID: 2,
            cards:[
                {
                    cardName: "Shroomish",
                    holo: false,
                    promo: false,
                    cardSet: "Brilliant Stars"
                },
                {
                    cardName: "Mimikyu",
                    holo: true,
                    promo: false,
                    cardSet: "Brilliant Stars"
                },
            ]
        }
    ]
};