import express, { Request, Response } from 'express';
export declare function produceMessage(topic: string, message: string): Promise<void>;

import { produceMessage as kafkaProduceMessage } from '../kafka/producer';
import { consumeMessages } from '../kafka/consumer';


const router = express.Router();

router.post('/publish', async (req: Request, res: Response) => {
    const { topic, message } = req.body;
    try {
        await kafkaProduceMessage(topic, message);
        res.status(200).send('Message published successfully');
    } catch (error: any) {
        res.status(500).send('Error publishing message: ' + error.message);
    }
});

router.get('/subscribe', (req: Request, res: Response) => {
    consumeMessages();
    res.status(200).send('Subscribed to messages');
});

export const setRoutes = (app: express.Application): void => {
    app.use('/api', router);
};