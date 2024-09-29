'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { usernameToZeroWidth } from '@/utils/usernameToZeroWidth';
import { zeroWidthToUsername } from '@/utils/zeroWidthToUsername'
import { useState } from "react";

export default function Home() {
  const [encode, setEncode] = useState('');
  const [decode, setDecode] = useState('');
  const zero = () => {
    console.log('-start-');
    setEncode(`zhaojianan to zero width...${usernameToZeroWidth('zhaojianan9')}...`);
    console.log(encode);
    const decode = zeroWidthToUsername(encode);
    setDecode(zeroWidthToUsername(encode));
    console.log('decode:', decode);
    console.log('-end-');
  }
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
      <div>encode: {encode}</div>
      <div>decode: {decode}</div>
      </div>

      <div className={styles.grid}>
        <button onClick={zero}>test</button>
      </div>
    </main>
  );
}
