import React, { forwardRef } from 'react'
import { EasyZoomOnMove, EasyZoomOnHoverProps } from 'easy-magnify'

type MainImageType = Pick<
  Pick<EasyZoomOnHoverProps, 'mainImage'>['mainImage'],
  'alt' | 'src' | 'width' | 'height'
>
type ZoomImageType = Pick<
  Pick<EasyZoomOnHoverProps, 'zoomImage'>['zoomImage'],
  'alt' | 'src'
>

type OptionsType = Omit<EasyZoomOnHoverProps, 'mainImage' | 'zoomImage'>

type Props = {
  mainImage: MainImageType
  zoomImage: ZoomImageType
  options: OptionsType
}

const ImageMagnify = forwardRef<HTMLDivElement, Props>(
  ({ mainImage, zoomImage, options }, ref) => {
    return (
      <EasyZoomOnMove
        mainImage={mainImage}
        zoomImage={zoomImage}
        {...options}
      />
    )
  }
)

ImageMagnify.displayName = 'ImageMagnify'

export default ImageMagnify
