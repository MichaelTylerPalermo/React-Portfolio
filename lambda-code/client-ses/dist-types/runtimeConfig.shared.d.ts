import { SESClientConfig } from "./SESClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: SESClientConfig) => {
    apiVersion: string;
    base64Decoder: import("@smithy/types").Decoder;
    base64Encoder: (_input: Uint8Array | string) => string;
    disableHostPrefix: boolean;
    endpointProvider: (endpointParams: import("./endpoint/EndpointParameters").EndpointParameters, context?: {
        logger?: import("@smithy/types").Logger;
    }) => import("@smithy/types").EndpointV2;
    extensions: import("./runtimeExtensions").RuntimeExtension[];
    httpAuthSchemeProvider: import("./auth/httpAuthSchemeProvider").SESHttpAuthSchemeProvider;
    httpAuthSchemes: import("@smithy/types").HttpAuthScheme[];
    logger: import("@smithy/types").Logger;
    serviceId: string;
    urlParser: import("@smithy/types").UrlParser;
    utf8Decoder: import("@smithy/types").Decoder;
    utf8Encoder: (input: Uint8Array | string) => string;
};
