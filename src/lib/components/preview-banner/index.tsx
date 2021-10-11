import React from 'react';
import { IBannerProps, IBannerFields } from './interfaces'; 
import { BannerDiv } from './ui-elements';

interface IPreviewBannerProps {
  banner: IBannerProps
  scale?: number
  float?: string
  transformOrigin?: string
  onClickPromoButton?: (data: any) => void
}

export const PreviewBanner:React.FC<IPreviewBannerProps> = ({ 
  banner, 
  scale=1, 
  float='none', 
  transformOrigin='center', 
  onClickPromoButton = () => {}
}) => {

    const renderBannerContainer = (elem: Array<JSX.Element>) => <BannerDiv transformOrigin={transformOrigin} cssStyles={banner.cssStyles} scale={scale} float={float}>{elem}</BannerDiv>;

    const createBannerElements = (fields: Array<IBannerFields>, callback = (elem: Array<JSX.Element>) => {}) => callback(
         fields.map((e, i)=> {
            switch(e.bannerFieldName) {
                case 'button':
                case 'text' : return e.bannerFieldValue && <BannerDiv key={i} cssStyles={e.cssStyles}>{e.bannerFieldValue}</BannerDiv>;
                case 'promoCode' : return e.bannerFieldValue && <BannerDiv key={i} cssStyles={e.cssStyles} onClick={(event: React.SyntheticEvent)=>{
                        if(event.currentTarget.innerHTML!==e.bannerFieldValue) {
                            (event.currentTarget as HTMLElement).style.cursor='text';
                            event.currentTarget.innerHTML = e.bannerFieldValue;
                            (event.currentTarget as HTMLElement).classList.add('active')
                            onClickPromoButton({type: e.bannerType, value: e.bannerFieldValue})
                        }
                    }
                }>Show Promo Code</BannerDiv>;
                // case 'image' : return e.bannerFieldValue && <BannerImage key={i} src={e.bannerFieldValue} alt="Promo image" cssStyles={e.cssStyles}/>;
                case 'default' : return <></>;
            }
        }) as Array<JSX.Element>
    );

    return (
        <>
            { banner && createBannerElements(banner.bannerFields, renderBannerContainer) }
        </>
    )
}
