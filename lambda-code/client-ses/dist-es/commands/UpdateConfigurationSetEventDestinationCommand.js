import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_UpdateConfigurationSetEventDestinationCommand, se_UpdateConfigurationSetEventDestinationCommand, } from "../protocols/Aws_query";
export { $Command };
export class UpdateConfigurationSetEventDestinationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("SimpleEmailService", "UpdateConfigurationSetEventDestination", {})
    .n("SESClient", "UpdateConfigurationSetEventDestinationCommand")
    .f(void 0, void 0)
    .ser(se_UpdateConfigurationSetEventDestinationCommand)
    .de(de_UpdateConfigurationSetEventDestinationCommand)
    .build() {
}
