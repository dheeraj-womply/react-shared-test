export interface IBannerProps {
    bannerId?: number;
    businessLocationId?: number;
    bannerAlignment?: string;
    displaySequence?: string|number;
    bannerType: string;
    isEnabled?: boolean;
    cssStyles: string; 
    startDate?: Date;
    endDate?: Date;
    bannerStart?: string;
    bannerFields: Array<IBannerFields>;
}

export interface IBannerFields {
    bannerFieldId: string;
    bannerFieldName: string;
    bannerFieldValue: string;
    bannerType: string;
    cssStyles: string;
    clickToAction?: string;
}