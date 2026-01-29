export default function Terms() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-xl font-bold text-black mb-4 pt-24 uppercase">Terms of Service</h1>
      <p className="text-xs text-secondary mb-12">Last updated: {lastUpdated}</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">1. Introduction & Acceptance</h2>
          <div className="text-secondary leading-relaxed text-justify text-sm">
            <p>
              Welcome to Budi ("the Service"), a social cooking application. By using the Service, you agree to these Terms. If you disagree, do not use the Service.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">2. Description of Service</h2>
          <div className="space-y-4 text-secondary leading-relaxed text-justify text-sm">
            <p>Budi allows users to:</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Save and organize recipes</li>
              <li>Share recipes with friends</li>
              <li>Track ingredients and grocery lists</li>
              <li>Generate recipe images and nutrition insights using AI</li>
              <li>Connect with other users for cooking inspiration</li>
            </ul>
            <p>Some features may be labeled experimental or beta and may change or be removed at any time.</p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">3. User Accounts</h2>
          <div className="text-secondary leading-relaxed text-justify text-sm">
            <p>
              You must provide a valid phone number. You are responsible for account security and all activity under your account.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">4. Acceptable Use</h2>
          <div className="space-y-4 text-secondary leading-relaxed text-justify text-sm">
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Post illegal, abusive, or harmful content</li>
              <li>Impersonate others</li>
              <li>Infringe intellectual property</li>
              <li>Attempt unauthorized access</li>
              <li>Use the Service for commercial promotion without written permission</li>
              <li>Share dangerous or misleading recipe information</li>
              <li>Harass or spam users</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">5. Content & Intellectual Property</h2>
          <div className="space-y-4 text-secondary leading-relaxed text-justify text-sm">
            <p>
              You retain ownership of your content. You grant Budi a non-exclusive, worldwide, royalty-free license to use and display it within the Service.
            </p>
            <p>We may remove or restrict content at our sole discretion.</p>
            <p>Recipe data may be enhanced with AI-generated images and nutritional information.</p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">6. Third-Party Services</h2>
          <div className="text-secondary leading-relaxed text-justify text-sm">
            <p>Budi uses third-party services including AI providers. Their terms and policies may also apply.</p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">7. Privacy</h2>
          <div className="text-secondary leading-relaxed text-justify text-sm">
            <p>
              Your use is governed by our Privacy Policy.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">8. Disclaimers & Safety</h2>
          <div className="space-y-4 text-secondary leading-relaxed text-justify text-sm">
            <p>The Service is provided "as is."</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>AI-generated images, upgrades, and nutrition insights may be incomplete or incorrect</li>
              <li>Nothing in the Service constitutes medical or dietary advice</li>
              <li>You are solely responsible for safe food preparation, cooking temperatures, storage, and allergy considerations</li>
              <li>We do not guarantee recipe or nutrition accuracy</li>
              <li>Service availability is not guaranteed</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">9. Limitation of Liability</h2>
          <div className="text-secondary leading-relaxed text-justify text-sm">
            <p>
              We are not liable for indirect, incidental, consequential, or punitive damages arising from Service use.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">10. Service Changes</h2>
          <div className="text-secondary leading-relaxed text-justify text-sm">
            <p>We may modify, suspend, or discontinue any part of the Service at any time without liability.</p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">11. Termination</h2>
          <div className="text-secondary leading-relaxed text-justify text-sm">
            <p>You may delete your account anytime. We may suspend accounts for violations.</p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">12. Indemnification</h2>
          <div className="text-secondary leading-relaxed text-justify text-sm">
            <p>
              You agree to indemnify and hold Budi harmless from claims arising from your use or violations.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">13. Severability</h2>
          <div className="text-secondary leading-relaxed text-justify text-sm">
            <p>
              If a provision is invalid, remaining terms still apply.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">14. Age Requirement</h2>
          <div className="text-secondary leading-relaxed text-justify text-sm">
            <p>
              The Service is not intended for users under 18.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">15. Changes to Terms</h2>
          <div className="text-secondary leading-relaxed text-justify text-sm">
            <p>
              We may update these Terms. Continued use constitutes acceptance.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">16. Governing Law & Disputes</h2>
          <div className="space-y-4 text-secondary leading-relaxed text-justify text-sm">
            <p>
              California law governs. Disputes are resolved via binding arbitration except for IP injunctive relief.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">17. Force Majeure</h2>
          <div className="text-secondary leading-relaxed text-justify text-sm">
            <p>We are not liable for failures caused by events beyond our reasonable control.</p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">18. Contact</h2>
          <div className="text-secondary leading-relaxed text-justify text-sm">
            <p>
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:support@hellobudi.app" className="text-lime hover:underline">
                support@hellobudi.app
              </a>{' '}
              or via the Contact Support feature in app settings.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
