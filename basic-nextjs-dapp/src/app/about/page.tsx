import Head from 'next/head';

const About = () => {
  return (
    <div>
      <Head>
        <title>Viction Kit - About</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-4 text-center">About Viction Kit</h1>
        <p className="mt-4 text-lg text-center max-w-2xl">
          Viction Kit is a vibrant community dedicated to providing tools, kits, and knowledge for blockchain development. Our mission is to empower developers with the resources they need to create innovative blockchain applications.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="mt-4 text-lg text-center max-w-2xl">
          At Viction Kit, we strive to be the go-to resource for blockchain developers. We provide comprehensive tools and kits that streamline the development process, along with educational resources that keep our community up-to-date with the latest in blockchain technology.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">What We Offer</h2>
        <ul className="list-disc list-inside mt-4 text-lg text-left max-w-2xl">
          <li>Ready-to-use development kits</li>
          <li>Detailed documentation and tutorials</li>
          <li>Community forums and support</li>
          <li>Regular webinars and workshops</li>
          <li>Latest news and updates on blockchain technology</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Join Our Community</h2>
        <p className="mt-4 text-lg text-center max-w-2xl">
          Whether you are a seasoned blockchain developer or just getting started, Viction Kit has something to offer you. Join our community today and take your blockchain development skills to the next level.
        </p>
      </main>
    </div>
  );
};

export default About;