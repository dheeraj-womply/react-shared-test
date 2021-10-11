import { DEFAULT_FONT_FAMILY, DEFAULT_FONT_FAMILY_BOLD } from '../themes/default-styles'

export const promoBanner = {
    bannerAlignment: '', 
    displaySequence: '',
    bannerType: 'PROMO',
    isEnabled: false,
    cssStyles: `{ width: 300px; height: 250px; background-color: #26BA8F; display: flex; padding: 1rem; color: #ffffff; flex-flow:column nowrap; }`, 
    bannerFields: [
        {
            bannerFieldId:"2",
            bannerType: 'PROMO', 
            bannerFieldName: 'text', 
            bannerFieldValue: 'Get 50% off', 
            cssStyles: `{ display: flex; align-items: center; text-align: center; color: #FFFFFF; font-family: ${DEFAULT_FONT_FAMILY_BOLD}; font-style: normal; font-weight: bold; font-size: 36px; margin: auto; line-height: 40px;}`, 
            clickToAction: ''
        }, 
        {
            bannerFieldId: "3",
            bannerType: 'PROMO', 
            bannerFieldName: 'text', 
            bannerFieldValue: 'on Everything', 
            cssStyles: `{ display: flex; font-family: GigV2; margin: auto; align-items: center; text-align: center; color: #FFFFFF; font-style: normal; font-weight: normal; font-size: 48px; line-height: 40px; }`, 
            clickToAction: ''
        },
        {
            bannerFieldId:"4",
            bannerType: 'PROMO', 
            bannerFieldName: 'promoCode', 
            bannerFieldValue: 'GET50OFF', 
            cssStyles: `{ background-color: transparent;  margin-top: auto; font-size: 16px;  text-align: center; color: #ffffff; padding: 10px; border: 1px solid #ffffff; border-radius: 3px;  width: 100%; font-family: ${DEFAULT_FONT_FAMILY_BOLD}; letter-spacing: 1px; word-wrap: break-word !important; outline: 0; cursor: pointer; }`, 
            clickToAction: ''
        }
    ]
};

export const alertsBanner = {
    bannerAlignment: '', 
    displaySequence: '',
    bannerType: 'ALERTS',
    isEnabled: false,
    cssStyles: `{width: 100%;min-height: 100px;background: #26BA8F;display: flex;padding: 1rem;flex-direction: column;font-size: 30px;line-height: 30px; align-items: stretch;text-align: center;@media only screen and (min-width: 768px) {    flex-direction:row;}}`, 
    bannerFields: [
        {
            bannerFieldId: "1",
            bannerType: 'ALERTS', 
            bannerFieldName: 'text', 
            bannerFieldValue: 'Now offering Delivery!', 
            cssStyles: `{ color: #ffffff;  font-size: 40px; min-width: 400px; margin: auto; display: flex; flex-grow: 5; line-height: 40px; font-family: GigV2; @media only screen and (max-width: 768px) {margin-bottom : 2rem; min-width: 0}}`, 
            clickToAction: ''
        },
        {
            bannerFieldId: "1",
            bannerType: 'ALERTS', 
            bannerFieldName: 'text', 
            bannerFieldValue: "We are excited to announce that you can now order from our menu for delivery. We can also provide orders for pickup. Give us a call or place your order online. We look forward to feeding you!", 
            cssStyles: `{ color: #ffffff;  font-size: 40px; font-size: 16px; line-height: 22px; display: flex; align-items: center; margin: auto; flex-grow: 7; font-family: ${DEFAULT_FONT_FAMILY};}`, 
            clickToAction: ''
        }
    ]
};

