import { AwsRegionExtensionConfiguration } from "@aws-sdk/types";
import { HttpHandlerExtensionConfiguration } from "@smithy/protocol-http";
import { DefaultExtensionConfiguration } from "@smithy/types";
import { HttpAuthExtensionConfiguration } from "./auth/httpAuthExtensionConfiguration";
export interface SESExtensionConfiguration
  extends HttpHandlerExtensionConfiguration,
    DefaultExtensionConfiguration,
    AwsRegionExtensionConfiguration,
    HttpAuthExtensionConfiguration {}
