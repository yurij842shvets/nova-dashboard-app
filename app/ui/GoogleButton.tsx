'use client'

import { signIn } from "next-auth/react"

export default function GoogleButton() {
    return (
        <button type="button" onClick={() => signIn('google')}>
            Continue with Google
        </button>
    )
}