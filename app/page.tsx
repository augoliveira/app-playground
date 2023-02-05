
import Demos from '#/ui/Components/demos/index';
import MainHome from '#/ui/Components/MainHome';
import { Contact } from '#/ui/Components/Contact/contact';
import { HeroSobre } from '#/ui/Components/HeroSobre';
import { Section } from '#/styles/styles';

export default function Page() {
  return (

      <>
      <Demos />
      <HeroSobre />
      <Section>
        <Contact />
      </Section>
      
      
      </>

  );
}
