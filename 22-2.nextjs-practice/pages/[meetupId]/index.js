import {Fragment} from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import pepe from "../../styles/images/pepe.png"
const MeetupDetails = ()=>{
    return(
        <MeetupDetail
            image= {pepe}
            title='Firsts Meetup'
            address='BLABLA 18, AZ, 97333'
            description='This is a first meetup'
        />
    );
}
export default MeetupDetails;