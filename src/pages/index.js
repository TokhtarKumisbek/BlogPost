import Image from "next/image";
import Link from 'next/link';

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-50">
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <nav className="flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            FAQ
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Privacy
          </Link>
        </nav>
        <Link
          href="/get-started"
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Get Started
        </Link>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center gap-6 px-6 py-12">
        <h1 className="text-4xl font-bold">Welcome to our Platform</h1>
        <p className="max-w-[600px] text-lg text-gray-400">
          Discover the best tools and resources to help you achieve your goals.
        </p>
        <Link
          href="/get-started"
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Get Started
        </Link>
      </main>
      <footer className="flex items-center justify-between px-6 py-4 border-t border-gray-800">
        <div className="flex items-center gap-4">
          <Link href="#" className="text-gray-400 hover:text-gray-300" prefetch={false}>
            <ContactIcon className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-300" prefetch={false}>
            <PhoneIcon className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-300" prefetch={false}>
            <SignalIcon className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-300" prefetch={false}>
            <InstagramIcon className="h-5 w-5" />
          </Link>
        </div>
        <p className="text-xs text-gray-500">&copy; 2024 Acme Inc. All rights reserved.</p>
      </footer>
    </div>
  )
}

function ContactIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function SignalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  )
}