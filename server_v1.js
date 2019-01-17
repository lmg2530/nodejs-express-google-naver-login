var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http');

//npm install google-auth-library --save
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false }))

app.get('/login',function(req,res){
	console.log('hello get login');
	fs.readFile('google_api.html', function(error,data){
		if(error){
			console.log(err);
			res.status(500).send('internal Server Error');
			
		}else{
			res.writeHead(200,{'Content-Type':'te xt/html'})
			res.end(data,'utf-8');
			
		}
	});
})

app.post('/login',function(req,res){	
	console.log('hello post login');
	const {OAuth2Client} = require('google-auth-library');
	const CLIENT_ID = '#';
	var name = JSON.stringify(req.body);
  	var token = JSON.parse(name);
	token = token.idtoken;
	
	const client = new OAuth2Client(CLIENT_ID);
	async function verify() {
  	const ticket = await client.verifyIdToken({
      idToken: token,
      audience:CLIENT_ID ,  
      //  Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  	});
  	const payload = ticket.getPayload();
  	//const userid = payload['sub'];
  	// If request specified a G Suite domain:
  	//const domain = payload['hd'];
  	// If you want to restrict access to only members of your G Suite domain, also verify the hd claim matches your G Suite domain name.

  	//do something.
  	res.send('login success');
	}
	verify().catch(console.error);

	
})
app.get('/login_N',function(req,res){
	fs.readFile('naver_login_main.html', function(error,data){
		if(error){
			console.log(err);
			res.status(500).send('internal Server Error');
			
		}else{
			res.writeHead(200,{'Content-Type':'text/html'})
			res.end(data,'utf-8');
		}
	});
})

app.get('/login_NC',function(req,res){
	fs.readFile('naver_login.html', function(error,data){
		if(error){
			console.log(err);
			res.status(500).send('internal Server Error');
			
		}else{
			res.writeHead(200,{'Content-Type':'text/html'})
			res.end(data,'utf-8');
		}
	});
})

app.get('/login_success',function(req,res){
	fs.readFile('main.html', function(error,data){
		if(error){
			console.log(err);
			res.status(500).send('internal Server Error');
			
		}else{
			res.writeHead(200,{'Content-Type':'text/html'})
			res.end(data,'utf-8');
		}
	});
})

http.createServer(app).listen(3003, function(){  
  console.log("Http Server listening on port " + 3003);
});

// These six fields are included in all Google ID Tokens.
// { 
//   iss: '#',
//   sub: '#',
//   azp: '#', //If it does, then the token is both valid and intended for your client, and you can safely retrieve and use the user's unique Google ID from the sub claim
//   aud: '#', //Once you get these claims, you still need to check that the aud claim contains one of your app's client IDs
//   iat: #,
//   exp: #,
  
//   jti: '0debbc44af4ab891aa3470f0aae9d19c0b99212f',
//   at_hash: 'KO8HX-8uv12CyGzrYfu-6w',
 
//  // These seven fields are only included when the user has granted the "profile" and
//  // "email" OAuth scopes to the application.
//   email: '#',
//   email_verified: #,
//   name: '#',
//   picture: '#',
//   given_name: '#',
//   family_name: '#',
//   locale: '#'
// }
