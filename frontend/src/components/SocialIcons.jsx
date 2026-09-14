export function InstagramIcon({ className = 'w-4 h-4', id = 'instaGrad' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke={`url(#${id})`} strokeWidth="2.2" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke={`url(#${id})`} strokeWidth="2.2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill={`url(#${id})`} />
    </svg>
  )
}

export function WhatsAppIcon({ className = 'w-4 h-4', color = '#25D366' }) {
  return (
    <svg viewBox="0 0 24 24" fill={color} className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.677.15-.2.301-.777.979-.953 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.301.301-.502.101-.201.05-.376-.025-.527-.075-.15-.677-1.632-.928-2.235-.245-.588-.493-.509-.677-.518l-.578-.01c-.2 0-.526.075-.802.376-.275.301-1.052 1.028-1.052 2.508 0 1.48 1.077 2.909 1.228 3.11.15.201 2.12 3.237 5.136 4.54.717.311 1.278.496 1.714.635.72.229 1.375.197 1.894.12.578-.087 1.78-.727 2.03-1.43.251-.703.251-1.305.176-1.43-.075-.125-.276-.201-.577-.351z" />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.406A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.63 0-3.15-.466-4.45-1.27l-.32-.198-2.96.836.84-2.887-.216-.345A8.127 8.127 0 0 1 3.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z" />
    </svg>
  )
}

export function LinkedInIcon({ className = 'w-4 h-4', color = '#0A66C2' }) {
  return (
    <svg viewBox="0 0 24 24" fill={color} className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3z" />
    </svg>
  )
}

export function EmailIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M1.636 21H5.455V11.73L0 7.64v11.726c0 .904.732 1.636 1.636 1.636z" />
      <path fill="#34A853" d="M22.364 21H18.545V11.73L24 7.64v11.726c0 .904-.732 1.636-1.636 1.636z" />
      <path fill="#EA4335" d="M18.545 4.91v6.82L12 16.64 5.455 11.73V4.91L12 9.82l6.545-4.91z" />
      <path fill="#FBBC05" d="M0 7.636V5.455c0-2.023 2.31-3.178 3.927-1.964L5.455 4.91v6.82L0 7.636z" />
      <path fill="#C5221F" d="M24 7.636V5.455c0-2.023-2.31-3.178-3.927-1.964L18.545 4.91v6.82L24 7.636z" />
    </svg>
  )
}

export const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/motionlabs.work/?hl=en',
    icon: InstagramIcon,
    handle: '@motionlabs.work',
    badge: 'Daily Edits',
    color: '#E4405F',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919310106145?text=Hi%20Motion%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project.',
    icon: WhatsAppIcon,
    handle: '+91 93101 06145',
    badge: 'Quick Chat',
    color: '#25D366',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/motion-labs-993122437',
    icon: LinkedInIcon,
    handle: 'Motion Labs',
    badge: 'Agency Network',
    color: '#0A66C2',
  },
]
