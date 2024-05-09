
export default async function Home() {
  const froguins = await sql `SELECT * FROM froguins`
  return (
    <div>
      <h1>People</h1>
      <h3>Bob</h3>
      <p>this is a description</p>
      <h3>Stacey</h3>
      <p>This is another description</p>
      <h3>Howard</h3>
      <p>What a strange name</p>
    </div>
  )
}

