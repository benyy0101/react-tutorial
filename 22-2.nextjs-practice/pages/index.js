import MeetupList from "../components/meetups/MeetupList";
import {MongoClient} from "mongodb";
import Head from "next/head";
import {Fragment} from "react";

// const DUMMY_DATA = [
//     {
//         id: 1,
//         title: 'temp',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/%D0%90%D0%BD%D1%81%D0%B0%D0%BC%D0%B1%D0%BB%D1%8C_%D0%BA%D0%BE%D0%BB%D0%B5%D0%B3%D1%96%D1%83%D0%BC%D1%83_%D0%9A%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B5%D1%86%D1%8C_DSC7894.jpg/500px-%D0%90%D0%BD%D1%81%D0%B0%D0%BC%D0%B1%D0%BB%D1%8C_%D0%BA%D0%BE%D0%BB%D0%B5%D0%B3%D1%96%D1%83%D0%BC%D1%83_%D0%9A%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B5%D1%86%D1%8C_DSC7894.jpg',
//         address: 'Some post address, AZ, 72291'
//     },
//     {
//         id: 2,
//         title: 'temp2',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Henties_bay.jpg/500px-Henties_bay.jpg',
//         address: 'Some post address2, AZ, 72291'
//     },
//     {
//         id: 3,
//         title: 'temp',
//         image: null,
//         address: 'Some post address3, AZ, 72291'
//     },
//     {
//         id: 4,
//         title: 'temp4',
//         image: null,
//         address: 'Some post address4, AZ, 72291'
//     }
// ]
const Homepage = (props) => {

    return (
        <Fragment>
            <Head>
                <title>ReMeetups</title>
                <meta
                    name='description'
                    content='Browse a huge list of highly active React meetups!'
                ></meta>
            </Head>
            <MeetupList meetups={props.meetups}/>

        </Fragment>

    );
};

// export async function getStaticProps() {
//     //fetch data here
//
//     return {
//         props: {
//             meetups:DUMMY_DATA
//         },
//         revalidate: 10,
//
//     };
// };

export async function getServerSideProps(context) {
    const client = await MongoClient.connect('mongodb+srv://admin:1111@cluster0.kdg0s8c.mongodb.net/test')
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.find({}).toArray();

    client.close();

    return {
        props: {
            meetups: result.map(meetup => (
                {
                    title: meetup.title,
                    address: meetup.address,
                    image: meetup.image,
                    id: meetup._id.toString(),
                }
            ))
        }
    }
}

export default Homepage
