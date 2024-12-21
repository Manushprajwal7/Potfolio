import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Resume } from '@/components/resume'

export default function Home() {
  return (<>
    <Hero />
    <About />
    <Projects />
    <Resume />
    <Contact />
  </>);
}

