export async function GET() {
  const names = ['Hello', 'World'];

  return Response.json(names);
}