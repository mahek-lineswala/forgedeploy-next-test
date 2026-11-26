export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({
    message: "ForgeDeploy Next.js API is working!",
    status: "healthy",
    framework: "Next.js",
    timestamp: new Date().toISOString()
  });
}