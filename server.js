const express = require('express');
const app = express();

const {quotes} = require('./data')
const {getRandomElement} = require('./utils')


app.get('/api/quotes/random', (req, res, next) => {
    res.send({quote: getRandomElement(quotes)});
}) 

app.get('/api/quotes', (req, res, next) => {
   if (req.quotes !== undefined) {
    res.send({quotes: quotes})
   } else if (req.query.person) {
    const quotesByPerson = quotes.filter(quote => quote.person === req.query.person)
    res.send({
        quotes: quotesByPerson
    })
   }
})

app.post('/api/quotes', (req, res, next) => {
    const newQuote = {
        quote: req.query.quote,
        person: req.query.person
    }

    if (newQuote.person && newQuote.quote) {
        quotes.push(newQuote);
        res.send({
            quotes: newQuote
        })
    } else {
        res.status(400).send()
    }
})

const PORT = process.env.PORT || 4001; 
app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`)
});

app.use(express.static('public'));


