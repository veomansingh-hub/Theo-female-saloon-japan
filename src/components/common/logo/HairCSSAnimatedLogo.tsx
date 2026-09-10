import cn from 'clsx'
import useMeasure from 'react-use-measure'

import useCSSAnimatedSVGGeometryElementStroke from '@/lib/hooks/useCSSAnimatedSVGGeometryElementStroke'

const AnimatedLogoGroup = ({ triggered = false, delay = 0, nonScalingStroke = false, scaling = 1 }) => (
  <g>
    <path
      d='M9.14 69.76L9.14 75.52L43.70 75.52L43.70 69.76L9.14 69.76M45.72 49.60L39.60 49.60L39.60 100L45.72 100L45.72 49.60M11.88 49.60L5.76 49.60L5.76 100L11.88 100L11.88 49.60M64.22 79.12L62.06 84.88L88.70 84.88L86.54 79.12L64.22 79.12M66.74 80.99L75.24 60.98L83.88 81.28L84.46 82.72L91.80 100L98.64 100L75.24 47.08L51.84 100L58.68 100L66.17 82.29L66.74 80.99M110.88 49.60L104.76 49.60L104.76 100L110.88 100L110.88 49.60M138.24 75.16L131.40 75.16L148.68 100L156.24 100L138.24 75.16M128.52 49.60L122.40 49.60L122.40 100L128.52 100L128.52 49.60M125.78 49.60L125.78 55L136.08 55Q139.32 55 141.80 56.15Q144.29 57.30 145.69 59.46Q147.10 61.62 147.10 64.72Q147.10 67.82 145.69 69.98Q144.29 72.14 141.80 73.29Q139.32 74.44 136.08 74.44L125.78 74.44L125.78 79.84L136.08 79.84Q140.98 79.84 144.83 78Q148.68 76.17 150.95 72.75Q153.22 69.33 153.22 64.72Q153.22 60.04 150.95 56.66Q148.68 53.27 144.83 51.44Q140.98 49.60 136.08 49.60'
      {...useCSSAnimatedSVGGeometryElementStroke({
        triggered,
        delay: delay + 50,
        nonScalingStroke,
        scaling,
      })}
    />
  </g>
)
const HairCSSAnimatedLogo = ({ className = '', triggered = false, delay = 0, ...props }) => {
  const [svgRef, { width: svgWidth }] = useMeasure()

  return (
    <svg
      ref={svgRef}
      viewBox='0 0 306.92 77.8'
      fill='none'
      strokeWidth={1}
      xmlns='http://www.w3.org/2000/svg'
      className={cn(
        'overflow-visible stroke-current',
        // ' opacity-0',
        // {
        //   'opacity-100': !!svgWidth,
        // },
        className
      )}
      {...props}
    >
      <title>HAIR</title>
      <AnimatedLogoGroup
        nonScalingStroke
        scaling={svgWidth ? 306.92 / svgWidth : 1}
        triggered={triggered}
        delay={delay}
      />
    </svg>
  )
}

// * (306.92 / 687.55)

export default HairCSSAnimatedLogo
