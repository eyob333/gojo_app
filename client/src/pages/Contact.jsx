import "./pagesCss/contact.css"; // Assuming you have a CSS file for styling
import ContactUsImage from "/images/nonv.webp"; // Import the image

 function Contact() {
   return (
     <div className="contact-us-container">
       <div className="content-container">
         <div className="contact-info">
           <h1>CONTACT US</h1>
           <p>We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out using the form below or the contact details provided.</p>
           {/* You can add more contact details here like email, phone, address */}
           <div className="call-to-action">
             <button>Get in touch</button>
           </div>
         </div>
         {/* You could add a contact form here if needed */}
       </div>
       <div className="image-container">
         <img src={ContactUsImage} alt="Creative Contact Us Illustration" />
       </div>
     </div>
   );
 }

 export default Contact;