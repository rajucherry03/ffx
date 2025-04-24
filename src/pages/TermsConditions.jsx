import React, { useEffect } from 'react';
import logo from "../assets/Xbackdemo.png";

function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="w-full h-[90px] flex items-center justify-center rounded-b-lg"
        style={{ backgroundColor: "#07064E" }}
      >
        <img
          src={logo}
          alt="FutureForgeX"
          style={{
            height: "auto",        // Maintain aspect ratio
            width: "150px",        // Adjust logo size
            borderRadius: "15px",  // Rounded corners
            objectFit: "cover",    // Fit image nicely
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto p-6 text-gray-800">
        <h1 className="text-3xl font-semibold mb-6 text-center">FUTUREFORGEX TERMS & CONDITIONS</h1>

        <p className="mb-6 text-justify">
          Welcome to FutureForgeX! By accessing or using our website,
          <br /><br />
          <a href="https://www.futureforgex.in" className="underline" target="_blank" rel="noopener noreferrer">
            www.futureforgex.in
          </a>
          <br /><br />
          you agree to comply with and be bound by the following Terms and Conditions. Please read these carefully. If you do not agree to these terms, you should not use this website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">ACCEPTANCE OF TERMS</h2>
        <p className="text-justify">By using our site, you affirm that you are at least 18 years old or visiting under supervision. If you access the site on behalf of a business, you represent that you have the authority to bind that business to these Terms.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">CHANGES TO TERMS</h2>
        <p className="text-justify">We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on the website. Your continued use of the site after any changes constitutes acceptance of the new Terms.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">PRODUCT INFORMATION</h2>
        <p className="text-justify">We strive to provide accurate descriptions and pricing. However, we do not guarantee error-free or up-to-date information. If a pricing error or misrepresentation occurs, we reserve the right to cancel affected orders.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">ORDERS AND PAYMENT</h2>
        <h3 className="text-lg font-semibold mt-4">Order Acceptance</h3>
        <p className="text-justify">Placing an order is an offer to purchase. We may accept or decline any order due to product availability or pricing errors. A confirmation email will be sent upon receipt of your order.</p>

        <h3 className="text-lg font-semibold mt-4">Payment</h3>
        <p className="text-justify">We accept various payment methods, including credit and debit cards. You agree to provide accurate payment information and authorize us to process the payment.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">SHIPPING AND DELIVERY</h2>
        <p className="text-justify">Orders are processed promptly. Shipping costs are calculated at checkout. Delivery times vary based on location and carrier delays.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">RETURN POLICY</h2>
        <h3 className="text-lg font-semibold mt-4">Eligibility</h3>
        <p className="text-justify">Returns are accepted within 7-14 days of receipt if the product is unused and in original packaging. Customized products are non-returnable.</p>

        <h3 className="text-lg font-semibold mt-4">Return Process</h3>
        <p className="text-justify">Contact us at <a href="mailto:support@futureforgex.com" className="underline">support@futureforgex.com</a> for return instructions. Return shipping costs apply unless the item is defective or incorrect.</p>

        <h3 className="text-lg font-semibold mt-4">Refunds</h3>
        <p className="text-justify">Refunds will be processed within 7-14 business days after receiving the returned item. Refunds are issued to the original payment method.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">INTELLECTUAL PROPERTY</h2>
        <p className="text-justify">All content, logos, and materials on FutureForgeX are protected under intellectual property laws. Unauthorized use or distribution is prohibited.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">USER CONDUCT</h2>
        <p className="text-justify">Users must not violate laws, impersonate others, transmit harmful software, or engage in disruptive activities.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">LIMITATION OF LIABILITY</h2>
        <p className="text-justify">FutureForgeX is not liable for indirect or consequential damages arising from the use of our services.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">DISCLAIMER OF WARRANTIES</h2>
        <p className="text-justify">Products are provided "as is" without warranties of any kind. We do not guarantee uninterrupted website access or product performance.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">GOVERNING LAW</h2>
        <p className="text-justify">These Terms are governed by the laws of Andhra Pradesh, India. Disputes will be resolved in courts in Piduguralla, Palnadu District, Andhra Pradesh.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">SEVERABILITY</h2>
        <p className="text-justify">If any provision is found invalid, the remaining provisions remain effective.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">INDEMNIFICATION</h2>
        <p className="text-justify">You agree to indemnify and hold harmless FutureForgeX from any claims arising from your site use.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">PRIVACY POLICY</h2>
        <p className="text-justify">Your data usage is governed by our Privacy Policy. By using our site, you consent to our data practices.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">CONTACT INFORMATION</h2>
        <p className="mb-2 text-justify">For any inquiries, you can reach us at:</p>
        <p className="mb-4 text-justify">
          Email: <a href="mailto:support@futureforgex.com" className="underline">support@futureforgex.com</a>
        </p>
        <p className="mb-4 text-justify">
          Website: <a href="https://www.futureforgex.in" className="underline" target="_blank" rel="noopener noreferrer">www.futureforgex.in</a>
        </p>
        <p className="mb-4 text-justify">
          Phone: <a href="tel:+918499956365" className="underline">+91 8499956365</a>
        </p>
        <p className="mb-4 text-justify">Address: Madanapalle</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">ENTIRE AGREEMENT</h2>
        <p className="text-justify">These Terms constitute the entire agreement between you and FutureForgeX.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">FORCE MAJEURE</h2>
        <p className="text-justify">FutureForgeX is not liable for failures due to unforeseen circumstances beyond our control.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">TERMINATION</h2>
        <p className="text-justify">We reserve the right to terminate or suspend access for violations of these Terms.</p>
      </div>
    </div>
  );
}

export default TermsConditions;
