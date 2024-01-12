"use client"

import TestABList from "@/components/TestABList";
import { growthbook } from "@/services/growthbook";
import { GrowthBookProvider } from "@growthbook/growthbook-react";
import { useEffect, useState } from "react";
import { getCookieUserId } from "../actions";

export default function Dashboard() {
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
      <TestABList page="Dashboard" />
    </GrowthBookProvider>
  )
}
