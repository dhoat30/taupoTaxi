import React from 'react'; 
import './Faq.css'; 
import '../../fonts.css'; 

class Faq extends React.Component{ 
    render(){ 
        return(
            <div id='faq'> 
                <h3 classNameName="section-heading-top font-color-white2"> Frequently Asked</h3>
                    <h2 classNameName="section-heading"> Questions</h2>
                    
                    <div classNameName="questions"> 
                        <div>
                            <h4 classNameName="grid-heading"> 
                                 Q. What do we do with Lost Property left in Cabs?
                            </h4>
                            <p>
                                Drivers are required to check Cab for property left behind and either deliver it to the owner or if that is not known to the nearest Police Station within 24 hours.
                            </p>
                        </div>

                        <div>
                            <h4 classNameName="grid-heading"> 
                            Q. Can I order a taxi van to help me move flat?
                            </h4>
                            <p>
                            Yes, a taxi van cannot help you move flat.</p>
                        </div>

                        <div>
                            <h4 classNameName="grid-heading"> 
                            Q. Why are taxi vans so hard to get on Friday/Saturday nights?
                            </h4>
                            <p>
                            Demand for Taxi Vans is high. Vans are also frequently doing multiple pick ups or drop offs so take longer to complete jobs leaving less time to be available.</p>
                        </div>

                        <div>
                            <h4 classNameName="grid-heading"> 
                            Q. Why is my pre-ordered taxi late?
                            </h4>
                            <p>
                            Pre-ordering a taxi gives you priority, and we endeavour to get your taxi to you at the required time, but sometimes events beyond our control or the drivers control can cause your taxi to be late.</p>
                        </div>

                        <div>
                            <h4 classNameName="grid-heading"> 
                            Q. How do I notify Taupo Taxis of a Complaint?
                            </h4>
                            <p>
                            We welcome your feedback so that we can improve our service and deal with any service failures in an appropriate manner. Please phone the office during office hours on 07 378 5100 or leave feedback through the web site. A reply will be made in due course.</p>
                        </div>                        
                    
                    </div>
            </div>
        );
    }
}
export default Faq; 