import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  SendCustomVerificationEmailRequest,
  SendCustomVerificationEmailResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer };
export { $Command };
export interface SendCustomVerificationEmailCommandInput
  extends SendCustomVerificationEmailRequest {}
export interface SendCustomVerificationEmailCommandOutput
  extends SendCustomVerificationEmailResponse,
    __MetadataBearer {}
declare const SendCustomVerificationEmailCommand_base: {
  new (
    input: SendCustomVerificationEmailCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    SendCustomVerificationEmailCommandInput,
    SendCustomVerificationEmailCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: SendCustomVerificationEmailCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    SendCustomVerificationEmailCommandInput,
    SendCustomVerificationEmailCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class SendCustomVerificationEmailCommand extends SendCustomVerificationEmailCommand_base {
  protected static __types: {
    api: {
      input: SendCustomVerificationEmailRequest;
      output: SendCustomVerificationEmailResponse;
    };
    sdk: {
      input: SendCustomVerificationEmailCommandInput;
      output: SendCustomVerificationEmailCommandOutput;
    };
  };
}
