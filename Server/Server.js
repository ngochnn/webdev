const express = require('express');
//console.log("Server Start");
const app = express();
    //app.use(cors(corsOptions));
    const cors = require('cors')

    const bodyParser = require('body-parser');//phần thêm vào

	var corsOptions = {
	  origin: 'http://localhost:4200',
	  //domain được phép gọi request mà server chấp nhận (vd: request đến từ http://localhost:4200  được server cho phép), 
	  //giả sử node server là http://localhost:8000
	  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
	};
	
	
	app.listen(8000, () => {
		console.log('Server Started!');
      });
      app.use(cors(corsOptions)); 

      app.use(bodyParser.json());//phần thêm vào

      app.route('/api/items').get((req, res) => {
        console.log('items');
          res.send([{ name: 'Nintendo Switch Special Edition', id:'CSSWNeonEdition',image:'https://bom.to/jQAKoK',developer:'Nintendo PTD', price:'9500000',quantity:'398g'}, 
          { name: 'PlayStation 4 Pro', id:'CSPS47200Pro',image: 'https://bom.to/yXOuyH', developer:'Sony Interactive Entertainment', price:'9990000',quantity:'3.3kg'},
          { name: 'PlayStation 4 Slim', id:'CSPS42200Slim',image: 'https://bom.to/zQMs4q', developer:'Sony Interactive Entertainment', price:'6790000',quantity:'2.1kg'},
        ]
          );
      });

      // dung cho phan insert
		app.route('/api/insert').post((req, res) => {
		 
		  console.log('insert account');
		  console.log('account info:'+req.body);
			res.send(201, req.body);
      });
      
      // app.route('/api/insertitem').post((req, res) => {
		 
      //   console.log('insert item');
      //   console.log('item info:'+req.body);
      //   res.send(201, req.body);
      //   });