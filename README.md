# nodejs creating server.js

`http` is a nodejs networking module

To include the HTTP module, use the `require()` method:

`http.createServer()` returns a new instance of the **http.Server** class

server.js

```server.js
    const server = http.createServer((req, res) => {
        //handle every single request with this callback
    })
```

setHeader('headername', value) sets an HTTP header value

server.js

```server.js
const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);

    //setting header content type
    res.setHeader('Content-Type', 'text/plain')
    res.write('Awesome it worked...');
    res.end();
})

server.listen(3000, 'localhost', ()=>{
    console.log('server is running...');
})
```

- The Content-Type header is used to indicate the media type of the resource. The media type is a string sent along with the file indicating the format of the file.

- To send data to the client in the response body, you use write(). It will send buffered data to the HTTP response stream.

- The request.finished property will be true if request.end() has been called. request.end() will automatically be called if the request was initiated via http.get().

- `server.listen` Starts the HTTP server listening for connections. This method is identical to server.listen() from net.Server.

sending html page to the browser

server.js

```server.js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);

    //setting header content type
    res.setHeader('Content-Type', 'text/html')

    fs.readFile('./view/index.html', (err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data)
        }
    })
})

server.listen(3000, 'localhost', ()=>{
    console.log('server is running...');
})
```

...

## Using Express

...

Request type:

- localhost:3000/blogs get
- localhost:3000/blogs/create get
- localhost:3000/blogs post
- localhost:3000/blogs/:id get
- localhost:3000/blogs/:id delete

- localhost:3000/blogs/:id put
