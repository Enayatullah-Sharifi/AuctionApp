fetch('http://localhost:1000/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
        query: `
            query{
                getItems {
                id
                name
                category
                startingBid
                minBid
                createdAt
                duration
                username
                bid {
                    body
                    username
                    createdAt
                }
                }
            }
        `
    })
})
.then(res => res.json())
.then(data => {
 data.data.forEach(data => {
    
 });
})