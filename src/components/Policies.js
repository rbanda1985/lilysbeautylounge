import React from 'react'
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

const Policies = () => {
  return (
    <MDBAccordion flush initialActive="flush-collapse1">
      <MDBAccordionItem collapseId="flush-collapse1" headerTitle='Booking Policy'>
        <strong>Please follow the steps below so that I can book your appointment</strong>.
        <ul>
          <li>So that we can start your beautifying process, please send me a deposit of $50 so that I can lock in your appointment. No need to worry, your deposit will go towards your hair service.</li>
          <li>When sending your deposit, I have a few different options. I accept Zelle, Cash App, Venmo, Messenger @LilyAlcauter. Please use the &#10084;&#65039; emoji.</li>
          <li>After following the above steps, please fill out the services form below so that I can have all of your information and the date and time of your desired appointment.</li>
          <li>The last thing you must do is look for an email confirmation that I will send to you. The email will contain instructions prior to the appointment and also the address to the location.</li>
        </ul>
      </MDBAccordionItem>
      <MDBAccordionItem collapseId="flush-collapse3" headerTitle='Payment Policy'>
        <ul>
          <li>Please keep in mind that the estimated price I gave you is an estimate. There is a possibility that the amount can change. It really depends on how much product I have to use to help you reach the look that you want.</li>
          <li>Please plan accordingly for the possible change in price.</li>
          <li>Also your final payment will be due in cash. Please be prepared for that before you arrive for your appointment.</li>
        </ul>
      </MDBAccordionItem>
      <MDBAccordionItem collapseId="flush-collapse2" headerTitle='Cancellation Policy'>
        <ul>
          <li>If you no-show or cancel the appointment the deposit is non refundable.</li>
          <li>You will have a 10 minute maximum grace period.</li>
          <li>If you're longer then 10 minutes, you will be charged a late fee of $1 per minute.</li>
        </ul>
      </MDBAccordionItem>
    </MDBAccordion>
  )
}

export default Policies