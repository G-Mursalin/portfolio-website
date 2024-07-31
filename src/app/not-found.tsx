// NextJS
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="container not-found">
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__subtitle">Page Not Found</h2>
      <p className="not-found__description">
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/">
        <button className="button button--flex">Go Back Home</button>
      </Link>
    </div>
  );
}
