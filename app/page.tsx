async function getNames(): Promise<string[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const names = await fetch(baseUrl + '/api/names').then((res) => res.json());

  return names;
}

export default async function Home() {
  const names = await getNames();

  return (
    <div className="h-screen flex items-center justify-center">
      {names.map((name) => (
        <p key={name}>{name}</p>
      ))}
    </div>
  );
}
