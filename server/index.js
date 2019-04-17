const {server} = require('./api/config/routes.js');



const port = process.env.PORT || 4000;


 server.listen(port, () => console.log(`server rolling on port ${port}`));
