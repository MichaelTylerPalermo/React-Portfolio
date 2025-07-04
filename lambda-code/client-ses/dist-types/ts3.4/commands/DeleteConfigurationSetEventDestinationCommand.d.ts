import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  DeleteConfigurationSetEventDestinationRequest,
  DeleteConfigurationSetEventDestinationResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer };
export { $Command };
export interface DeleteConfigurationSetEventDestinationCommandInput
  extends DeleteConfigurationSetEventDestinationRequest {}
export interface DeleteConfigurationSetEventDestinationCommandOutput
  extends DeleteConfigurationSetEventDestinationResponse,
    __MetadataBearer {}
declare const DeleteConfigurationSetEventDestinationCommand_base: {
  new (
    input: DeleteConfigurationSetEventDestinationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteConfigurationSetEventDestinationCommandInput,
    DeleteConfigurationSetEventDestinationCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteConfigurationSetEventDestinationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteConfigurationSetEventDestinationCommandInput,
    DeleteConfigurationSetEventDestinationCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteConfigurationSetEventDestinationCommand extends DeleteConfigurationSetEventDestinationCommand_base {
  protected static __types: {
    api: {
      input: DeleteConfigurationSetEventDestinationRequest;
      output: {};
    };
    sdk: {
      input: DeleteConfigurationSetEventDestinationCommandInput;
      output: DeleteConfigurationSetEventDestinationCommandOutput;
    };
  };
}
