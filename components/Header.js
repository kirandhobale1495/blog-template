import Link from 'next/link';

export default function Header() {
  return (
    <>
      <nav>
        <h1>
          <Link href='/'>
            <a>Kiran Dhobale</a>
          </Link>
        </h1>
        <div>
          <Link href='/about'>
            <a className='text'>About</a>
          </Link>
        </div>
      </nav>
      <style jsx>
        {`
          nav {
            width: auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            background-color: #dff;
          }
          nav a {
            margin-right: 1rem;
            text-decoration: none;
            color: var(--accents-3);
            font-weight: 600;
            letter-spacing: -0.02em;
            color: #000;
          }
          nav h1 a {
            font-weight: 800;
            font-size: 1.75rem;
            color: #000;
          }
          `
        }
      </style>
    </>
  )
}
