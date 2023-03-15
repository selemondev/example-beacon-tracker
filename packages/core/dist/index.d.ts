type PageViewEvent = {
    pathname: string;
};
type SendEvent = (event: PageViewEvent) => PageViewEvent | null;
type AnalyticsProps = {
    before?: SendEvent;
};
declare global {
    interface Window {
        beacon?: {
            before?: SendEvent;
        };
    }
}

declare function track(props?: AnalyticsProps | undefined): void | undefined;

export { AnalyticsProps, SendEvent, track };
