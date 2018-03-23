'use strict';

let express = require('express');
let app = express();

app.use('{,0}', (req, res) => res.sendFile(`${__dirname}/build/index.html`));

app.listen(process.env.PORT, () => console.log(`listening on ${process.env.PORT}`));