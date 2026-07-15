const express = require('express');
const app = express();
const port = 5256;
const worldCup = [
 {
    name: "Nigeria",
    player:"Victor Oshimen",
    coach:"Finidi George"
 },
 {
    name:"England",
    player:"Harry Kane",
    coach:"Thomas Tuchel"
 },
 {
    country:"Argentina",
    player:"Lionel Messi",
    coach:"Lionel Scaloni"
 },
 {
    country:"France",
    player:"Kylian Mbappe",
    coach:"Didier Deschamps"
 },
 {
    country:"Brazil",
    player:"Neymar Jr",
    coach:"Carlo Ancelloti"
 },
 {
    country:"Germany",
    player:"Manuel Neuer",
    coach:"Julian Nagelsmann"
 },
 {
    country:"Spain",
    player:"Lamine Yamal",
    coach:"Luis Enrique"
 },
 {
    country:"Portugal",
    player:"Cristiano Ronaldo",
    coach:"Roberto Martinez"
 },
 {
    country:"Netherlands",
    player:"Virgil Van Dijk",
    coach:"Ronald Koeman"
 },
 {
    country:"Italy",
    player:"Nicolo Barella",
    coach:"Luciano Spalletti"
 }
];


app.get('/home',(req, res)=>{
    res.send('Welcome to backend class');
})

app.get('/worldcup', (req, res)=>{
    res.send(worldCup)
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})