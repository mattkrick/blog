import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Metadata } from 'next'
import { Section } from '@/components/ui/section'
import { GlobeIcon, PhoneIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RESUME_DATA } from '@/data/resume-data'
import SocialIcon from '../../components/social-icons'

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
}

export default function Page() {
  return (
    <main className="container">
      <section className="">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="text-muted-foreground max-w-md text-pretty font-mono text-sm">
              {RESUME_DATA.about}
            </p>
            <p className="text-muted-foreground max-w-md items-center text-pretty font-mono text-xs">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" size={3} />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="text-muted-foreground flex gap-x-1 pt-1 font-mono text-sm print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button className="size-8" variant="outline" size="icon" asChild>
                  <SocialIcon kind="mail" href={`mailto:${RESUME_DATA.contact.email}`} size={5} />
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button className="size-8" variant="outline" size="icon" asChild>
                  <PhoneIcon href={`tel:${RESUME_DATA.contact.tel}`} className="size-4" />
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button key={social.name} className="size-8" variant="outline" size="icon" asChild>
                  <SocialIcon kind={social.icon} href={social.url} size={5} />
                </Button>
              ))}
            </div>
            <div className="text-muted-foreground hidden flex-col gap-x-1 font-mono text-sm print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback delayMs={2000}>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="pt-6 text-xl font-bold print:pt-1 print:text-lg">About</h2>
          <p className="text-muted-foreground text-pretty font-mono text-sm print:text-xs">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="pt-6 text-xl font-bold print:pt-1 print:text-lg">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company} className="pb-2 last:pb-0">
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-lg print:text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      {!work.link ? (
                        work.company
                      ) : (
                        <a className="hover:underline" href={work.link}>
                          {work.company}
                        </a>
                      )}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {work.areas?.map((area) => {
                    return (
                      <div className="" key={area.title}>
                        <h4 className="pt-2 font-mono text-base leading-none print:text-sm">
                          {area.title}
                        </h4>
                        <ul className="list-disc pl-4 font-mono text-sm print:text-xs">
                          {area.bullets.map((bullet) => {
                            return <li key={bullet}>{bullet}</li>
                          })}
                        </ul>
                      </div>
                    )
                  })}

                  <h4 className="font-mono text-sm leading-none">{work.title}</h4>
                </CardContent>
              </Card>
            )
          })}
        </Section>
        <Section>
          <h2 className="pt-6 text-xl font-bold print:pt-1 print:text-lg">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">{education.school}</h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>{education.degree}</CardContent>
              </Card>
            )
          })}
        </Section>
        <Section>
          <h2 className="pt-6 text-xl font-bold print:pt-1 print:text-lg">Skills</h2>
          <div className="flex flex-wrap justify-center gap-1 print:gap-0">
            {RESUME_DATA.skills.map((skill) => {
              return (
                <Badge key={skill} className="">
                  {skill}
                </Badge>
              )
            })}
          </div>
        </Section>
      </section>
    </main>
  )
}
