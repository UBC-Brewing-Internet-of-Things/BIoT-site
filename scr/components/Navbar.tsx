'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    const router = useRouter();
    return (
        <>
            <p>Welcome to the Home Page</p>
        </>
    );
}