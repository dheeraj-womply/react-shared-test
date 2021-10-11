import React from 'react'
import { ERROR_MAIN_COLOR, RATING_SECONDARY_COLOR } from '../../themes/default-styles'
import { makeId } from '../../utils/makeId'

export interface StarProps {
  width: number
  className?: string
  style?: React.CSSProperties
  fontSize?: React.Key
  primaryColor?: string
  secondaryColor?: string
}

export const Star: React.FC<StarProps> = ({
  width,
  className,
  style,
  fontSize = '1rem',
  primaryColor = ERROR_MAIN_COLOR,
  secondaryColor = RATING_SECONDARY_COLOR,
}): JSX.Element => {
  const id = makeId(10)

  return (
    <svg
      style={{ ...style, fontSize }}
      className={className}
      width="1.35em"
      height="1.35em"
      viewBox="0 0 108 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={id}>
          <stop offset={`${width}%`} stopColor={primaryColor} />
          <stop offset={`${width}%`} stopColor={secondaryColor} stopOpacity="1" />
        </linearGradient>
      </defs>

      <path
        d="M47.7912 4.30119L34.7227 30.7985L5.48366 35.0612C0.240251 35.8217 -1.86112 42.2859 1.94136 45.9883L23.0951 66.6018L18.0919 95.7208C17.1913 100.984 22.7349 104.927 27.3779 102.465L53.5349 88.7162L79.692 102.465C84.335 104.907 89.8786 100.984 88.978 95.7208L83.9747 66.6018L105.129 45.9883C108.931 42.2859 106.83 35.8217 101.586 35.0612L72.3472 30.7985L59.2787 4.30119C56.9371 -0.421891 50.1527 -0.48193 47.7912 4.30119Z"
        fill={`url(#${id})`}
      />
    </svg>
  )
}

export interface RatingProps {
  total?: number
  count: number
  size?: React.Key
  gap?: React.Key
  className?: string
  primaryColor?: string
  secondaryColor?: string
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const Rating: React.FC<RatingProps> = ({
  total = 5,
  count,
  size,
  gap = 16,
  className,
  primaryColor,
  secondaryColor,
  onClick
}): JSX.Element => {
  count = count || 0

  return (
    <div 
      data-testid="starComponent"
      onClick={onClick}
      style={{ display: 'inline-flex', flexWrap: 'nowrap', cursor: onClick ? 'pointer' : 'default' }}>
      {
        Array.from({ length: total }, (_, i) => {
          let width = 0

          if (count >= i + 1) {
            width = 100
          } else if (i + 1 - count > 0) {
            width = (count - i) * 100
          }

          return (
            <Star
              style={{ marginRight: i + 1 === total ? 0 : gap }}
              className={className}
              key={`image_${i}`}
              width={width}
              fontSize={size}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
            />
          )
        })
      }
    </div>
  )
}
