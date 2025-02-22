import Hero from '@/components/marketing/Home/Hero';
import Perks from '@/components/marketing/Home/perks';
import Platform from '@/components/marketing/Home/platform';
import Portfolio from '@/components/marketing/Home/portfolio';
import TimeLine from '@/components/marketing/Home/timeline';
import Work from '@/components/marketing/Home/work';

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <TimeLine />
      <Platform />
      <Portfolio />
      <Perks />
    </main>
  );
}
