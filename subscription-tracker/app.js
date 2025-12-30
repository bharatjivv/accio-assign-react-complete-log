import express from 'express';
import { PORT } from './config/env.js';
import figlet from 'figlet';
import cookieParser from 'cookie-parser';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/users', userRouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send("Subscription tracker API");
})

app.listen(PORT, async () => {
    console.log(`Subscription tracker API running on http://localhost:${PORT}`);
    await connectToDatabase();
});

figlet("Talisman Tate", (err, data) => {
    console.log(data)
})

export default app;

// y8BBTEVaOp3d9CdM