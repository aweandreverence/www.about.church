import { GoogleAnalytics } from './google/analytics';

export function CommonJS() {
    // TODO: replace with about.church tracking ID
    const jsx = <GoogleAnalytics trackingId="UA-8680690-4" />;
    return jsx;
}
