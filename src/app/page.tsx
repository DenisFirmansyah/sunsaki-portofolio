'use client'

import Image from "next/image";
import { Footer } from "./component/footer";
import { NavBar } from "./component/navbar";
import Link from "next/link";
import { useEffect, useState } from "react";

type Project = {
  id: number,
  name: string,
  body: string,
  type: string
}

export default function Home() {
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch ('/data.json');
      const data = await res.json();
      setData(data);
    }

    fetchData()
  }, [])

  return (
    <div className="bg-blue-950">
      <NavBar />
      <main className="px-5 py-12 border-t-1 sm:text-xl md:text-2xl text-gray-300">
        <section className="sm:flex">
          <div className="px-10 mb-4 sm::mb-0">
            <Image src="/images/profile.jpg" alt="" width={300} height={100}></Image>
          </div>
          <div className="">
            <p>Hi, I&apos;m</p>
            <h2 className="text-4xl">SunSaKi</h2>
            <p>A College Student who has interest in 2D Illustrator, Narrative Designer, Game Developer, and Front-End Developer <br /><br />Let me give you a tour to My World!</p>
          </div>
        </section>
        <div className="w-full max-w-2xl mx-auto pt-12 mb-12 border-b-1 border-b-white"></div>
        <section>
          <h1 className="text-center text-5xl mb-5">Know About Me</h1>
          <div className="sm:flex">
            <Image src="/images/photo-transparent.png" alt="" width={400} height={100} className="px-10"/>
            <div className="max-w-4xl">
              <p>I am an individual who is oriented and has a strong interest in technology and creative fields. My good skills can produce something satisfying for those who enjoy my work, and also myself.</p>
              <br />
              <ul>
                <li><strong className="text-white">Full Name:</strong> Denis Firmansyah</li>
                <li><strong className="text-white">Age:</strong> 20</li>
                <li><strong className="text-white">City:</strong> West Bandung, West Java, Indonesia</li>
                <li><strong className="text-white">Last Education:</strong> UIN SGD Bandung</li>
                <li><strong className="text-white">Profession:</strong> Traditional 2D Illustrator, Digital 2D Illustrator, 3D Designer, Narrative Designer, Game Programmer, Front-End Developer</li>
              </ul>
              <br />
              <p>See my Resume <Link href="https://drive.google.com/file/d/13JWxZufi6pA3OqZ2HGj9Kb7mNdYbQVfR/view?usp=sharing" className="underline text-white hover:text-gray-300">here</Link></p>
            </div>
          </div>
        </section>
        <div className="w-full max-w-2xl mx-auto pt-12 mb-12 border-b-1 border-b-white"></div>
        <section className="">
          <h1 className="text-center text-3xl sm:text-5xl mb-5">Behold My Power</h1>
          <div className="grid sm:grid-cols-3 gap-5 w-full mx-auto">
            <div className="border-1 rounded-sm p-4">
              <h2>JavaScript</h2>
              <p>Mampu membuat fungsi yang diterpakan untuk Front-end website</p>
              <p>Mampu menerapkan animasi untuk tampilan sebuah website</p>
            </div>
            <div className="border-1 rounded-sm p-4">
              <h2>NextJs</h2>
              <p>Mengetahui cara menggunakan framework NextJs untuk kebutuhan website</p>
              <p>Mampu membangun sebuah Front-end website menggunakan framework NextJs</p>
            </div>
            <div className="border-1 rounded-sm p-4">
              <h2>Tailwind CSS</h2>
              <p>Mahir dalam mengoperasikan framework Tailwind CSS untuk menciptakan tampilan yang menarik</p>
            </div>
            <div className="border-1 rounded-sm p-4">
              <h2>Git</h2>
              <p>Mengetahui dasar penggunaan Git untuk menghubungkan proyek dengan GitHub</p>
              <p>Mampu berkoordinasi dengan tim menggunakan bantuan software GitHub</p>
            </div>
            <div className="border-1 rounded-sm p-4">
              <h2>Unity Engine</h2>
              <p>Menguasai dasar mekanisme untuk pembuatan game menggunakan game engine Unity</p>
              <p>Memahami sebagian besar tools yang disediakan dalam Unity Engine</p>
            </div>
            <div className="border-1 rounded-sm p-4">
              <h2>C#</h2>
              <p>Mampu membuat kode fungsional untuk pengembangan game menggunakan Unity Engine</p>
            </div>
            <div className="border-1 rounded-sm p-4">
              <h2>Blender</h2>
              <p>Memahami dasar penggunaan software Blender untuk membuat model 3D</p>
            </div>
            <div className="border-1 rounded-sm p-4">
              <h2>2D Illustration</h2>
              <p>Menguasai software Ibis Paint untuk membuat ilustrasi 2D</p>
              <p>Mampu menggunakan tools yang ada pada software Ibis Paint untuk membantu pembuatan ilustrasi 2D</p>
            </div>
            <div className="border-1 rounded-sm p-4">
              <h2>Narrative Design</h2>
              <p>Mampu membangun sebuah cerita yang layak dibaca</p>
              <p>Menguasai aturan penulisan dalam pembuatan sebuah narasi</p>
              <p>Mampu membawa alur cerita ke arah happy ending atau bad ending</p>
            </div>
          </div>
        </section>
        <div className="w-full max-w-2xl mx-auto pt-12 mb-12 border-b-1 border-b-white"></div>
        <section>
          <h1 className="text-center text-3xl sm:text-5xl mb-5">Let&apos;s See My Project Galery</h1>

          <div className="grid sm:grid-cols-3 gap-5">
            {data.map((item) => (
              <div key={item.id} className="border-1 p-4 rounded-sm">
                <h2>{item.name}</h2>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
