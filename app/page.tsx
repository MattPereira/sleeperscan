import Image from "next/image";

// async function get

export default async function Home() {
  return (
    <main className="">
      <div className="flex justify-center my-10">
        <button className="btn btn-primary">One</button>
        <button className="btn btn-secondary">Two</button>
        <button className="btn btn-accent btn-outline">Three</button>
      </div>
    </main>
  );
}
