'use server';

import { Resend } from "resend";
import { getErrorMessage, validateString } from "../lib/utilities";
import ContactFormEmail from "../email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_kEY);

export async function sendEmail(formData) {

    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    console.log(senderEmail);
    console.log(message);

    if(!validateString(senderEmail, 500)){
        return {
            error: "invalid sender email"
        }
    }
    
    if(!validateString(message, 5000)){
        return {
            error: "invalid message"
        }
    }

    let data;
    try{
        data = await resend.emails.send({
            from: 'Portfolio contact form <onboarding@resend.dev>',
            to: 'shamahmadaljalam@gmail.com',
            subject: 'My portfolio cantact me',
            // html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
            reply_to: senderEmail,
            // text: message
            // react: <ContactFormEmail message={message} senderEmail={senderEmail}/> //this is valid but the following is better since this is a js file and not jsx
            react: React.createElement(ContactFormEmail, {message: message, senderEmail: senderEmail})
        });
    }catch(err){
        return{
            error: getErrorMessage(err)
        }
    }

    return {
        data
    }
}