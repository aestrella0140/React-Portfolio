export default function Contact() {
    return (
        <div>
            <div>
                <h2>GitHub</h2>
                <a href="https://github.com/aestrella0140">https://github.com/aestrella0140</a>
                <p>
                    Click the title to be redirected to my GitHub Profile!
                </p>
            </div>
            <div>
                <h2>Personal Phone Number</h2>
                <p>
                    <li>623-755-3094</li>
                    You can text or call me at anytime after 3PM at the number above.
                </p>
            </div>
            <div>
                <div className="form-card">
                    <h2>name</h2>
                    <label className="label"><h6 className="name">name</h6></label>
                    <input type="text" name="name" placeholder="Enter name here"></input>
                </div>
                <div className="form-card">
                    <h2>Email</h2>
                    <label className="label"><h6 className="email-title">Email Address</h6></label>
                    <input type="text" name="email" pattern="Enter valid Email"></input>
                </div>
                <div className="form-card">

                </div>
            </div>
        </div>
    )
}