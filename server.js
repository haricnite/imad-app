var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    articleone:
    {
    title:'ARTICLE 1',
    heading:'ARTICLE 1',
    date:'August 15,2017',
    content:`
            <p>
                This is my first article.This is my first article.This is my first article.This is my first article.This is my first
                article.This is my first article.This is my first article.
            </p>
        
        <p>
        This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This
        is my first article.This is my first article.
        
        </p>
        
        <p>
        This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This
        is my first article.This is my first article.
        </p>
        
        <p>
        This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This
        is my first article.This is my first article.
        
        </p>`
    
},
    articletwo:
    {
        title:'ARTICLE 2',
        heading:'ARTICLE 2',
        date:'August 16,2017',
        content:`
            <p>
                This is my second article.This is my second article.
            </p>`
        
       
        
    },
    articlethree:
    {
        title:'ARTICLE 3',
    heading:'ARTICLE 3',
    date:'August 17,2017',
    content:`
            <p>
                This is my third article.This is my third article.
            </p>`
        
        
    }
};
function createTemplate(data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;

var htmlTemplate=`
    <html>
    <head>
    <title>
     ${title}
     </title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link href="/ui/style.css" rel="stylesheet" />
      
    </head>
    
    <body>
        <div class="container">
        <div>
            <a href="/">HOME</a>
        </div>
        <hr/>
        ${heading}
        <div>
        ${date}
        </div>
        <div>
        ${content}
        </div>
       
    </body>
    
    
    
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});
app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
