import React, { useEffect } from "react";
import logo from "../assets/ffxnobg.png";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-0 px-4 sm:px-8 font-bont">
      {/* Header */}
      <header className="w-full h-[80px] flex items-center justify-center bg-dark-blue shadow-md">
        <img
          src={logo}
          alt="FutureForgeX"
          className="w-[140px] h-auto object-contain rounded-lg"
        />
      </header>

      {/* Policy Content */}
      <main className="max-w-5xl mx-auto mt-8 mb-10 text-gray-800">
        <h1 className="text-4xl font-bold text-center text-dark-blue mb-8 border-b-2 border-cyan-accent pb-4">
          FUTUREFORGEX PRIVACY POLICY
        </h1>

        <p className="mb-6 font-semibold italic text-sm text-gray-700 text-center">
          **Disclaimer**: In case of any discrepancy or difference, the English version will take precedence over any translation.
        </p>

        <p className="mb-8 text-justify leading-relaxed">
          We value the trust you place in us and recognize the importance of secure transactions and privacy. This Privacy Policy explains how FutureForgeX and its affiliates (collectively "FutureForgeX," "we," "our," "us") collect, use, share, or process your personal data through our website,
          <br /><br />
          <a href="https://www.futureforgex.in" className="text-cyan-accent underline" target="_blank" rel="noopener noreferrer">www.futureforgex.in</a>
          <br /><br />
          its mobile application, and m-site (collectively referred to as the "Platform"). By accessing this Platform, submitting your information, or availing of our services, you expressly agree to be bound by the terms of this Privacy Policy, our Terms & Conditions, and applicable service terms, and to be governed by Indian laws, including those related to data protection and privacy. If you disagree, please do not use our Platform.
        </p>

        <section className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-dark-blue mb-3">COLLECTION OF YOUR INFORMATION</h2>
            <p className="leading-relaxed mb-2 text-justify">When you use our Platform, we collect and store the information you provide. We specify mandatory and optional fields wherever possible. You may choose not to provide data by opting out of certain features, products, or services on our Platform.</p>
            <p className="leading-relaxed mb-2 text-justify">We may track your usage patterns, buying behavior, preferences, and any other data you voluntarily provide. This helps us conduct internal research to analyze user demographics, interests, and behavior to better understand, protect, and serve our users.</p>
            <p className="leading-relaxed text-justify">We may collect personal data such as your name, email address, phone number, delivery address, credit/debit card details, and other payment information when you create an account, transact with us, or participate in an event or contest.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark-blue mb-3">USE OF DEMOGRAPHIC/PROFILE DATA/YOUR INFORMATION</h2>
            <p className="leading-relaxed mb-2 text-justify">We use your personal data to fulfill orders, deliver services, process payments, and communicate with you regarding transactions and promotional offers.</p>
            <p className="leading-relaxed text-justify">To improve our services, we analyze user behavior on our Platform. Your IP address helps diagnose server issues and administer our Platform.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark-blue mb-3">COOKIES</h2>
            <p className="leading-relaxed text-justify">We use cookies and similar tracking technologies to analyze web traffic, measure promotional effectiveness, and enhance security. Cookies do not contain personal data. Some features are accessible only via cookies.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark-blue mb-3">SHARING OF PERSONAL DATA</h2>
            <p className="leading-relaxed mb-2 text-justify">We may share your personal data with third parties, including sellers and business partners, to provide access to our services, fulfill orders, enhance user experience, collect payments, and comply with legal obligations.</p>
            <p className="leading-relaxed text-justify">In the event of a business merger, acquisition, restructuring, or amalgamation, we may transfer personal data to the new entity.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark-blue mb-3">SECURITY PRECAUTIONS</h2>
            <p className="leading-relaxed text-justify">We maintain reasonable security measures to protect your information. However, data transmission over the internet carries inherent risks, and complete security cannot be guaranteed.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark-blue mb-3">DATA RETENTION</h2>
            <p className="leading-relaxed text-justify">We retain your personal data as per legal requirements and for the necessary duration to fulfill the purpose of collection.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark-blue mb-3">ADVERTISEMENTS ON THE PLATFORM</h2>
            <p className="leading-relaxed text-justify">We use third-party advertising services to display ads on our Platform. These services may use data about your browsing activity to show personalized ads.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark-blue mb-3">YOUR RIGHTS</h2>
            <p className="leading-relaxed text-justify">We take reasonable steps to ensure that your data is accurate and updated. You may correct or update your information through the Platform’s settings or contact us.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark-blue mb-3">CHANGES TO THIS PRIVACY POLICY</h2>
            <p className="leading-relaxed text-justify">We may update this Privacy Policy to reflect changes in our data practices. We will notify you of significant updates through our Platform, emails, or other appropriate channels.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark-blue mb-3">CONTACT US</h2>
            <p className="mb-2 leading-relaxed text-justify">For any inquiries, you can reach us at:</p>
            <p className="mb-1 text-justify">Email: <a href="mailto:futureforgexsupport@gmail.com" className="text-cyan-accent underline">futureforgexsupport@gmail.com</a></p>
            <p className="mb-1 text-justify">Website: <a href="https://www.futureforgex.in" className="text-cyan-accent underline" target="_blank" rel="noopener noreferrer">www.futureforgex.in</a></p>
            <p className="mb-1 text-justify">Phone: <a href="tel:+918499956365" className="text-cyan-accent underline">+91 6301 201 156</a></p>
            <p className="mb-4 text-justify">Address: Madanapalle</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
