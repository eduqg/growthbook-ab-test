import { useFeatureIsOn } from "@growthbook/growthbook-react";
import TestABItem from "../TestABItem";
import './styles.css'
import Header from "../Header";

const featureAorBName = "a-or-b"
const feature1Name = "my-feature-1"
const feature2Name = "my-feature-2"

interface TestABListProps {
  page: string
}

export default function TestABList({ page }: TestABListProps) {
  const isAorBEnabled = useFeatureIsOn(featureAorBName);
  const idFeature1Enabled = useFeatureIsOn(feature1Name);
  const idFeature2Enabled = useFeatureIsOn(feature2Name);

  console.log({ isAorBEnabled, idFeature1Enabled, idFeature2Enabled })

  return (
    <div className="ab-list-wrapper">
      <Header />
      <h1 className="ab-list-title">Growthbook Test A/B Samples</h1>

      <div className="ab-list-content">
        <TestABItem
          featureName={featureAorBName}
          isOn={isAorBEnabled}
          componentA={<span>A</span>}
          componentB={<span>B</span>}
        />

        <TestABItem
          featureName={feature1Name}
          isOn={idFeature1Enabled}
          componentA={<span>A</span>}
          componentB={<span>B</span>}
        />

        <TestABItem
          featureName={feature2Name}
          isOn={idFeature2Enabled}
          componentA={<span>A</span>}
          componentB={<span>B</span>}
        />
      </div>
    </div>
  )
}
