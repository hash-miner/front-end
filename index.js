'use strict';

let express = require('express');
let app = express();

app.use(express.static(`${__dirname}/build`));

app.use('*', (req, res) => res.sendFile(`${__dirname}/build/index.html`));

app.listen(process.env.PORT, () => console.log(`listening on ${process.env.PORT}`));