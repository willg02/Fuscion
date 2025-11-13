export default function Privacy() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-semibold mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          
          <p>
            FUSCION ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
            explains how we collect, use, and safeguard your personal information.
          </p>

          <h2 className="text-2xl font-semibold text-black pt-4">Information We Collect</h2>
          <p>
            We collect information you provide directly to us, including name, email address, phone number, 
            and any other information you choose to provide through our contact forms or during consultations.
          </p>

          <h2 className="text-2xl font-semibold text-black pt-4">How We Use Your Information</h2>
          <p>
            We use your information to provide our services, communicate with you about appointments and 
            programs, and improve our offerings. We do not sell or share your personal information with 
            third parties for marketing purposes.
          </p>

          <h2 className="text-2xl font-semibold text-black pt-4">HIPAA Compliance</h2>
          <p>
            As a medical practice, FUSCION complies with HIPAA regulations to protect your health information.
          </p>

          <h2 className="text-2xl font-semibold text-black pt-4">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at hello@fuscion.com.
          </p>

          <p className="text-sm text-gray-500 pt-8">
            This is a simplified privacy policy. A comprehensive policy should be reviewed by legal counsel.
          </p>
        </div>
      </div>
    </section>
  );
}
