import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TicketStatusIndicator from "../../components/TicketStatusIndicator/TicketStatusIndicator";
import ConfirmDelete from "../../components/ConfirmDelete/ConfirmDelete";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ReplySection from "../../components/ReplySection/ReplySection";
import './TicketInfo.css';

const students = ["Kevin Tang", "Shabib Huq", "Rhea Mane", "Issac Alemu", "Ryan Radtke"]
const TAs = ["Vinayak Sharma"]
const ProjectName = "Capstone Ticketing System"
const ticketID = "CPSTN1-2345678"
const TicketSubject = "Sponsor Isn’t Responding"
const TicketDescription = "We’re having some communication issues with our project sponsor. Our sponsor missed a scheduled meeting with the team on Monday and has not responded to any email communication all week. We are unable to get our sprint document signed for this week because the sponsor is unresponsive. How should we approach this situation and can we get an extension on the sprint document this week?"

const replyList = [
    { id: 1, replyText: "Hi team, sorry to hear this. Has this happened before in the past?", author: "Jane Doe", time: "2 November 6:30pm" },
    { id: 2, replyText: "No the sponsor is typically responsive but has not responded in a week.", author: "Kevin Tang", time: "2 November 7:30pm" },
    { id: 3, replyText: "Ok I would recommend you to send a follow up. We will extend your deadline for the sprint retrospective this week.", author: "Jane Doe", time: "2 November 8:30pm" }
]


const TicketInfo = () => {
    const [deleteOpen, setDeleteOpen] = React.useState(false);

    const handleBack = () => {
        console.log("Back Button Clicked")
    }

    const handleEditTicket = () => {
        console.log("Edit Ticket Button Clicked")
    }

    const handleDeleteTicket = () => {
        console.log("Delete Ticket Button Clicked")
        setDeleteOpen(true)
    }

    const deletePopupClose = () => {
        setDeleteOpen(false)
    }

    return(
        <div className="ticketInfoContainer">
            <Stack className="ticketInfo">
                <Button
                    variant="text"
                    className="backButton"
                    onClick={handleBack}
                    startIcon={<ArrowBackIosNewIcon />}
                >
                Back
                </Button>
                <div className="ticketId">{ticketID}</div>
                <div className="subject">{TicketSubject}</div>
                <Stack direction="row" className="statusButtons">
                    <TicketStatusIndicator status={"Open"}/>
                    <TicketStatusIndicator status={"Escalated"}/>
                    <Button
                        variant="contained"
                        className="editButton"
                        onClick={handleEditTicket}
                    >
                    Edit Ticket
                    </Button>
                    <Button
                        variant="contained"
                        className="deleteButton"
                        onClick={handleDeleteTicket}
                    >
                    Delete Ticket
                    </Button>
                    <ConfirmDelete handleOpen={deleteOpen} handleClose={deletePopupClose}/>
                </Stack>
                <h3>Description:</h3>
                <div className="ticketDescription">{TicketDescription}</div>
                <h3>Replies:</h3>
                <ReplySection replies={replyList}></ReplySection>
            </Stack>
            <Stack className="ticketUsers">
                <div>  
                    Students:
                    {students.map((studentName) => {
                        return <div key={studentName}>{studentName}</div>
                    })}
                </div>
                <div>
                    TA:
                    {TAs.map((TaName) => {
                        return <div key={TaName}>{TaName}</div>
                    })}
                </div>
                <div>
                    Project:
                    <div>{ProjectName}</div>
                </div>
            </Stack>
        </div>
    )
}




export default TicketInfo;