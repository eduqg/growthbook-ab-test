"use client"

import TestABList from "@/components/TestABList";
import { growthbook } from "@/services/growthbook";
import { GrowthBookProvider } from "@growthbook/growthbook-react";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    // Load features asynchronously when the app renders
    growthbook.loadFeatures();
  }, []);

  return (
    <GrowthBookProvider growthbook={growthbook}>
      <TestABList page="Dashboard" />
    </GrowthBookProvider>
  )
}
