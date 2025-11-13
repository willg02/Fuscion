export default function Terms() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-semibold mb-8">Terms of Service</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          
          <p>
            Welcome to FUSCION. By accessing or using our services, you agree to be bound by these Terms of Service.
          </p>

          <h2 className="text-2xl font-semibold text-black pt-4">Services</h2>
          <p>
            FUSCION provides personalized health alignment services through individual consultations and programs. 
            Our services are not a substitute for emergency medical care or treatment of acute conditions.
          </p>

          <h2 className="text-2xl font-semibold text-black pt-4">Professional Relationship</h2>
          <p>
            The relationship between FUSCION and clients is professional in nature. Services are provided by 
            Dr. Parag Dalsania, a licensed physician.
          </p>

          <h2 className="text-2xl font-semibold text-black pt-4">Payment Terms</h2>
          <p>
            FUSCION is a private-pay service. Payment is required prior to or at the time of service. 
            We do not accept insurance.
          </p>

          <h2 className="text-2xl font-semibold text-black pt-4">Cancellation Policy</h2>
          <p>
            We require 48 hours notice for cancellations or rescheduling. Late cancellations may be subject to fees.
          </p>

          <h2 className="text-2xl font-semibold text-black pt-4">Limitation of Liability</h2>
          <p>
            FUSCION provides guidance and education. You are responsible for your own health decisions and actions.
          </p>

          <h2 className="text-2xl font-semibold text-black pt-4">Contact</h2>
          <p>
            Questions about these Terms? Contact us at hello@fuscion.com.
          </p>

          <p className="text-sm text-gray-500 pt-8">
            This is a simplified terms of service. Comprehensive terms should be reviewed by legal counsel.
          </p>
        </div>
      </div>
    </section>
  );
}
