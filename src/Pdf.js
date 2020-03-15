import React, { useState } from 'react';
import PropTypes from 'prop-types';
const Pdf = (props) => {
    return (
        // <div.Pdf></div.Pdf>
        <div>
            <h4><strong>DRIVING EVALUATION for XYZ COMPANY</strong></h4><br />


            <p><strong>Date</strong>: __________________ <strong>Test Type</strong>: ____________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Start Time</strong>: ____________<strong>Finish Time</strong>: ______________
           <strong>Drivers Name</strong>: _________________________________________&nbsp;&nbsp; <strong>Sign</strong>: ___________________________________
            <strong>License#</strong>: _____________________________________ <strong>Class</strong>: ___________&nbsp; <strong>Expires</strong>: ________________________
            <strong>Tractor #</strong>: __________________<strong>Make</strong>: ______________ <strong>Trailer #</strong>: ____________ <strong>Type</strong>: _____________________
            <strong>ODOMETER READING - Starting: _____________ Ending: ______________ Approx. Kms Driven</strong>: ______________
            <strong>Starting Location</strong>: ___________________________________ <strong>Ending Location</strong>: ___________________________________</p>
            <table style={{ width: "100%", padding: "80px" }}>
                <tbody>
                    <tr >
                        <td style={{}}>
                            <h4><strong>Road Test Evaluation</strong></h4>
                        </td>

                    </tr>
                    <tr>
                        <td >
                            <p><strong style={{ paddingLeft: "900px" }}><u>Checked</u>&nbsp;&nbsp;&nbsp;&nbsp;<u >Points</u></strong></p>
                            <p><strong>Part 1 &ndash; PRE-TRIP INSPECTION</strong></p>
                            <p>1.Checks general condition approaching unit looks for leads, oil, fuel, coolant etc.&nbsp;&nbsp;</p>
                            <p>2.Checks Under the hood &ndash; oil, coolant, general condition of Engine compartment.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>3.Checks around unit &ndash; tires, lights, trailer hook-up, Brake and light lines, body, doors&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>4.Checks brake action, tractor protection valve, and parking (hand) brake&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>5.Checks horn, windshield wipers, mirrors, emergency Equipment, triangle reflectors, fire extinguisher&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>6.Checks instrument panel all gages for proper Functioning and demonstrates full understanding&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>7.Cleans windshield, windows, mirrors, lights, reflectors</p>
                            <p>8.Review all licenses permits and documents&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p><strong>Comments</strong>: _________________________________________</p>
                            <br />
                            <p><strong>Part 2 &ndash; COUPLING AND UNCOUPLING</strong></p>
                            <p>1.Lines up units properly</p>
                            <p>2.Connects airlines and light cords correctly to apply trailer brakes before coupling&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>3.Connect glad hands and light line properly&nbsp;</p>
                            <p>4.Backs slowly and couples without difficulty&nbsp;</p>
                            <p>5.Raises landing gear fully after coupling and stows handle securely</p>
                            <p>6.Checks coupling by applying hand valve (spike) and perform a stretch test&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>7.Assures that a surface will support trailer before uncoupling</p>
                            <p><strong>Comments</strong>: _________________________________________</p>
                            <br />
                            <p><strong>Part 3 &ndash; PLACING VEHICLE IN MOTION AND USE OFCONTROLS</strong></p>
                            <p><strong>C.&nbsp; </strong><strong>ENGINE</strong></p>
                            <p>1.Puts transmission in neutral, starts the engine with the clutch fully depressed</p>
                            <p>2.Allows proper warm-up and scans gauges</p>
                            <p>3.Maintains proper engine speed (rpm) while driving&nbsp;</p>
                            <p>4.Does not abuse engine by over-revving or lugging (running rmp too low)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p><strong>Comments</strong>: _____________________________________________</p>
                            <p><strong>A. </strong><strong>CLUTCH AND TRANSMISSION</strong></p>
                            <p>1.Start loaded unit smoothly</p>
                            <p>2.Uses clutch and times shifting properly</p>
                            <p>3.Shifts gears smoothly and uses proper gear sequence</p>
                            <p>4.Downshifts when approaching traffic lights&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p><strong>Comments</strong>:_____________________________________________</p>
                            <p><strong>B. </strong><strong>BRAKES</strong></p>
                            <p>1.Knows proper use of protection valve&nbsp;&nbsp;</p>
                            <p>2.Understands and tests low air warning device&nbsp;&nbsp;</p>
                            <p>3.Tests Tractor, trailer and service brakes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>4.Builds full air pressure before moving&nbsp;&nbsp;&nbsp;</p>
                            <p><strong>Comments</strong>: __________________________________</p>
                            <p><strong>C. </strong><strong>STEERING</strong></p>
                            <p>1.Keeps both hand on wheel when not shifting&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>2.Controls steering well, does not wonder in lane&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>3.Good driving posture good grip on steering wheel&nbsp;&nbsp;</p>
                            <p><strong>Comments</strong>: __________________________________</p>
                            <p><strong>Part 4 &ndash; BACKING AND PARKING</strong></p>
                            <p>1.Gets out and looks before backing&nbsp;&nbsp;&nbsp;</p>
                            <p>2.Rolls down window to listen for danger while backing</p>
                            <p>3.Looks back as well as uses mirrors while backing&nbsp;&nbsp;&nbsp;</p>
                            <p>4.Avoids backing from blind side&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>5.Signals when backing with horn and flashers&nbsp;&nbsp;</p>
                            <p>6.Controls speed and direction properly while backing&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>7.Secures unit with both parking brakes before exiting cab&nbsp;&nbsp;</p>
                            <p><strong>Comments: </strong>__________________________________</p>
                            <p><strong>Part 5 &ndash; SLOWING AND STOPPING</strong></p>
                            <p>1.Gears down properly approaching a stop</p>
                            <p>2.Starts on a grade without rolling back</p>
                            <p>3.Uses mirrors to check traffic behind unit&nbsp;</p>
                            <p>4.Avoids sudden stops</p>
                            <p>5.Stops smoothly without excessive fanning</p>
                            <p>6.Stops well behind stop line</p>
                            <p>7.Does not encroach on pedestrian&rsquo;s crosswalk&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p><strong>Comments</strong>:__________________________________________</p>
                            <p><strong>Part 6 &ndash; OPERATING IN TRAFFIC PASSING AND TURNING: </strong></p>
                            <p><strong>A.</strong><strong>TURNING</strong></p>
                            <p>1.Signals intention well in advance</p>
                            <p>2.Selects proper lane well in advance of turn</p>
                            <p>3.Checks traffic condition and turns only when intersection is clear</p>
                            <p>4.Restricts traffic on right when making a right turn</p>
                            <p>5.Completes turns into the proper lane and does not impede other traffic&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p><strong>Comments</strong>: __________________________________________</p>
                            <p><strong>B. </strong><strong>TRAFFIC SIGNS AND SIGNALS</strong></p>
                            <p>1.Approaches signals prepared to stop if necessary</p>
                            <p>2.Uses good judgement on yellow light</p>
                            <p>3.Starts smoothly on green</p>
                            <p>4.Obeys all traffic signals</p>
                            <p>5.Notices and obeys traffic signals</p>
                            <p><strong>Comments</strong>: __________________________________________</p>
                            <p><strong>c.&nbsp;&nbsp;&nbsp; </strong><strong>INTERSECTIONS</strong></p>
                            <p>1.Approaches intersections prepared to stop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>2.Checks for cross traffic regardless of traffic control&nbsp;&nbsp;</p>
                            <p>3.Yields right of way for safety&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p><strong>Comments</strong>: __________________________________________</p>
                            <p><strong>D.&nbsp;&nbsp; </strong><strong>RAILROAD CROSSING</strong></p>
                            <p>1.Adjusts speed to conditions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>2.Makes safe stop if required&nbsp;</p>
                            <p>3.Selects proper gear and does not shifts while crossing&nbsp;&nbsp;</p>
                            <p>4.Knows and understands RR X stopping distance</p>
                            <p><strong>Comments</strong>: _____________________________________________</p>
                            <p><strong>E.&nbsp;&nbsp;&nbsp; </strong><strong>PASSING</strong></p>
                            <p>1.Passes with enough clear space ahead&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>2.Does not pass in unsafe location, hill, curve,intersection</p>
                            <p>3.Signals lane change&nbsp;</p>
                            <p>4.Does not tail gate</p>
                            <p>5.Does not block traffic with slow pass</p>
                            <p>6.Allows enough space when returning to right lane&nbsp;</p>
                            <p><strong>Comments</strong>: _____________________________________________</p>
                            <p><strong>F.&nbsp;&nbsp;&nbsp; </strong><strong>SPEED CONTROL</strong></p>
                            <p>1.Speed consistent with basic ability&nbsp;&nbsp;</p>
                            <p>2.Slows down in advance of curves, intersections and exit ramps</p>
                            <p>3.Maintenance constant speed and proper following distance</p>
                            <p><strong>Comments</strong>:</p>
                            <p><strong>G.&nbsp;&nbsp; </strong><strong>COURTESY AND SAFETY</strong></p>
                            <p>1.Use defensive driving techniques</p>
                            <p>2.Yield right-of-way for safety</p>
                            <p>3.Does not crown through others or force his way thru traffic</p>
                            <p>4.Allows faster traffic to pass</p>
                            <p>5.Keeps to the right and does not wonder in his own lane</p>
                            <p>6.Use horn only when necessary</p>
                            <p>7.General courteous and uses proper conduct</p>
                            <p>Comments: ___________________________________</p>
                            <p><strong>Part 7 &ndash; MISCELLANEOUS</strong></p>
                            <p><strong>A.</strong><strong> GENERAL DRIVING ABILITY AND HABITS</strong></p>
                            <p>1.Consistently alert and attentive</p>
                            <p>2.Checks mirrors every 5-8 seconds&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>3.Adjusts driving to meet changing conditions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>4.Performs routine functions without taking his eyes off the road</p>
                            <p>2.Checks instruments regularly while driving&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>3.Willing to take instructions and suggestions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>4.Adequate self-confidence in driving&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>5.Is not easily angered&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>6.Has a positive attitude and good demeanor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p><strong>Comments</strong>: __________________________________________________</p>
                            <p>&nbsp;</p>
                            <p><strong>COMMENTS AND SUGGESTIONS</strong>: __________________________________________________</p>
                            <p><strong>Route: </strong>: __________________________________________________</p>
                            <p><strong>Evaluator:_____________________________________________</strong></p>
                            <p><strong>Trainer Signature: _____________________________________________</strong></p>
                            <p><strong>Driver&rsquo;s Comments: _____________________________________________</strong></p>
                            <p><strong>Driver Name: _________________________________</strong></p>
                            <p><strong>Driver&rsquo;s Signature: _____________________________________________</strong></p>
                            <p><strong>Total Points</strong></p>
                        </td>


                    </tr>
                </tbody>
            </table>

            <p>&nbsp;</p>
            <ol>
                <li>A point system is utilized to evaluate driver performance an accumulation of 49 points will automatically disqualify the driver.</li>
                <li>A successful Road Test is not a guarantee of employment.</li>
            </ol>
            <p>&nbsp;</p>
            <p>The applicant&rsquo;s signature constitutes agreement to the above information and to have their driving evaluated by</p>
            <p>&nbsp;</p>
            <p><strong>Driver&rsquo;s Signature: _____________________________________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Date: ___________________________________________________</strong></p>
        </div>
    )
}

Pdf.prototype = {

};
export default Pdf;