export const promoNewBanner = {
  bannerAlignment: '', 
  displaySequence: '',
  bannerType: 'PROMO_NEW',
  isEnabled: false,
  cssStyles: `{ width: 100%; height: 250px; background-color: #D4F1E9; display: flex; padding: 1rem; color: #000000; flex-flow:column nowrap; }`, 
  bannerFields: [
      {
          bannerFieldId:"2",
          bannerType: 'PROMO_NEW', 
          bannerFieldName: 'text', 
          bannerFieldValue: '$10 Off Any Purchase', 
          cssStyles: `{ display: flex; align-items: center; text-align: center; color: #000000; font-family: ${DEFAULT_FONT_FAMILY_BOLD}; font-style: normal; font-weight: bold; font-size: 32px; margin: auto; line-height: 40px;}`, 
          clickToAction: ''
      }, 
      {
          bannerFieldId: "3",
          bannerType: 'PROMO_NEW', 
          bannerFieldName: 'text', 
          bannerFieldValue: 'of $50 or some', 
          cssStyles: `{ display: flex; font-family: ${DEFAULT_FONT_FAMILY}; margin: auto; align-items: center; text-align: center; color: #000000; font-style: normal; font-weight: normal; font-size: 24px; line-height: 40px; }`, 
          clickToAction: ''
      },
      {
          bannerFieldId:"4",
          bannerType: 'PROMO_NEW', 
          bannerFieldName: 'promoCode', 
          bannerFieldValue: 'GET10OFF', 
          cssStyles: `{ background-color: #000000;  margin-top: auto; font-size: 16px;  text-align: center; color: #FFFFFF; padding: 10px; border: 1px solid #000000; border-radius: 3px;  width: 100%; font-family: ${DEFAULT_FONT_FAMILY_BOLD}; letter-spacing: 1px; word-wrap: break-word !important; outline: 0; cursor: pointer; max-width: 300px; margin: auto; &.active { background-color: transparent; color: #000; } }`, 
          clickToAction: ''
      }
  ]
};

export const alertsNewBanner = {
  bannerAlignment: '', 
  displaySequence: '',
  bannerType: 'ALERTS_NEW',
  isEnabled: false,
  cssStyles: `{width: 100%;min-height: 100px;display: flex;padding: 1rem;flex-direction: column;font-size: 30px;line-height: 30px; align-items: stretch;text-align: center;@media only screen and (min-width: 768px) { background: url(https://res.cloudinary.com/womply/image/upload/v1624896852/storefront/assets/icons/announcement-icon.svg) no-repeat right #D4F1E9;    background-repeat: no-repeat;background-size: 75px;padding-right: 75px; flex-direction:row;}@media only screen and (max-width: 768px) {background: url(https://res.cloudinary.com/womply/image/upload/v1624896168/storefront/assets/banners/star_dumlei.png) no-repeat #D4F1E9 15px 5px;background-size: 25px;padding-top: 35px;}}`, 
  bannerFields: [
      {
          bannerFieldId: "11",
          bannerType: 'ALERTS_NEW', 
          bannerFieldName: 'text', 
          bannerFieldValue: 'Now offering Deliveriess!', 
          cssStyles: `{ color: #000000;  font-size: 24px; margin: auto; text-align: center; flex: 3; line-height: 32px; font-family: ${DEFAULT_FONT_FAMILY_BOLD}; @media only screen and (max-width: 768px) {margin: 0 0 10px 0; min-width: 0; text-align: left}}`, 
          clickToAction: ''
      },
      {
          bannerFieldId: "12",
          bannerType: 'ALERTS_NEW', 
          bannerFieldName: 'text', 
          bannerFieldValue: "We are excited to announce that you can now order from our menu for delivery. We can also provide orders for pickup. Give us a call or place your order online. We look forward to feeding you!", 
          cssStyles: `{ color: #000000;  font-size: 40px; padding: 0 20px; font-size: 16px; line-height: 24px; display: flex; align-items: center; margin: auto; flex: 8; font-family: ${DEFAULT_FONT_FAMILY_BOLD}; @media only screen and (max-width: 768px) { margin: 0; text-align: left; padding-left: 0}}`, 
          clickToAction: ''
      }
  ]
};