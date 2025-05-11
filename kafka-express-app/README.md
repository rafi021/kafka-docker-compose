# Kafka Express App

This project is a simple Node.js Express application that connects to Apache Kafka. It allows you to publish messages to a Kafka topic and subscribe to messages from that topic.

## Project Structure

```
kafka-express-app
├── src
│   ├── app.js            # Entry point of the application
│   ├── kafka
│   │   ├── producer.js   # Kafka producer for publishing messages
│   │   └── consumer.js   # Kafka consumer for subscribing to messages
│   └── routes
│       └── index.js      # Route definitions for the application
├── package.json          # NPM configuration file
├── .env                  # Environment variables
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd kafka-express-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory and add your Kafka broker addresses and topic names. For example:
   ```
   KAFKA_BROKER=localhost:9092
   KAFKA_TOPIC=my-topic
   ```

4. **Run the application:**
   ```bash
   node src/app.js
   ```

## Usage

- To publish a message, send a POST request to `/publish` with a JSON body containing the message. For example:
  ```json
  {
    "message": "Hello Kafka!"
  }
  ```

- To subscribe to messages, send a GET request to `/subscribe`. The application will log incoming messages to the console.

## Dependencies

- Express
- kafka-node

## License

This project is licensed under the MIT License.