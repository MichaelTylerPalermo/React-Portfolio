import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_CreateConfigurationSetTrackingOptionsCommand, se_CreateConfigurationSetTrackingOptionsCommand, } from "../protocols/Aws_query";
export { $Command };
export class CreateConfigurationSetTrackingOptionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("SimpleEmailService", "CreateConfigurationSetTrackingOptions", {})
    .n("SESClient", "CreateConfigurationSetTrackingOptionsCommand")
    .f(void 0, void 0)
    .ser(se_CreateConfigurationSetTrackingOptionsCommand)
    .de(de_CreateConfigurationSetTrackingOptionsCommand)
    .build() {
}
