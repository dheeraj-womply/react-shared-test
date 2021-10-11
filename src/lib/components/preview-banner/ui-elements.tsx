import styled from 'styled-components';

// export const BannerButton: any = styled.button`
//     ${(props: {cssStyles: string}) => props.cssStyles}
// `;

export const BannerDiv: any = styled.div`
    ${(props: {cssStyles: string, scale:number, float: number, transformOrigin:string }) => props.cssStyles}
    transform: scale(${props => props.scale});
    transform-origin: ${props => props.transformOrigin};
    float: ${props => props.float}
`;

// export const BannerImage: any = styled.img`
//     ${(props: {cssStyles: string}) => props.cssStyles}
// `;