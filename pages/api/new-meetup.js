//  /api/mew-meetup
import { MongoClient } from "mongodb";
async function handler(req, res) {
    if(req.method === 'POST') {
        const data = req.body;
        // const { title, image, address, description } = data;
            // #gBGBRM72931
        // storing data in database
        // mongodb+srv://RAJESH:<db_password>@nextjs.1aijdyj.mongodb.net/?retryWrites=true&w=majority&appName=nextjs
const client = await MongoClient.connect(
  'mongodb+srv://RAJESH:%23gBGBRM72931@nextjs.1aijdyj.mongodb.net/?retryWrites=true&w=majority&appName=nextjs'
);
        const db = client.db('meetups');

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup inserted!'});
    }
}

export default handler;