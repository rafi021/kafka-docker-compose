import { Kafka } from 'kafkajs';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const kafka = new Kafka({
    clientId: process.env.KAFKA_CLIENT_ID || 'default-client-id',
    brokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),
});

const consumer = kafka.consumer({ groupId: process.env.KAFKA_GROUP_ID || 'default-group-id' });

export const consumeMessages = async (): Promise<void> => {
    await consumer.connect();
    await consumer.subscribe({ topic: process.env.KAFKA_TOPIC || 'default-topic', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log("Recieved Message:" ,{
                topic,
                partition,
                value: message.value?.toString(),
            });
        },
    });
};