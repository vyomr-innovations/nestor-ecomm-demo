import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


function Footer() {
    return (
        <footer>
            <div className='flex bg-slate-50 p-7 w-full justify-between'>
                <div className='flex justify-start'>
                    <div>
                        <div className='flex p-3'>
                            <h4 className='font-bold'>Subscribe to our newsletter</h4>
                        </div>
                        <div className="relative w-full flex items-center space-x-2">
                            <Input type="email" placeholder="Email" className="w-60 h-9 px-3 border" />
                            <Button type="submit" className="bg-black text-white rounded-full px-4 h-9">Subscribe</Button>
                        </div>
                        <div className='m-2 p-2 text-gray-500 text-sm'>
                            <span>
                                © 2025 Your Next Store
                                <br />
                                Delightful commerce for everyone.
                            </span>

                        </div>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <table className="p-5 m-5 pt-5 border-collapse">
                        <thead>
                            <tr>
                                <th className="font-bold px-4 py-2 text-left">Products</th>
                                <th className="font-bold px-4 py-2 text-left">Support</th>
                            </tr>
                        </thead>
                        <tbody className='text-sm text-gray-550'>
                            <tr>
                                <td className="px-4 py-2"><a href="#" className="hover:underline">Apparel</a></td>
                                <td className="px-4 py-2"><a href="#" className="hover:underline">Features</a></td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2"><a href="#" className="hover:underline">Accessories</a></td>
                                <td className="px-4 py-2"><a href="#" className="hover:underline">Pricing</a></td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2"></td>
                                <td className="px-4 py-2"><a href="#" className="hover:underline">Contact Us</a></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </footer>
    )
}

export default Footer;
