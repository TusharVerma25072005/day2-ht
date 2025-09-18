import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export const Feedback = () => {
    return <div className="w-full p-3 flex flex-col items-center justify-content">
        <span className='my-2 text-cl font-bold'>
            Please share a detailed feedback about our meals , so that we can improve on meals
        </span>
        <br />
        <TextField id="outlined-basic" label="Breakfast Feedback" className='my-3 ' variant="outlined" />
        <br />
        <TextField id="outlined-basic" label="Lunch Feedback" className='my-3 ' variant="outlined" />
        <br />
        <TextField id="outlined-basic" label="Dinner Feedback" className='my-3 ' variant="outlined" />
        <br />
        <br />

        <Button variant="contained" onClick={()=>{
            
        alert("Feedback Submitted Successfully")
            window.location.reload()
        }}>Submit </Button>
    </div>
}