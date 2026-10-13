import { socialLinks } from "../../data/portfolio";

export default function SocialLinks({ className }) {
  return (
    <div className={className}>
      {socialLinks.map((link) => {
        const Icon = link.Icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
          >
            <Icon aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
