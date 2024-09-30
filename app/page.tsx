import axios from 'axios';

async function getNames(): Promise<string[]> {
  const names = await axios.get(`${process.env.DOMAIN}/api/names`).then((res) => res.data);
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
