import MeetupList from "../components/meetups/MeetupList";
import pepe from '../styles/images/pepe.png'
import Layout from "../components/layout/Layout";
import {useEffect, useState} from "react";

const DUMMY_DATA = [
    {
        id: 1,
        title: 'temp',
        image: pepe,
        address: 'Some post address, AZ, 72291'
    },
    {
        id: 2,
        title: 'temp2',
        image: null,
        address: 'Some post address2, AZ, 72291'
    },
    {
        id: 3,
        title: 'temp',
        image: null,
        address: 'Some post address3, AZ, 72291'
    },
    {
        id: 4,
        title: 'temp4',
        image: null,
        address: 'Some post address4, AZ, 72291'
    }
]
const Homepage = (props) => {

    return (<MeetupList meetups={props.meetups}/>
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

export async function getServerSideProps(context){
    const req = context.req;
    const res = context.res;

    return {
        props:{
            meetups:DUMMY_DATA
        }
    }
}
export default Homepage
