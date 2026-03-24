import { Hero } from '../components/Hero';
import { Narrative } from '../components/Narrative';
import { Analytics } from '../components/Analytics';
import { Candidates } from '../components/Candidates';
import { Timeline } from '../components/Timeline';
import { AspirationWall } from '../components/AspirationWall';
import { EducationHub } from '../components/EducationHub';
import { LiveStream } from '../components/LiveStream';
import { Committee } from '../components/Committee';
import { FAQ } from '../components/FAQ';
import { Partners } from '../components/Partners';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-telkom-dark via-telkom-black to-telkom-dark text-white font-sans selection:bg-cyan-glow selection:text-telkom-black">
      <Hero />
      <Narrative />
      <Analytics />
      <Candidates />
      <Timeline />
      <AspirationWall />
      <EducationHub />
      <LiveStream />
      <Committee />
      <FAQ />
      <Partners />
      <Footer />
    </div>
  );
}
