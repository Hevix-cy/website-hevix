import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import flutter from '@/images/brands/flutter.svg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Phobia', flutter],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
]

function Clients() {
  const stats = [
    { id: 1, name: 'of experience', value: '12 Years' },
    { id: 2, name: 'in the domain', value: 'Experts' },
    { id: 3, name: 'on restults', value: 'Focus' },
    { id: 4, name: 'with clients is important to us', value: 'Teamwork' },
  ] 
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-400">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}



function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Development"
        title="Software Development and Granting the License to Use the Software"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Granting the license to use the following solutions:
        </p>
      </SectionIntro>
      <Container className="mt-16">
  <div className="lg:grid lg:grid-cols-3 lg:gap-4">
    {/* Row 1 */}
    <div>
      <List>
        <ListItem title="Core platform">
        </ListItem>
        <ListItem title="Cash Desk">
        </ListItem>
        <ListItem title="Affiliate & traffic generated tool">
        </ListItem>
        <ListItem title="Marketing & Segmentation tool">
        </ListItem>
        <ListItem title="CRM & User Management tool">
        </ListItem>
      </List>
    </div>
    {/* Row 2 */}
    <div>
      <List>
        <ListItem title="CRM and ERP Solutions">
        </ListItem>
        <ListItem title="Cloud Apps Development & Migration">
        </ListItem>
        <ListItem title="Custom Web, Mobile and Desktop Apps Development">
        </ListItem>
        <ListItem title="Software QA & Testing">
        </ListItem>
        <ListItem title="Application Maintenance and Support">
        </ListItem>
      </List>
    </div>
     {/* Row 3 */}
    <div>
      <List>
      <ListItem title="Application Maintenance and Support">
        </ListItem>
        <ListItem title="Application Security and IP Protection">
        </ListItem>
        <ListItem title="IT-Consulting">
        </ListItem>
        <ListItem title="UI/UX Design Development">
        </ListItem>
        <ListItem title="Custom content management system (CMS) development">
        </ListItem>
      </List>
    </div>
  </div>
</Container>
    </>
  )
}

function Development() {
  return (
    <>
      <SectionIntro
        eyebrow="Service"
        title="Supporting Consulting Services"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Empower your business with our expert consulting services, complemented by the privileged licensing of our trusted trademarks, to enhance your brand&apos;s credibility and market presence.
        </p>
      </SectionIntro>
      <Container className="mt-16">
  <div className="lg:grid lg:grid-cols-3 lg:gap-4">
    {/* Row 1 */}
    <div>
      <List>
        <ListItem title="Choosing company jurisdiction">
        </ListItem>
        <ListItem title="Licensing issues">
        </ListItem>
        <ListItem title="Trademark License">
        </ListItem>
      </List>
    </div>
    {/* Row 2 */}
    <div>
      <List>
        <ListItem title="Payment options for exact product region">
        </ListItem>
        <ListItem title="Payment networks integration">
        </ListItem>
        <ListItem title="Choosing a platform provider">
        </ListItem>
      </List>
    </div>
     {/* Row 3 */}
    <div>
      <List>
      <ListItem title="Choosing providers selection">
        </ListItem>
        <ListItem title="Optimization of business processes">
        </ListItem>
        <ListItem title="Preparing the company for horizontal and vertical scaling">
        </ListItem>
      </List>
    </div>
  </div>
</Container>
    </>
  )
}
const stats = [
  { id: 1, name: 'of experience', value: '12 Years' },
  { id: 2, name: 'in the domain', value: 'Experts' },
  { id: 3, name: 'on restults', value: 'Focus' },
  { id: 4, name: 'effective and open', value: 'Communication' },
]



export const metadata = {
  description:
    'Hevix Ltd - Software development and licensing',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Software development and licensing
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          Hevix Ltd specializes in premier software development and comprehensive software licensing services. Our offerings extend to providing clients with the rights to utilize our distinctive software and trademark properties. Additionally, we are adept at delivering tailored modifications and meticulous audits of diverse software systems to ensure they meet the highest standards of performance and security.
          </p>
          <a href="/contact" className="mt-8 inline-block">
          <button className="inline-flex rounded-full px-10 py-2.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800">
      Contact us
    </button>
    </a>

        </FadeIn>
      
      </Container>

      <Clients />
      <Services />
      <Development />

      <ContactSection />
    </>
  )
}
