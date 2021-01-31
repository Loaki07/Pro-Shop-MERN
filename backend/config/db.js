import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
  try {
    const mongoDBUri = process.env.MONGO_URI;
    const conn = await mongoose.connect(mongoDBUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDb Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
