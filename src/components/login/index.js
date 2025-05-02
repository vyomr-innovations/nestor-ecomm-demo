"use client"
import * as React from "react"
import { useState } from "react"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Zod schema for login
const loginSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string()
        .min(8, "At least 8 characters")
        .regex(/[A-Z]/, "At least one uppercase letter")
        .regex(/[a-z]/, "At least one lowercase letter")
        .regex(/[0-9]/, "At least one number")
        .regex(/[\W_]/, "At least one special character"),
})

export function Login() {
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [message, setMessage] = useState("")
    const [messageColor, setMessageColor] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()

        const result = loginSchema.safeParse({ email, password })

        if (!result.success) {
            const errors = result.error.flatten().fieldErrors
            setEmailError(errors.email?.[0] || "")
            setPasswordError(errors.password?.[0] || "")
            setMessage("Login failed. Please try again.")
            setMessageColor("text-red-500")
            return
        }

        // Replace with your admin credentials
        const ADMIN_EMAIL = "nestortech.io@gmail.com"
        const ADMIN_PASSWORD = "Nestor@123"

        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            setEmailError("")
            setPasswordError("")
            setMessage("Login successful!")
            setMessageColor("text-green-600")

            // Redirect to /UserProfile
            setTimeout(() => {
                router.push("./profile")
            }, 500)
        } else {
            setMessage("Invalid admin credentials.")
            setMessageColor("text-red-500")
        }
    }

    return (
        <div className="flex items-center justify-center mt-32 mb-32">
            <Card className="w-[400px] p-4">
                <CardHeader>
                    <CardTitle className="text-3xl">Login</CardTitle>
                    <CardDescription>Enter your admin credentials to access the site</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="login@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                {emailError && <p className="text-sm text-red-500">{emailError}</p>}
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                {passwordError && <p className="text-sm text-red-500">{passwordError}</p>}
                            </div>

                            {message && <p className={`text-sm ${messageColor}`}>{message}</p>}
                        </div>
                        <CardFooter className="flex items-center justify-center mt-4 p-0">
                            <Button className="h-10 w-full" type="submit">Login</Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
