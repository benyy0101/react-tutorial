import {Fragment} from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import pepe from "../../styles/images/pepe.png"
import {MongoClient, ObjectId} from "mongodb";
import Head from "next/head";

const MeetupDetails = (props) => {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}'s Meetup</title>
                <meta
                    name='description'
                    content={props.meetupData.description}
                />

            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>

    );
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://admin:1111@cluster0.kdg0s8c.mongodb.net/test')
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.find({}, {_id: 1}).toArray();

    client.close()

    return {
        fallback: false,
        paths: result.map(meetup =>({
            params:{
                meetupId: meetup._id.toString()
            }
        }))

    }
}

export async function getStaticProps(context) {
    const client = await MongoClient.connect('mongodb+srv://admin:1111@cluster0.kdg0s8c.mongodb.net/test')
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const id = context.params.meetupId;
    const result = await meetupsCollection.findOne({_id: new ObjectId(id)});
    console.log(result)
    client.close()
    //fetch data here

    return {
        props: {
            meetupData: {
                title: result.title,
                image: result.image,
                address: result.address,
                description: result.description,
                id: result._id.toString()
            }
        }
    }
}

export default MeetupDetails;