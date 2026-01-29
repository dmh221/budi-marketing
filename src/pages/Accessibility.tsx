export default function Accessibility() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-xl font-bold text-black mb-4 pt-24 uppercase">Accessibility Statement</h1>
      <p className="text-xs text-secondary mb-12">Last updated: {lastUpdated}</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">Our Commitment</h2>
          <div className="space-y-3 text-secondary leading-relaxed text-justify text-sm">
            <p>
              Budi is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">Conformance Status</h2>
          <div className="space-y-3 text-secondary leading-relaxed text-justify text-sm">
            <p>
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and user-friendly for everyone.
            </p>
            <p>
              Our website and mobile application are designed to be compatible with assistive technologies, including screen readers, keyboard navigation, and voice recognition software.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">Accessibility Features</h2>
          <div className="space-y-3 text-secondary leading-relaxed text-justify text-sm">
            <p>Our site and app include the following accessibility features:</p>
            <ul className="list-disc list-inside space-y-0.5 mt-2">
              <li>Semantic HTML structure for proper content hierarchy</li>
              <li>Alternative text for informational images</li>
              <li>Sufficient color contrast ratios (minimum 4.5:1 for normal text)</li>
              <li>Keyboard navigation support for all interactive elements</li>
              <li>ARIA labels and attributes for enhanced screen reader support</li>
              <li>Responsive design that works across devices and screen sizes</li>
              <li>Clear focus indicators for keyboard navigation</li>
              <li>Touch targets of adequate size (minimum 44×44 pixels)</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">Known Limitations</h2>
          <div className="space-y-3 text-secondary leading-relaxed text-justify text-sm">
            <p>
              Despite our efforts to ensure accessibility, there may be some limitations. We are actively working to identify and remediate any issues. If you encounter any accessibility barriers, please let us know.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">Third-Party Content</h2>
          <div className="space-y-3 text-secondary leading-relaxed text-justify text-sm">
            <p>
              Some content on our platform may come from third-party sources, including user-generated recipes and images from external websites. While we strive to make all content accessible, we cannot guarantee the accessibility of third-party content.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">Feedback and Contact</h2>
          <div className="space-y-3 text-secondary leading-relaxed text-justify text-sm">
            <p>
              We welcome your feedback on the accessibility of Budi. If you encounter accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <ul className="list-disc list-inside space-y-0.5 mt-2">
              <li>
                Email:{' '}
                <a href="mailto:support@hellobudi.app" className="text-lime hover:underline">
                  support@hellobudi.app
                </a>
              </li>
              <li>Subject line: "Accessibility Feedback"</li>
            </ul>
            <p className="mt-3">
              We aim to respond to accessibility feedback within 5 business days and to propose a solution within 10 business days.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">Assessment and Testing</h2>
          <div className="space-y-3 text-secondary leading-relaxed text-justify text-sm">
            <p>
              Budi has been tested using a combination of automated accessibility testing tools and manual evaluation with assistive technologies, including:
            </p>
            <ul className="list-disc list-inside space-y-0.5 mt-2">
              <li>Automated WCAG 2.1 compliance scanning</li>
              <li>Manual keyboard navigation testing</li>
              <li>Screen reader compatibility testing</li>
              <li>Color contrast verification</li>
            </ul>
            <p className="mt-3">
              This statement was last reviewed and updated on {lastUpdated}.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-black mb-2 uppercase">Formal Complaints</h2>
          <div className="space-y-3 text-secondary leading-relaxed text-justify text-sm">
            <p>
              If you are not satisfied with our response to your accessibility concern, you may file a complaint with the U.S. Department of Justice or your local civil rights enforcement agency.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
