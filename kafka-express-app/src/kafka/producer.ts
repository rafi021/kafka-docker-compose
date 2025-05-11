import { Kafka } from 'kafkajs';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const kafka = new Kafka({
    clientId: process.env.KAFKA_CLIENT_ID || 'default-client-id',
    brokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),
});

const producer = kafka.producer();

export const produceMessage = async (topic: string, message: string): Promise<void> => {
    await producer.connect();
    // console.log('Kafka Brokers:', process.env.KAFKA_BROKERS);
    await producer.send({
        topic: topic || process.env.KAFKA_TOPIC || 'default-topic',
        messages: [{ value: message }],
    });
    console.log(`Message sent: ${message}`);
    await producer.disconnect();
};