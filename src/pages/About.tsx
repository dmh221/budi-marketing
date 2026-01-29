export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-xl font-bold text-black mb-8 pt-24 uppercase">About Budi</h1>

      <section className="mb-12">
        <h2 className="text-base font-semibold text-black mb-4 uppercase">Our Mission</h2>
        <div className="space-y-6 text-secondary leading-relaxed text-justify text-sm">
          <p>
            Cooking has become cognitively expensive. Budi's mission is to change that by providing the infrastructure to make cooking at home easy, supportive, and sustainable.
          </p>

          <div>
            <h3 className="text-base font-semibold text-black mb-3">Connect over food</h3>
            <p>
              People have always connected over food. Now, you can connect over cooking at home. Share what you cook with your friends. Find inspiration from what they cook.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-black mb-3">Make Healthy Cooking Easy</h3>
            <p>
              Food is not just a lifestyle choice—it sits at the intersection of daily behavior and long-term outcomes.
            </p>
            <p>
              Making healthier choices becomes easier when you can see what actually works in real kitchens. Budi's mission is to make cooking supportive meals easy and sustainable.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-base font-semibold text-black mb-4 uppercase">Our Name</h2>
        <div className="space-y-6 text-secondary leading-relaxed text-justify text-sm">
          <p>
            Budi is named after an orangutan rescued by the International Animal Rescue (IAR) in December 2014 after being illegally kept as a pet for the first year of his life. Thanks to the IAR, Budi recovered and has since been released into the wild.
          </p>
          <p>
            Orangutans are critically endangered—the primary threat is large-scale deforestation. When habitat disappears, orangutans are killed and babies left alone or captured for the illegal pet trade. Rescued orangutans, like Budi, suffer psychological and physical trauma and require long-term rehabilitation.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-base font-semibold text-black mb-4 uppercase">How you can help</h2>
        <div className="space-y-6 text-secondary leading-relaxed text-justify text-sm">
          <p>
            The most effective ways to protect orangutans are surprisingly direct:
          </p>
          <p>
            Support conservation groups that patrol forests and rescue/rehabilitate displaced orangutans: the{' '}
            <a href="https://www.internationalanimalrescue.org" target="_blank" rel="noopener noreferrer" className="text-lime hover:underline">
              International Animal Rescue
            </a>,{' '}
            <a href="https://www.orangutans.com" target="_blank" rel="noopener noreferrer" className="text-lime hover:underline">
              Borneo Orangutan Survival Foundation
            </a>,{' '}
            <a href="https://www.sumatranorangutan.org" target="_blank" rel="noopener noreferrer" className="text-lime hover:underline">
              Sumatran Orangutan Society
            </a>, and{' '}
            <a href="https://www.theorangutanproject.org" target="_blank" rel="noopener noreferrer" className="text-lime hover:underline">
              The Orangutan Project
            </a>.
          </p>
          <p>
            Reduce consumption of ultra-processed foods. Global demand for palm oil drives deforestation, and ultra-processed foods require industrially-produced crops, including palm oil, grown at a massive scale.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-base font-semibold text-black mb-4 uppercase">The Connection to Whole Ingredients</h2>
        <div className="space-y-6 text-secondary leading-relaxed text-justify text-sm">
          <p>
            Palm oil is in around half of all packaged foods. While certified sustainable palm oil exists, it doesn't meaningfully protect orangutan habitat. The larger issue is the continued loss of rainforest.
          </p>
          <p>
            By cooking with whole ingredients, you naturally reduce your consumption of ultra-processed foods—and the ingredients and supply chains that harm orangutans.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-base font-semibold text-black mb-4 uppercase">Join Our Community</h2>
        <div className="space-y-4 text-secondary leading-relaxed text-justify text-sm">
          <p>
            Budi is more than just an app; it's a place to share, learn, and inspire. Thank you for being here.
          </p>
        </div>
      </section>
    </div>
  );
}
