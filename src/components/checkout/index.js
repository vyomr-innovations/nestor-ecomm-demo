import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Image from "next/image"

export default function CheckoutPage() {
    return (
        <div className="min-h-screen p-6 mt-11">
            <div className="max-w-2xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold text-blue-800">Checkout</h1>
                <p className="text-blue-800">Provide billing and shipping details below.</p>

                <Card className="bg-white">
                    <CardContent className="space-y-6 p-6 text-black">
                        {/* Contact Info */}
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="you@example.com" />
                            </div>
                            <div>
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" type="text" placeholder="John Doe" />
                            </div>
                        </div>

                        {/* Address Info */}
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="country">Country or Region</Label>
                                <Select>
                                    <SelectTrigger id="country">
                                        <SelectValue placeholder="Select a country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="in">India</SelectItem>
                                        <SelectItem value="us">United States</SelectItem>
                                        <SelectItem value="ca">Canada</SelectItem>
                                        <SelectItem value="uk">United Kingdom</SelectItem>
                                        <SelectItem value="au">Australia</SelectItem>
                                        <SelectItem value="de">Germany</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="address">Address</Label>
                                <Input id="address" type="text" placeholder="123 Main St" />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="billing-same" />
                                <Label htmlFor="billing-same">Billing address same as payment</Label>
                            </div>
                        </div>

                        {/* Payment Info */}
                        <div className="space-y-4">
                            {/* Card Number with right-aligned logos */}
                            <div className="relative">
                                <Label htmlFor="card-number">Card Number</Label>
                                <Input
                                    id="card-number"
                                    type="text"
                                    placeholder="1234 5678 9012 3456"
                                    className="pr-20 p-6"
                                />
                                <div className="absolute right-3 top-[38px] flex items-center space-x-1">
                                    <Image
                                        src="/images/visacard.png"
                                        alt="Visa"
                                        width={28}
                                        height={24}
                                    />
                                    <Image
                                        src="/images/mastercard.png"
                                        alt="MasterCard"
                                        width={28}
                                        height={24}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="exp-date">Expiration Date</Label>
                                    <Input id="exp-date" type="text" placeholder="MM/YY" />
                                </div>
                                <div>
                                    <Label htmlFor="cvc">Security Code</Label>
                                    <Input id="cvc" type="text" placeholder="CVC" />
                                </div>
                            </div>
                        </div>

                        {/* Pay Now Button */}
                        <Button className="w-full bg-black text-white hover:bg-black/80 rounded-full">
                            Pay Now
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
