import Navbar from "@/components/Navbar"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">

        {/* Background Wave */}
        <div className="absolute inset-0 -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 800"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFE259" />
                <stop offset="100%" stopColor="#FFA751" />
              </linearGradient>
            </defs>

            <path
              d="M0,500 C200,400 350,600 500,550 C700,480 820,650 1050,620 C1250,590 1350,450 1440,500 L1440,0 L0,0 Z"
              fill="url(#grad1)"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Main Card */}
        <Card className="w-full max-w-xl p-8 rounded-[30px] shadow-2xl border border-gray-100 bg-white/95">

          <CardHeader>
            <CardTitle className="text-2xl font-semibold">
              Welcome to Home Page
            </CardTitle>

            <CardDescription>
              Halaman ini menggunakan tema yang sama seperti halaman login.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 mt-2">
            <p className="text-gray-700 leading-relaxed">
              Ini adalah halaman utama aplikasi kamu.
              Kamu bisa menambahkan konten lain seperti menu, data, dashboard, dll.
            </p>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button className="w-full bg-black text-white hover:bg-neutral-800">
              Aksi Utama
            </Button>

            <Button variant="outline" className="w-full">
              Aksi Lainnya
            </Button>
          </CardFooter>

        </Card>
      </div>
    </>
  )
}