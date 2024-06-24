import { useFeatureIsOn, useFeature, IfFeatureEnabled } from "@growthbook/growthbook-react";
import { sendGTMEvent } from "@next/third-parties/google";
import Header from "../Header";
import TestABItem from "../TestABItem";
import './styles.css'

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

  console.log(isFeatureAorBEnabled, isFeature1Enabled, feature2.value, featureH1PartTitle.value)

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


      <button
        onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'xyz' })}
      >
        Send sample event
      </button>

      <button
        onClick={() => alert('Clicou em BIG CALL-TO-ACTION BUTTON A')}
        data-analytic-id="big-call-to-action-button-A"
      >
        BIG CALL-TO-ACTION BUTTON A
      </button>
      <button
        onClick={() => alert('Clicou em BIG CALL-TO-ACTION BUTTON B')}
        data-analytic-id="big-call-to-action-button-b"

      >
        BIG CALL-TO-ACTION BUTTON B
      </button>
    </div>
  )
}
