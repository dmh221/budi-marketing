export default function Privacy() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-xl font-bold text-black mb-4 pt-24 uppercase">Privacy Policy</h1>
      <p className="text-xs text-secondary mb-12">Last updated: {lastUpdated}</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">Introduction</h2>
          <div className="space-y-4 text-secondary leading-relaxed text-justify text-sm">
            <p>
              Budi is a social cooking app. This Privacy Policy explains how we collect, use, and protect your information when you use our app.
            </p>
            <p>
              Budi is operated by the Budi application team and is based in the United States.
            </p>
            <p>
              If you choose to use Budi, you agree to the collection and use of information as described in this policy. We will not use or share your information except as described below.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">Information We Collect</h2>
          <div className="space-y-4 text-secondary leading-relaxed text-justify text-sm">
            <div>
              <p className="font-semibold text-black mb-2">Information You Provide</p>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Phone number (for account creation and login)</li>
                <li>Profile information (name, profile photo if you choose)</li>
                <li>Recipes you save, create, or share (including photos and notes)</li>
                <li>Posts, comments, and interactions with friends</li>
                <li>Ingredient lists and grocery lists</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-black mb-2">Information We Collect Automatically</p>
              <ul className="list-disc list-inside space-y-0.5">
                <li>App usage data (features used, time spent)</li>
                <li>Device information (device type, operating system version)</li>
                <li>Error logs and crash reports to improve the app</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-black mb-2">From Third Parties</p>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Contact information from your device contacts (only if you explicitly grant permission) to help you find friends</li>
                <li>Recipe information from websites when you save recipe links — we may automatically retrieve and process recipe content from that webpage to create a usable recipe inside the app</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">How We Use Your Information</h2>
          <div className="space-y-4 text-secondary leading-relaxed text-justify text-sm">
            <p>We use your information to:</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Provide the core Budi experience (recipe saving, social sharing, ingredient tracking)</li>
              <li>Recommend recipes based on your cooking history and preferences</li>
              <li>Connect you with friends and enable social features</li>
              <li>Improve the app and fix bugs</li>
              <li>Send important account updates</li>
            </ul>
            <p>Some features use AI systems to analyze recipe content, generate images, or suggest improvements. AI outputs may be imperfect or inaccurate.</p>
            <p className="font-semibold text-black">We do not sell your personal information.</p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">Information Sharing</h2>
          <div className="space-y-4 text-secondary leading-relaxed text-justify text-sm">
            <div>
              <p className="font-semibold text-black mb-2">What We Share</p>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Recipe posts and interactions that you choose to share with friends</li>
                <li>Content when you specifically decide to share recipes with other users</li>
              </ul>
            </div>

            <p>
              <span className="font-semibold text-black">Service Providers:</span> We work with third-party companies to operate Budi, including cloud hosting, database providers, analytics providers, crash reporting tools, authentication providers, and AI processing services. These companies may access your information only to perform services for us and may not use it for other purposes.
            </p>

            <p>
              <span className="font-semibold text-black">Legal Requirements:</span> We may share information if required by law or to protect users, safety, rights, or property.
            </p>

            <p>
              <span className="font-semibold text-black">Business Transfers:</span> If Budi is involved in a merger, acquisition, asset sale, or restructuring, your information may be transferred as part of that transaction.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">Your Privacy Controls</h2>
          <div className="space-y-4 text-secondary leading-relaxed text-justify text-sm">
            <div>
              <p className="font-semibold text-black mb-2">Managing Your Account</p>
              <ul className="list-disc list-inside space-y-0.5">
                <li>View and edit your profile information</li>
                <li>Delete individual recipes, posts, or ingredients</li>
                <li>Delete your entire account and associated data</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-black mb-2">Privacy Settings</p>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Control who can find and connect with you</li>
                <li>Choose whether recipes are private or shared with friends</li>
                <li>Keep ingredient lists private</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-black mb-2">Your Rights</p>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Request a copy of your data</li>
                <li>Ask us to delete your information</li>
                <li>Opt out of promotional communications</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">Data Security and Retention</h2>
          <div className="space-y-4 text-secondary leading-relaxed text-justify text-sm">
            <p>We use industry-standard security measures including encryption and secure authentication systems. However, no method of transmission over the internet is 100% secure.</p>
            <p>
              <span className="font-semibold text-black">Data Retention:</span> We keep your data while your account is active. Most data is deleted within 30 days of account deletion unless retention is required by law.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">International Data Transfers</h2>
          <div className="text-secondary leading-relaxed text-justify text-sm">
            <p>Your information may be processed and stored in the United States or other countries where our service providers operate. These countries may have different data protection laws than your country of residence.</p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">Children's Privacy</h2>
          <div className="text-secondary leading-relaxed text-justify text-sm">
            <p>Budi is not intended for children under 18. We do not knowingly collect personal information from children under 18. If we learn that such information has been collected, we will delete it.</p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">Third-Party Services</h2>
          <div className="text-secondary leading-relaxed text-justify text-sm">
            <p>The app uses third-party services that may collect information used to identify you, including AI providers for recipe processing, image generation, and nutrition insights.</p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">External Links</h2>
          <div className="text-secondary leading-relaxed text-justify text-sm">
            <p>Budi may link to external recipe websites and other sites. We are not responsible for their privacy practices.</p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">Do Not Track Signals</h2>
          <div className="text-secondary leading-relaxed text-justify text-sm">
            <p>We currently do not respond to "Do Not Track" browser signals because there is no consistent industry standard for compliance.</p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">Changes to This Policy</h2>
          <div className="space-y-4 text-secondary leading-relaxed text-justify text-sm">
            <p>We may update this Privacy Policy from time to time. We will notify you of material changes through the app. Continued use after updates constitutes acceptance.</p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">Contact Us</h2>
          <div className="text-secondary leading-relaxed text-justify text-sm">
            <p>
              If you have questions about this Privacy Policy or your personal information, contact:{' '}
              <a href="mailto:support@hellobudi.app" className="text-lime hover:underline">
                support@hellobudi.app
              </a>{' '}
              or via Contact Support in app settings.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">California Privacy Rights (CCPA)</h2>
          <div className="space-y-4 text-secondary leading-relaxed text-justify text-sm">
            <p>California residents have rights to know, delete, and opt out of sale (we do not sell data), and to non-discrimination when exercising rights.</p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">European Users (GDPR)</h2>
          <div className="space-y-4 text-secondary leading-relaxed text-justify text-sm">
            <p>EU users have additional rights under GDPR.</p>
            <p>Legal basis: consent and legitimate interests.</p>
            <p>
              Contact:{' '}
              <a href="mailto:support@hellobudi.app" className="text-lime hover:underline">
                support@hellobudi.app
              </a>{' '}
              for data protection inquiries.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
