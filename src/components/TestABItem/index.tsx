import { ReactNode } from "react";

import './styles.css'

interface TestABItemProps {
  featureName?: string | null
  isOn: boolean
  componentA: ReactNode
  componentB: ReactNode
  weights?: number[]
}

export default function TestABItem({
  featureName,
  isOn,
  componentA: ComponentA,
  componentB: ComponentB,
  weights

}: TestABItemProps) {

  const handleClick = () => {
    alert('clicou')
  }

  return (
    <div className="ab-item-wrapper"  >
      <div className="ab-item-title-wrapper">
        {featureName && <span className="ab-item-title">
          Feature name: {featureName}
        </span>}
        <span className="ab-item-title" >
          Value: {String(isOn)}
        </span>
        {weights && <span className="ab-item-title">
          Weights: {weights.map(item => `${item} `)}
        </span>}
      </div>
      <div className="ab-item-content">
        <div className={`ab-item ${!isOn ? 'ab-item-disabled' : ''}`}>
          {ComponentA}

          {!isOn && featureName === 'a-or-b' && (
            <button
              type="button"
              onClick={handleClick}
              data-analytic-id={`${featureName}-button-a`}>
              Botão A
            </button>
          )}
        </div>
        <div className={`ab-item ${isOn ? 'ab-item-active' : ''}`}>
          {ComponentB}

          {isOn && featureName === 'a-or-b' && (
            <button
              type="button"
              onClick={handleClick}
              data-analytic-id={`${featureName}-button-b`}>
              Botão B
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
