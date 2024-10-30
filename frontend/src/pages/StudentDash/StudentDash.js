import React from 'react'
import { Avatar, Button, Typography } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import TicketCard from '../../components/TicketCard';

const StudentDash = () => {
    return (
        <div>
            <div style={{ textAlign: 'center', margin: '100px', backgroundColor: 'white', padding: 50, gap: 50 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'flex-start', gap: 10 }}>
                        <Avatar><ArticleIcon sx={{ fontSize: "2rem" }} /></Avatar>
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <Typography variant="h1" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>5</Typography>
                            <Typography variant="p" sx={{ fontSize: '0.8rem', color: '#737373' }}>Total Tickets</Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <Typography variant="h1" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>1</Typography>
                            <Typography variant="p" sx={{ fontSize: '0.8rem', color: '#737373' }}>Open</Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <Typography variant="h1" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>0</Typography>
                            <Typography variant="p" sx={{ fontSize: '0.8rem', color: '#737373' }}>Escalated</Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <Typography variant="h1" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>4</Typography>
                            <Typography variant="p" sx={{ fontSize: '0.8rem', color: '#737373' }}>Closed</Typography>
                        </div>
                        <Button variant="contained" disableElevation sx={{ backgroundColor: '#8C1D40', color: 'white', borderRadius: 999, fontSize: '0.75rem', width: '15%' }}>View All</Button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'flex-start', gap: 5 }}>
                        <h3 style={{ justifyContent: 'left', alignItems: 'flex-start' }}>Ongoing Requests</h3>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                            <TicketCard style={{ width: '33.33%' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, justifyContent: 'left', alignItems: 'flex-start' }}>
                        <h3>Completed Requests</h3>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                            <TicketCard />
                            <TicketCard />
                            <TicketCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDash