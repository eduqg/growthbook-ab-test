import { useFeatureIsOn, useFeature, IfFeatureEnabled } from "@growthbook/growthbook-react";
import TestABItem from "../TestABItem";
import './styles.css'
import Header from "../Header";

const featureAorBName = "a-or-b"
const feature1Name = "my-feature-1"
const feature2Name = "my-feature-2"
const featureH1PartName = "h1-title-part"

interface TestABListProps {
  page: string
}

export default function TestABList({ page }: TestABListProps) {
  const isFeatureAorBEnabled = useFeatureIsOn(featureAorBName)
  const isFeature1Enabled = useFeatureIsOn(feature1Name);
  const feature2 = useFeature(feature2Name);
  const featureH1PartTitle = useFeature(featureH1PartName)

  console.log({ isFeatureAorBEnabled, isFeature1Enabled, feature2, featureH1PartTitle })

  return (
    <div className="ab-list-wrapper">
      <Header />
      <h1 className="ab-list-title">
        Growthbook {featureH1PartTitle.value} {' '}
        <IfFeatureEnabled feature="index-title">
          Samples
        </IfFeatureEnabled>
      </h1>

      <div className="ab-list-content">
        <TestABItem
          featureName={featureAorBName}
          isOn={isFeatureAorBEnabled}
          componentA={<span>A</span>}
          componentB={<span>B</span>}
        />

        <TestABItem
          featureName={feature1Name}
          isOn={isFeature1Enabled}
          componentA={<span>A</span>}
          componentB={<span>B</span>}
        />

        <TestABItem
          featureName={feature2.experimentResult?.featureId}
          isOn={feature2.value}
          componentA={<span>A</span>}
          componentB={<span>B</span>}
          weights={feature2.experiment?.weights}
        />
      </div>
    </div>
  )
}
