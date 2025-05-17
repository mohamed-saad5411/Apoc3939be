import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect(mongodb+srv://Apoc3939:aboc3939@cluster0.z6yv1cg.mongodb.net/Apoc3939);
    } catch (error) {
        console.log(error);
    }

}


// export const dbConnection = () => { mongoose.connect(process.env.LOCAL_HOST) }
// export const dbConnection = () => {"mongodb+srv://Apoc3939:aboc3939@cluster0.z6yv1cg.mongodb.net/Apoc3939" }


