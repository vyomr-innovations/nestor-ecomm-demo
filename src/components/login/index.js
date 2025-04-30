"use client"
import * as React from "react"
import { useState } from "react"
import { z } from "zod"
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
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [message, setMessage] = useState("")
    const [messageColor, setMessageColor] = useState("")

    // Handle email validation as user types
    const handleEmailChange = (e) => {
        const newEmail = e.target.value
        setEmail(newEmail)

        const emailValidation = z.string().email("Invalid email format").safeParse(newEmail)

        if (!emailValidation.success) {
            setEmailError(emailValidation.error.errors[0].message)
        } else {
            setEmailError("")
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

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

        setEmailError("")
        setPasswordError("")
        setMessage("Login successful!")
        setMessageColor("text-green-600")
    }

    return (
        <div className="flex items-center justify-center mt-32 mb-32">
            <Card className="w-[400px] p-4">
                <CardHeader>
                    <CardTitle className="text-3xl">Login</CardTitle>
                    <CardDescription>Enter your email below to login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="Email">Email</Label>
                                <Input
                                    id="Email"
                                    type="email"
                                    placeholder="xyz@gmail.com"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                                {emailError && <p className="text-sm text-red-500">{emailError}</p>}
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="Password">Password</Label>
                                <Input
                                    id="Password"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handlePasswordChange}
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
