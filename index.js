const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // for avoiding deployment related issues


const users = [
    { id: 1, name: 'Mahdy', email: 'mahdy@gmail.com' },
    { id: 2, name: 'Mahin', email: 'mahin@gmail.com' },
    { id: 3, name: 'Mehat', email: 'mehat@gmail.com' }
]

app.get('/', (req, res) => {
    res.send('Users Management server is running')
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(port, () => {
    console.log(`Server running at port : ${port}`);
})