import styled from 'styled-components';

export const SponsorGallery = styled.div`
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    -webkit-column-width: 33%;
    -moz-column-width: 33%;
    column-width: 33%;
    padding: 0 12px;

    @media screen and (max-width: 991px) {
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
    }

    @media screen and (max-width: 480px) {
        -webkit-column-count: 1;
        -moz-column-count: 1;
        column-count: 1;
        -webkit-column-width: 100%;
        -moz-column-width: 100%;
        column-width: 100%;
    }
`;

export const GalleryPics = styled.div`
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;
    cursor: pointer;
    margin-bottom: 12px;

    &:hover {
        filter: opacity(0.8);
    }
`;

