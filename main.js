var quote = new Map();

function addQuote() 
{
    quote.set('La technologie seule ne suffit pas','Steve Jobs');
    quote.set('The best way to predict the future is to invent it','Alan Kay');
    quote.set('My view is that there is no bad time to inovate','Jeff Bezos');
}

function randomQuote() {
    const random = Math.floor(Math.random() * 3);
    addQuote();
    let i = 0;
    var qu;
    var au;
    for(var [q,author] of quote)
        {
            if(i == random)
            {
                qu = q;
                au = author;
            }
            i += 1;
        }

    return [qu,au];
}

var [q,a] = randomQuote();
console.log(q + ', ' + a);