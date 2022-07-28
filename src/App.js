import './App.css';
import React,{useState} from 'react';
import { nanoid } from "nanoid";

function App() {
  let data = [];
  const [details, setdetails] = useState(data)
  const [adddata, setadddata] = useState({
      Date: '',
      Amount: '',
      Payment_Mode: '',
      Remarks: ''
  })

  const handleChange = (e) =>{
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
   const fieldValue = e.target.value;
   const newData = { ...adddata, [fieldName]: fieldValue};
   setadddata(newData);
}

const handleSubmit = (event) => {
  event.preventDefault();
  const newdetail = {
    id: nanoid(),
    Date: adddata.Date,
    Amount: adddata.Amount,
    Payment_Mode: adddata.Payment_Mode,
    Remarks: adddata.Remarks
  };

  const newdetails = [...details, newdetail];
  setdetails(newdetails);
};

  return (
    <>
    <div id='mainform'>
      <h3>Reciept Details</h3>
      <form id='innerform' onSubmit={handleSubmit}>
       <div><label htmlFor="date">Date: </label><input
         id="date"
         name="Date"
         type="date"
         onChange={handleChange}
       /></div>
       
 
       <div><label htmlFor="amount">Amount</label><input
         id="amount"
         name="Amount"
         type="text"
         onChange={handleChange}
        /></div>
       <div><label for="paymentmode">Payment Mode</label>
       <select
        id="paymentmode" name="Payment_Mode" value={''} onChange={handleChange}>
                           <option value="">Select</option>
                           <option value="cash">Cash</option>
                           <option value="UPI">UPI</option>
                        </select></div>
 
        <div><label htmlFor="remarks">Remarks</label><input
         id="remarks"
         name="Remarks"
         type="text"
         onChange={handleChange}
       /></div>
 
       <button id='submit' type="submit">SUBMIT</button>
       <button id='cancel' type="reset">CANCEL</button>
     </form>
     </div>

      <table>
      <thead>
          <tr>
            <th>DATE</th>
            <th>AMOUNT</th>
            <th>PAYMENT MODE</th>
            <th>REMARK</th>
          </tr>
        </thead>
        <tbody>
            {details.map((detail) => (
              <tr>
            <td>{detail.Date}</td>
            <td>{detail.Amount}</td>
            <td>{detail.Payment_Mode}</td>
            <td>{detail.Remarks}</td>
          </tr>
            )
            )}
        </tbody>
      </table>
      
    </>
  );
}

export default App;
