"use client"

import { useEffect, useState } from 'react';
import { GrowthBookProvider } from "@growthbook/growthbook-react";
import TestABList from '@/components/TestABList';
import { growthbook } from '@/services/growthbook';
import { getCookieUserId } from './actions';

export default function Home() {
  const [cookieUserId, setCookieUserId] = useState<string | null>(null)

  const loadCookieUserId = async () => {
    const growthbookCookieUserId = await getCookieUserId()

    growthbook.setAttributes({
      id: growthbookCookieUserId,
    })

    setCookieUserId(growthbookCookieUserId)
  }

  useEffect(() => {
    loadCookieUserId()
  }, []);

  useEffect(() => {
    if (cookieUserId == null) return

    growthbook.loadFeatures();
  }, [cookieUserId]);

  return (
    <GrowthBookProvider growthbook={growthbook}>
      <TestABList page='Home' />
    </GrowthBookProvider>
  )
}
