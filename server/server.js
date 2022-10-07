const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});

app.use('/api/list', require('./routes/listRouter'));
app.use('/api/add', require('./routes/addRouter'));
app.use('/api/purchase', require('./routes/purchaseRouter'));
