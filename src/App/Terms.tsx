import * as React from "react";


interface Props {
}

interface State {

}

export default class Terms extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <div style={{ padding: 20 }}>
                <h1>Terms of Service</h1>
                <p>Effective date: November 07, 2018</p>
                <p>Weeatcher ("us", "we", or "our") operates the Weeatcher mobile application (the <b>"Application"</b>).</p>
                <p>
                    1. Weeatcher is a mobile application for monitoring and managing Veeam Backup & Replication (product of Veeam Software) environment.
                </p>
                <p>
                    2. The Application uses Veeam Backup & Replication (product of Veeam Software) RESTful API (https://helpcenter.veeam.com/docs/backup/rest/overview.html).
                </p>
                <p>
                    3. We are NOT affiliated with Veeam Software. Veeam Software is not responsible for the Application and does not provide any technical support.
                </p>
                <p>
                    4. We reserve the right, at our sole discretion, to change or modify portions of these Terms of Use at any time. If we do this, we will post the changes on this page and will indicate at the top of this page the date these terms were last revised.
                </p>

                <h3>DISCLAIMER OF WARRANTIES & LIMITATION OF LIABILITIES: YOU EXPRESSLY UNDERSTAND AND AGREE THAT:</h3>
                <p>1. YOUR USE OF THE APPLICATION IS AT YOUR SOLE RISK. THE APPLICATION IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.</p>
                <p>2. WE MAKES NO WARRANTY THAT (i) THE APPLICATION WILL MEET YOUR REQUIREMENTS, (ii) THE APPLICATION WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (iii) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE APPLICATION WILL BE ACCURATE OR RELIABLE, (iv) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE APPLICATION WILL MEET YOUR EXPECTATIONS, AND (V) ANY ERRORS IN THE SOFTWARE WILL BE CORRECTED.</p>
                <p>3. ANY ACTIONS THROUGH THE USE OF THE APPLICATION IS DONE AT YOUR OWN DISCRETION AND RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM, SERVERS OR LOSS OF DATA THAT RESULTS FROM THIS ACTIONS.</p>
                <p>4. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM US OR THROUGH OR FROM THE APPLICATION SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THE TOS.</p>
                <p>5. WE WILL NOT BE LIABLE FOR ANY DIRECT, SPECIAL, INDIRECT, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES OR ANY OTHER DAMAGES WHATSOEVER, WHETHER IN AN ACTION BASED UPON A STATUTE, CONTRACT, TORT (INCLUDING, WITHOUT LIMITATION NEGLIGENCE) OR OTHERWISE, RELATING TO THE USE OF THIS CONTENT, OR RESULTING FROM LOSSES OR DAMAGES CAUSED TO YOU BY VIRUSES, DATA CORRUPTION, FAILED MESSAGES, TRANSMISSION ERRORS OR PROBLEMS; LINKS TO THIRD PARTY WEBSITES, THE INTERNET BACKBONE, THIRD PARTY CONTENT, PRODUCTS OR SERVICES.</p>

                <h3>Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, please contact us by email: weeatcher@gmail.com</p>
            </div>
                )
            }
}