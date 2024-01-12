import { ReactNode } from "react";

import './styles.css'

interface TestABItemProps {
  featureName: string
  isOn: boolean
  componentA: ReactNode
  componentB: ReactNode
}

export default function TestABItem({
  featureName,
  isOn,
  componentA: ComponentA,
  componentB: ComponentB
}: TestABItemProps) {
  return (
    <div className="ab-item-wrapper"  >
      <span className="ab-item-title" >Feature {featureName} is enabled? {String(isOn)}</span>
      <div className="ab-item-content">
        <div className={`ab-item ${!isOn ? 'ab-item-disabled' : ''}`}>
          {ComponentA}
        </div>
        <div className={`ab-item ${isOn ? 'ab-item-active' : ''}`}>
          {ComponentB}
        </div>
      </div>
    </div>
  )
}
