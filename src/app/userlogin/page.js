import { Login } from '@/components/login';
import { SkeletonCard } from '@/components/skeleton';
import React from 'react'

function UserLogin() {
    return (
        <div>
            <Login />
            <SkeletonCard />
        </div>
    )
}

export default UserLogin;