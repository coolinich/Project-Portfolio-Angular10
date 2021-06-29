export interface Image {
    imageId?: number | string;
    imageAddress: string;
    imageCaption?: string;
    imageSecondaryText?: string;
    imageTag?: string;
    imagePage?: string;
    onSale?: boolean;
}

export interface ImagesDescription {
    templateImages: Image[];
    templateHeading?: string;
    templateText?: string;
}
