import mongoose from 'mongoose';
import Config from '../config/Config';

class Mongo {
  public async init() {
    const connection = mongoose.connection;

    connection.on('disconnected', () => {
      console.log('Database: Reconnecting database...');
      setTimeout(async () => {
        this.connect();
      }, 3000);
    });

    this.connect();
  }

  public async connect() {
    try {
      await mongoose.connect(Config.mongodb.uri, {
        keepAlive: true,
        socketTimeoutMS: 3000,
        connectTimeoutMS: 3000,
      });

      console.log('Database: Connected database');
    } catch (err) {
      console.error(err);
    }
  }
}

export default new Mongo();
