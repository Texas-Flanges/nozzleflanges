/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      // WordPress plural /blogs -> new singular /blog
      {
        source: '/blogs',
        destination: '/blog',
        permanent: true,
      },
      // Old WordPress /about-us -> new /about
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      // Old WordPress /contact-us -> main Texas Flange contact
      {
        source: '/contact-us',
        destination: 'https://www.texasflange.com/contact-us/?ref=nozzleflanges',
        permanent: true,
      },
      // Root-level blog post slugs -> /blog/slug (old WordPress had posts at root)
      {
        source: '/understanding-pressure-vessel-nozzle-flange-design-and-selection',
        destination: '/blog/understanding-pressure-vessel-nozzle-flange-design-and-selection',
        permanent: true,
      },
      {
        source: '/best-practices-for-nozzle-flange-installation-in-heat-exchangers',
        destination: '/blog/best-practices-for-nozzle-flange-installation-in-heat-exchangers',
        permanent: true,
      },
      {
        source: '/api-605-nozzle-flanges-standards-and-application-guide',
        destination: '/blog/api-605-nozzle-flanges-standards-and-application-guide',
        permanent: true,
      },
      {
        source: '/manufacturing-quality-control-forging-basics',
        destination: '/blog/manufacturing-quality-control-forging-basics',
        permanent: true,
      },
      {
        source: '/multi-nozzle-vessel-design',
        destination: '/blog/multi-nozzle-vessel-design',
        permanent: true,
      },
      {
        source: '/retrofit-and-replacement-nightmares',
        destination: '/blog/retrofit-and-replacement-nightmares',
        permanent: true,
      },
      {
        source: '/thermal-cycling-and-fatigue-in-nozzle-flanges',
        destination: '/blog/thermal-cycling-and-fatigue-in-nozzle-flanges',
        permanent: true,
      },
      {
        source: '/api-standards-breakdown',
        destination: '/blog/api-standards-breakdown',
        permanent: true,
      },
      {
        source: '/bolt-systems-and-gasket-selection',
        destination: '/blog/bolt-systems-and-gasket-selection',
        permanent: true,
      },
      {
        source: '/corrosion-allowance-strategy',
        destination: '/blog/corrosion-allowance-strategy',
        permanent: true,
      },
      {
        source: '/exotic-materials-hastelloy-inconel-chrome-moly',
        destination: '/blog/exotic-materials-hastelloy-inconel-chrome-moly',
        permanent: true,
      },
      {
        source: '/hydrostatic-testing-best-practices',
        destination: '/blog/hydrostatic-testing-best-practices',
        permanent: true,
      },
      {
        source: '/installation-mistakes-and-field-solutions',
        destination: '/blog/installation-mistakes-and-field-solutions',
        permanent: true,
      },
      {
        source: '/making-the-inspector-happy-nozzle-flanges-and-asme-code',
        destination: '/blog/making-the-inspector-happy-nozzle-flanges-and-asme-code',
        permanent: true,
      },
      {
        source: '/nozzle-flange-vs-standard-weld-neck-which-one-wins',
        destination: '/blog/nozzle-flange-vs-standard-weld-neck-which-one-wins',
        permanent: true,
      },
      {
        source: '/the-chameleon-of-flanges-what-is-a-variable-body-nozzle',
        destination: '/blog/the-chameleon-of-flanges-what-is-a-variable-body-nozzle',
        permanent: true,
      },
      {
        source: '/what-is-a-nozzle-flange-and-why-your-pressure-vessel-needs-one',
        destination: '/blog/what-is-a-nozzle-flange-and-why-your-pressure-vessel-needs-one',
        permanent: true,
      },
      {
        source: '/why-some-nozzle-flanges-are-thicker-than-others',
        destination: '/blog/why-some-nozzle-flanges-are-thicker-than-others',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
