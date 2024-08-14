import './partner.css';

function Partner() {
    return (
        <>
            <footer>
                <div className="text-center1 p-3" >
                    <div style={{ marginBottom: '1rem' }}>
                        {/* <img src="https://rcmsar.com/wp-content/uploads/Royal-Canadian-Marine-Search-And-Rescue-Footer-Background.jpg" alt="Logo" style={{ width: '150px' }} /> */}
                    </div>
                    <center>
                        <div style={{ marginBottom: '1rem' }} className="ourClass">
                            <p>
                                Address:  GSVM Medical College, Kanpur, Uttar Pradesh, India<br />
                                Phone: +1 123-456-7890<br />
                                Email: GSVMCamp.com
                            </p>
                        </div>

                        <p style={{ marginBottom: '0', color: '#888' }} className="ourClass">
                            © 2024 Company Name. All rights reserved.
                        </p>
                        <p>
                            <a href="https://github.com/ananya-14-04/OrganD-decentralized-organ-donation-Application" style={{ color: '#fff9f9' }}>Visit the GitHub repo of the project</a>
                        </p>
                    </center>
                </div>
            </footer>

        </>
    );
}

export default Partner;
