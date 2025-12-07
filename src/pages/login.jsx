import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Navbar from "../components/navbar"

export default function LoginPage() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

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

      {/* The Main Login Card */}
      <Card className="w-full max-w-lg p-6 rounded-[30px] shadow-2xl border border-gray-100 bg-white/95">
        
        <CardHeader className="relative">
          <div className="absolute top-0 right-0 text-sm font-semibold text-gray-600 cursor-pointer">
            Sign Up
          </div>

          <CardTitle className="text-xl font-semibold">
            Login to your account
          </CardTitle>

          <CardDescription>
            Enter your email below login to your account
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 mt-2">
          {/* Email */}
          <div className="space-y-1">
            <Label>Email</Label>
            <Input placeholder="admin123@gmail.com" />
          </div>

          {/* Password + Forgot */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <Label>Password</Label>
              <span className="text-xs text-gray-600 cursor-pointer">
                Forgot your password?
              </span>
            </div>
            <Input placeholder="12345" type="password" />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3 mt-4">
          <Button className="w-full bg-black text-white hover:bg-neutral-800">
            Login
          </Button>

          <Button variant="outline" className="w-full">
            Register
          </Button>
        </CardFooter>

      </Card>
    </div>
    </>
  )
}