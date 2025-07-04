import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  DeleteConfigurationSetRequest,
  DeleteConfigurationSetResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer };
export { $Command };
export interface DeleteConfigurationSetCommandInput
  extends DeleteConfigurationSetRequest {}
export interface DeleteConfigurationSetCommandOutput
  extends DeleteConfigurationSetResponse,
    __MetadataBearer {}
declare const DeleteConfigurationSetCommand_base: {
  new (
    input: DeleteConfigurationSetCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteConfigurationSetCommandInput,
    DeleteConfigurationSetCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteConfigurationSetCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteConfigurationSetCommandInput,
    DeleteConfigurationSetCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteConfigurationSetCommand extends DeleteConfigurationSetCommand_base {
  protected static __types: {
    api: {
      input: DeleteConfigurationSetRequest;
      output: {};
    };
    sdk: {
      input: DeleteConfigurationSetCommandInput;
      output: DeleteConfigurationSetCommandOutput;
    };
  };
}
