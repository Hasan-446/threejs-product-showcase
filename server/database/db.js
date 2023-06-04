import mongoose from 'mongoose';
const Connection = async (userName,password) => {
 const Url = `mongodb+srv://${userName}:${password}@crud-app.dyij5ts.mongodb.net/?retryWrites=true&w=majority`
 try {
    await mongoose.connect(Url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(" database connection successful");
  } catch (error) {
    console.log("error in connection", error);
  }
}
export default Connection;
