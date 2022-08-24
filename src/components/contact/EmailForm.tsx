import { useFormik } from "formik";
import React, { useState } from "react";
import emailjs from "@emailjs/browser"
interface EmailProps {
    sender_email: string,
    subject: string,
    message: string
}

const serviceId = "service_ubxgc4o";
const templateId = "template_05uw2lc"
const emailKey = "ZerDaoAeoKXkIePJc"

export default function EmailForm() {
    const [emailSent, setEmailSent] = useState<boolean>();

    const formik = useFormik<EmailProps>({
        initialValues: {
            sender_email: '',
            subject: '',
            message: ''
        },
        onSubmit(values, formikHelpers) {
            handleSubmit(values);
            formikHelpers.resetForm();
        },
    })
    const handleSubmit = (email: EmailProps) => {
        emailjs.send(serviceId, templateId,
            { "sender_email": email.sender_email, "subject": email.subject, "message": email.message },
            emailKey).then(response => {
                console.log(`Response status: ${response.status}`);
                if (response.status > 0) {
                    setEmailSent(true);

                }
            });
    }
    return (
        <form onSubmit={formik.handleSubmit} className="col email-form">
            <label>Subject</label>
            <input
                name="subject"
                id="subject"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.subject}
            />
            <label>Reply Email</label>
            <input
                name="sender_email"
                id="sender_email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.sender_email}
            />
            <label>Message</label>
            <textarea
                name="message"
                id="message"
                onChange={formik.handleChange}
                value={formik.values.message}
            />
            {emailSent && (
                <label>Email sent!</label>
            )}
            <button
                className="btn text-light bg-dark btn-outline-white"
                type="submit"
            >Send</button>
        </form>
    )
}