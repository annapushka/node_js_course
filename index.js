const Application = require('./framework/Application.js');
const router = require('./src/user-router.js');
const jsonParser = require('./framework/parseJson.js');
const parseUrl = require('./framework/parseUrl.js');

const PORT = process.env.PORT || 3000;
const app = new Application();

app.use(jsonParser);
app.use(parseUrl(`http://localhost:${PORT}`));
app.addRouter(router);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
