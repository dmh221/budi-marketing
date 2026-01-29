export default function Terms() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-black mb-4 pt-8">Terms of Service</h1>
      <p className="text-sm text-secondary mb-12">Last updated: {lastUpdated}</p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">1. Introduction & Acceptance of Terms</h2>
          <div className="text-secondary leading-relaxed">
            <p>
              Welcome to Budi ("the Service"), a free social cooking application. These Terms of Service ("Terms") govern your access to and use of the Budi mobile application. By downloading, accessing, or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">2. Description of Service</h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>Budi is a social cooking application that allows users to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Save and organize recipes</li>
              <li>Share recipes with friends</li>
              <li>Track ingredients and create grocery lists</li>
              <li>Generate recipe images and nutritional insights using AI</li>
              <li>Connect with other users for cooking inspiration</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">3. User Accounts</h2>
          <div className="text-secondary leading-relaxed">
            <p>
              You must provide a valid phone number to create an account. You are responsible for safeguarding your account and all activities that occur under it. You must not share your account credentials with others and must notify us immediately of any unauthorized use.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">4. Acceptable Use Policy</h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>You agree not to use the Service to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Upload or share content that is illegal, harmful, threatening, abusive, defamatory, or otherwise objectionable.</li>
              <li>Impersonate any person or entity or misrepresent your affiliation.</li>
              <li>Upload content that infringes on the intellectual property rights of others.</li>
              <li>Attempt to gain unauthorized access to the Service or other users' accounts.</li>
              <li>Use the Service for any commercial purposes without our explicit permission.</li>
              <li>Share false, misleading, or dangerous recipe information.</li>
              <li>Spam, harass, or abuse other users.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">5. Content and Intellectual Property</h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>
              You retain ownership of the content you create and share through Budi ("User Content"). By sharing User Content on Budi, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content solely within the Service. You represent that you have all necessary rights to share any content you upload. We reserve the right to remove any content that violates these Terms.
            </p>
            <p>Recipe data may be enhanced with AI-generated images and nutritional information provided by third-party services.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">6. Third-Party Services</h2>
          <div className="text-secondary leading-relaxed">
            <p>The app uses third-party services, including Google's Gemini API for features like image generation and nutritional insights. These services have their own terms and privacy policies that may apply to your use of Budi.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">7. Privacy</h2>
          <div className="text-secondary leading-relaxed">
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices. The Privacy Policy is accessible from the Settings page.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">8. Disclaimers and Accuracy</h2>
          <div className="text-secondary leading-relaxed">
            <p>
              The Service is provided "as is" without warranties of any kind. We do not guarantee the accuracy of recipe information, nutritional data, or AI-generated content. Nutritional information is provided for informational purposes only and should not replace professional dietary advice. We are not responsible for any health issues or allergic reactions that may result from recipes or information shared on the platform. The Service may be interrupted or unavailable from time to time.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">9. Limitation of Liability</h2>
          <div className="text-secondary leading-relaxed">
            <p>
              In no event shall the providers of Budi be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">10. Termination</h2>
          <div className="text-secondary leading-relaxed">
            <p>You may delete your account at any time through the app settings. We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or third parties. Upon termination, your right to use the Service will cease immediately.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">11. Indemnification</h2>
          <div className="text-secondary leading-relaxed">
            <p>
              You agree to indemnify, defend, and hold harmless Budi and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your access to or use of the Service, your violation of these Terms, or your violation of any rights of another person or entity.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">12. Severability</h2>
          <div className="text-secondary leading-relaxed">
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">13. Age Requirements</h2>
          <div className="text-secondary leading-relaxed">
            <p>
              The Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">14. Changes to Terms</h2>
          <div className="text-secondary leading-relaxed">
            <p>
              We may update these Terms from time to time. We will notify you of any material changes by posting the updated Terms in the app or by sending a notification through the app. Your continued use of Budi after changes are posted constitutes your acceptance of the updated Terms.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">15. Governing Law & Dispute Resolution</h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
            </p>
            <p>
              Any disputes arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that either party may seek injunctive relief in a court of competent jurisdiction to protect intellectual property rights.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">16. Contact Us</h2>
          <div className="text-secondary leading-relaxed">
            <p>
              If you have any questions about these Terms of Service, please contact us at:{' '}
              <a href="mailto:support@hellobudi.app" className="text-lime hover:underline">
                support@hellobudi.app
              </a>{' '}
              or via the "Contact Support" feature in the app settings.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
