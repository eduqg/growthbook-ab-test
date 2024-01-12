"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect } from 'react';
import { GrowthBookProvider } from "@growthbook/growthbook-react";
import TestABList from '@/components/TestABList';
import { growthbook } from '@/services/growthbook';


export default function Home() {
  useEffect(() => {
    // Load features asynchronously when the app renders
    growthbook.loadFeatures();
  }, []);

  return (
    <GrowthBookProvider growthbook={growthbook}>
      <TestABList page='Home' />
    </GrowthBookProvider>
  )
}
