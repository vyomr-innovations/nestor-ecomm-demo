import * as React from "react"
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

export function Login() {
    return (
        <>
            <div className="flex items-center justify-center mt-32 mb-32">
                <Card className="w-[380px] h-[330px] p-3">
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>Enter your email below to login to your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="Email">Email</Label>
                                    <Input id="Email" placeholder="xyz@gmail.com" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="Password">Password</Label>
                                    <Input id="Password" placeholder="Password" />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex items-center justify-center">
                        <Button className="h-10 w-full">Login</Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}
