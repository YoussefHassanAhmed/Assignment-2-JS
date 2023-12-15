var arrguote = [
    {
        quote: "―Oscar Wilde",
        authorQuote : "“Be yourself; everyone else is already taken.”"
    },
    {
        quote: "― Marcus Tullius Cicero",
        authorQuote : "“A room without books is like a body without a soul.”"
    },
    {
        quote: "― Mother Teresa",
        authorQuote : "“If you judge people, you have no time to love them.”"
    },
    {
        quote: "― Dr. Seuss",
        authorQuote : "“Sometimes the questions are complicated and the answers are simple.”"
    },
    {
        quote: "― Ralph Waldo Emerson",
        authorQuote : "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”"
    },

    {
        quote: "― Mark Twain",
        authorQuote : "“The man who does not read has no advantage over the man who cannot read.”"
    }
];

function generateQuote() {    
 document.getElementById("quoteOutput").innerHTML= arrguote[Math.floor(Math.random() * arrguote.length)].authorQuote;  
 document.getElementById("authorOutput").innerHTML= arrguote[Math.floor(Math.random() * arrguote.length)] .quote;
 }

