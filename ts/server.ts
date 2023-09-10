import myExpress from 'express';
import myMorgan  from 'morgan';
import projectRouter from'./routes/productsRouters';

const app = myExpress();
app.use(myMorgan('tiny'));
app.use(myExpress.json())
app.use('/products',projectRouter);
const port = 3000;
app.listen(port, () => console.log(`server is run in port: ${port}`));
