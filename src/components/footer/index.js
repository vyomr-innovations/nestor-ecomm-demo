import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Footer() {
    return (
        <footer className="bg-slate-50 p-7 w-full">
            <div className='flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
                {/* Subscription Section */}
                <div className='w-full md:w-1/2 flex flex-col items-start'>
                    <h4 className='text-sm font-bold p-3'>Subscribe to our newsletter</h4>
                    <div className="relative w-full flex items-center space-x-2">
                        <Input type="email" placeholder="Email" className="w-full md:w-60 h-9 px-3 border" />
                        <Button type="submit" className="bg-black text-white rounded-full px-4 h-9">Subscribe</Button>
                    </div>
                    <div className='m-2 p-2 text-gray-500 text-sm'>
                        <span>
                            © 2025 Your Next Store
                            <br />
                            InfinityGadgets commerce for everyone.
                        </span>
                    </div>
                </div>

                {/* Links Section */}
                <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
                    <table className="p-5">
                        <thead>
                            <tr>
                                <th className="font-bold px-4 py-2">Products</th>
                                <th className="font-bold px-4 py-2">Support</th>
                            </tr>
                        </thead>
                        <tbody className='text-sm text-gray-500'>
                            <tr>
                                <td className="px-4 py-2"><a href="#" className="hover:underline">Apparel</a></td>
                                <td className="px-4 py-2"><a href="#" className="hover:underline">Contact Us</a></td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2"><a href="#" className="hover:underline">Accessories</a></td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2"><a href="#" className="hover:underline">Digital</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
