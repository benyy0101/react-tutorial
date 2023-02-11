//api/new-meetup
import {MongoClient} from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://admin:1111@cluster0.kdg0s8c.mongodb.net/test')
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup inserted!'});
    }

    if (req.method === 'GET'){

    }
}

export default handler;