export interface ConfirmationModalComponent {
    isModalOpen?: boolean;
    isMobile?: boolean;
    title: React.ReactNode;
    content:  React.ReactNode;
    primaryButtonText: string;
    onPrimaryButtonClick: () => any;
    secondaryButtonText: string;
    onSecondaryButtonClick: () => any;
}
