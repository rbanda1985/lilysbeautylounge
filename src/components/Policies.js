import React from 'react'
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

const Policies = () => {
  return (
    <MDBAccordion flush initialActive="flush-collapse1">
      <MDBAccordionItem collapseId="flush-collapse1" headerTitle='Booking Policy'>
        <strong>Please follow the steps below so that I can book your appointment</strong>.
        <ul>
          <li>Please send me your deposit of $50 so that I can lock in your appointment so you do not have to worry about someone else taking your spot.</li>
          <li>The deposit will be deducted from your balance the day of the appointment.</li>
          <li>When sending your deposit, I have a few different options. I accept Zelle, Cash App, Venmo, Messenger @LilyAlcauter. Please use the &hearts emoji.</li>
          <li>After following the above steps, please send me your full name, email, phone number, and the date and time of your appointment that you desire.</li>
          <li>The last thing you must do is look for an email confirmation that I will send to you. The email will contain instructions prior to the appointment and also the address to the location.</li>
        </ul>
      </MDBAccordionItem>
      <MDBAccordionItem collapseId="flush-collapse2" headerTitle='Cancellation Policy'>
        <ul>
          <li>If you no-show or cancel the appointment the deposit is non refundable.</li>
          <li>You will have a 10 minute maximum grace period.</li>
          <li>If you're longer then 10 minutes, you will be charged a late fee of $1 per minute.</li>
        </ul>
      </MDBAccordionItem>
      <MDBAccordionItem collapseId="flush-collapse3" headerTitle='Payment Policy'>
        <ul>
          <li>Please keep in mind that your final total amount can change from the estimated amount given by message.</li>
          <li>Please plan accordingly for the possible change in price.</li>
          <li>Please be aware that your final payment will be due in cash.</li>
        </ul>
      </MDBAccordionItem>
    </MDBAccordion>
  )
}

export default Policies