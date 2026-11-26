export const dynamic = "force-dynamic";

export default function Home() {
  const timestamp = new Date().toISOString();

  return (
    <main>
      <h1>ForgeDeploy Next.js SSR is working!</h1>

      <p>
        This page is rendered on the server for each request.
      </p>

      <div className="card">
        <h2>Deployment Status</h2>
        <p>Framework: Next.js</p>
        <p>Rendering: Server-side rendering</p>
        <p>Status: SUCCESS</p>
        <p>Server timestamp: {timestamp}</p>
      </div>

      <div className="card">
        <h2>API Test</h2>
        <a href="/api/health">Open API health endpoint</a>
      </div>

      <div className="card">
        <h2>Static Asset Test</h2>
        <a href="/test.txt">Open static file</a>
      </div>
    </main>
  );
}