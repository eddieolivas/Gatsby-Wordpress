import React, { useEffect, useState } from 'react';
import { Modal } from "react-bootstrap";
import { Link } from "gatsby";

const ModalPopUp = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    useEffect(() => {
        setShow(true);
    }, [])
    return (
        <Modal show={show} onHide={handleClose} centered style={{fontFamily: "Avenir, sans-serif"}}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Serving Our Community of New and Current Patients
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3><strong><em>Important Notice to Patients Regarding the Coronavirus Outbreak</em></strong></h3>
                <p>People in cancer treatment have compromised immunity. For these patients, being treated at a
                    hospital—where many people could have the novel coronavirus (COVID-19)—can be dangerous.</p>
                <p>During this outbreak, we are here to help you continue your cancer treatment while keeping you
                    healthy and well in a small, private setting that’s safer than a busy hospital. We are also still
                    accepting new patients.</p>
                <p><strong>PLEASE NOTE:</strong> All patients, loved ones and caregivers will have their temperature
                    measured when they arrive. For the safety of our patients and staff, nobody with an elevated body
                    temperature will be allowed to enter our offices.</p>
                <p>For more information, please read <Link to={'/covid-19'}>our update</Link> on our response,
                    recommendations and commitments to our patients during this outbreak.</p>
            </Modal.Body>
        </Modal>
    );
}

export default ModalPopUp;
