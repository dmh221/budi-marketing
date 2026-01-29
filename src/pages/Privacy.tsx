export default function Privacy() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-black mb-4 pt-8">Privacy Policy</h1>
      <p className="text-sm text-secondary mb-12">Last updated: {lastUpdated}</p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">Introduction</h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>
              Budi is a social cooking app. This privacy policy explains how we collect, use, and protect your information when you use our app.
            </p>
            <p>
              If you choose to use Budi, you agree to the collection and use of information as described in this policy. We will not use or share your information except as described below.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">Information We Collect</h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <div>
              <p className="font-semibold text-black mb-2">Information You Provide:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Phone number (for account creation and login)</li>
                <li>Profile information (name, profile photo if you choose)</li>
                <li>Recipes you save, create, or share (including photos and notes)</li>
                <li>Posts, comments, and interactions with friends</li>
                <li>Ingredient lists and grocery lists</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-black mb-2">Information We Collect Automatically:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>App usage data (features used, time spent)</li>
                <li>Device information (device type, operating system version)</li>
                <li>Error logs and crash reports to improve the app</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-black mb-2">From Third Parties:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Contact information (only with your permission) to help you find friends</li>
                <li>Recipe information from websites when you save recipe links</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">How We Use Your Information</h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>We use your information to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Provide the core Budi experience (recipe saving, social sharing, ingredient tracking)</li>
              <li>Recommend recipes based on your cooking history and preferences</li>
              <li>Connect you with friends and enable social features</li>
              <li>Improve the app and fix bugs</li>
              <li>Send important account updates</li>
            </ul>
            <p className="font-semibold text-black">We do not sell your personal information to anyone.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">Information Sharing</h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <div>
              <p className="font-semibold text-black mb-2">What We Share:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Recipe posts and interactions that you choose to share with friends</li>
                <li>Content when you specifically decide to share recipes with other users</li>
              </ul>
            </div>

            <p>
              <span className="font-semibold text-black">Service Providers:</span> We work with third-party companies to operate Budi, including cloud storage, analytics, and authentication services. These companies can only access your information to perform services for us and cannot use it for other purposes.
            </p>

            <p>
              <span className="font-semibold text-black">Legal Requirements:</span> We may share information if required by law or to protect our users' safety.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">Your Privacy Controls</h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <div>
              <p className="font-semibold text-black mb-2">Managing Your Account:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>View and edit your profile information</li>
                <li>Delete individual recipes, posts, or ingredients</li>
                <li>Delete your entire account and all data</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-black mb-2">Privacy Settings:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Control who can find and connect with you</li>
                <li>Choose whether recipes are private or shared with friends</li>
                <li>Keep ingredient lists private</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-black mb-2">Your Rights:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Request a copy of your data</li>
                <li>Ask us to delete your information</li>
                <li>Opt out of promotional communications</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">Data Security and Retention</h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>We use industry-standard security measures to protect your information, including data encryption and secure authentication systems. However, no method of internet transmission is 100% secure.</p>
            <p>
              <span className="font-semibold text-black">Data Retention:</span> We keep your data while your account is active. Most data is deleted within 30 days of account deletion. Some information may be retained longer if required by law.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">Children's Privacy</h2>
          <div className="text-secondary leading-relaxed">
            <p>Budi is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will delete such information immediately.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">Third-Party Services</h2>
          <div className="text-secondary leading-relaxed">
            <p>The app uses third-party services that may collect information used to identify you. This includes Google for AI features and recipe processing.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">External Links</h2>
          <div className="text-secondary leading-relaxed">
            <p>Budi may contain links to recipe websites and other external sites. We are not responsible for the privacy practices of these third-party sites.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">Changes to This Policy</h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy in the app, or sending a notification through the app.</p>
            <p>Your continued use of Budi after changes are posted constitutes acceptance of the updated policy.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">Contact Us</h2>
          <div className="text-secondary leading-relaxed">
            <p>
              If you have questions about this Privacy Policy or your personal information, please contact us at:{' '}
              <a href="mailto:privacy@hellobudi.app" className="text-lime hover:underline">
                privacy@hellobudi.app
              </a>{' '}
              or via the "Contact Support" feature in the app settings.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">Your California Privacy Rights (CCPA)</h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Right to know what personal information we collect and how it's used</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale of personal information (we don't sell your data)</li>
              <li>Right to non-discrimination for exercising your privacy rights</li>
            </ul>
            <p>To exercise these rights, contact us using the information above.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-lime mb-4">European Users (GDPR)</h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>If you are in the European Union, you have additional rights under the General Data Protection Regulation:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span className="font-semibold text-black">Legal Basis:</span> We process your data based on consent and legitimate interests
              </li>
              <li>
                <span className="font-semibold text-black">Data Protection Officer:</span> Contact{' '}
                <a href="mailto:privacy@hellobudi.app" className="text-lime hover:underline">
                  privacy@hellobudi.app
                </a>{' '}
                for data protection inquiries
              </li>
              <li>
                <span className="font-semibold text-black">Supervisory Authority:</span> You may file complaints with your local data protection authority
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
