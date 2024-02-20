const Application = require('./framework/Application.js');
const router = require('./src/user-router.js');
const jsonParser = require('./framework/parseJson.js');
const parseUrl = require('./framework/parseUrl.js');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = new Application();

app.use(jsonParser);
app.use(parseUrl(`http://localhost:${PORT}`));
app.addRouter(router);


const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://user:123@cluster0.4comu.mongodb.net/my');
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();
