import React from 'react';
// import { Card, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


function Footer() {
    return (
        <footer>
            <div className='container bg-slate-50 p-7 w-full'>
                <div>
                    <div>
                        <div>
                            <h4 className='font-bold'>Subscribe to our newsletter</h4>
                        </div>
                        <br />
                        <Input type="email" placeholder="Email" className="w-60 h-9" />
                        <Button type="submit" className="bg-black text-white rounded-full">Subscribe</Button>
                        <p>
                            © 2024 Your Next Store
                            <br />
                            Delightful commerce for everyone
                        </p>
                    </div>
                </div>
                <div className=''>
                    <div>
                        <p className='font-bold'>Products</p>
                        <a href="#" className='hover:underline'>Apparel</a>
                        <br />
                        <a href="#" className='hover:underline'>Accessories</a>
                        <br />
                        <a href="#" className='hover:underline'> @zaiste</a>
                    </div>
                    <div>
                        <p className='font-bold'>Support</p>
                        <a href="#" className='hover:underline'>Features</a>
                        <br />
                        <a href="#" className='hover:underline'>Pricing</a>
                        <br />
                        <a href="#" className='hover:underline'>Contact Us</a>
                        <br />
                        <a href="#" className='hover:underline'>@typeofweb</a>
                    </div>

                </div>
            </div>
        </footer >
    )
}

export default Footer;
