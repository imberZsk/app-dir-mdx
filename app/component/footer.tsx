import { footerConfig } from '@config/footer-config'
import SocialIcon from './social-icons'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="pb-[20px]">
      <div className="mt-10 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          {footerConfig.email && (
            <SocialIcon
              kind="mail"
              href={`mailto:${footerConfig.email}`}
              size={6}
            />
          )}
          {footerConfig.github && (
            <SocialIcon kind="github" href={footerConfig.github} size={6} />
          )}
          {footerConfig.facebook && (
            <SocialIcon kind="facebook" href={footerConfig.facebook} size={6} />
          )}
          {footerConfig.youtube && (
            <SocialIcon kind="youtube" href={footerConfig.youtube} size={6} />
          )}
          {footerConfig.linkedin && (
            <SocialIcon kind="linkedin" href={footerConfig.linkedin} size={6} />
          )}
          {footerConfig.x && (
            <SocialIcon kind="x" href={footerConfig.x} size={6} />
          )}
          {footerConfig.instagram && (
            <SocialIcon
              kind="instagram"
              href={footerConfig.instagram}
              size={6}
            />
          )}
          {footerConfig.threads && (
            <SocialIcon kind="threads" href={footerConfig.threads} size={6} />
          )}
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{footerConfig.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{footerConfig.title}</Link>
        </div>
      </div>
    </footer>
  )
}
